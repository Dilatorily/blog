import fs from 'fs';
import path from 'path';
import winston from 'winston';
import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import spdy from 'spdy';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { renderStylesToString } from 'emotion-server';
import { StaticRouter } from 'react-router-dom';

import getPosts from '../shared/assets/posts';
import App from '../shared/components/App';
import {
  cacheMaxAge,
  httpsPort,
  httpsMaxAge,
  pems,
  port,
} from '../../configuration';

winston.add(new winston.transports.Console());
winston.format.cli();
const listen = portToListen => (error) => {
  if (error) {
    winston.error(error);
  } else {
    winston.info(`Listening on port ${portToListen}`);
  }
};

const index = fs.readFileSync(path.resolve(__dirname, '..', 'public', 'index.html')).toString();
const key = fs.readFileSync(pems.key);
const cert = fs.readFileSync(pems.cert);

const app = express();
const secureApp = express();
const httpsApp = spdy.createServer({ key, cert }, secureApp);

(async () => {
  const posts = await getPosts();

  app.use((request, response) => response.redirect(`https://${request.headers.host}${request.path}`));
  app.listen(port, listen(port));

  secureApp.use(compression({ threshold: 0 }));
  secureApp.use(helmet.hsts({
    maxAge: httpsMaxAge,
    includeSubdomains: true,
    force: true,
  }));
  secureApp.use(express.static('public', { index: false, maxAge: cacheMaxAge }));
  secureApp.use((request, response) => {
    const context = {};
    const root = renderStylesToString(renderToStaticMarkup((
      <StaticRouter location={request.url} context={context}>
        <App posts={posts} />
      </StaticRouter>
    )));

    if (context.url) {
      response.redirect(301, context.url);
    } else {
      response.status(200).send(index.replace('<!-- root -->', root));
    }
  });

  httpsApp.listen(httpsPort, listen(httpsPort));
})();
