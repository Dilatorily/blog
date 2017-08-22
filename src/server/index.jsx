import fs from 'fs';
import path from 'path';
import winston from 'winston'; // eslint-disable-line import/no-extraneous-dependencies
import express from 'express'; // eslint-disable-line import/no-extraneous-dependencies
import compression from 'compression'; // eslint-disable-line import/no-extraneous-dependencies
import helmet from 'helmet'; // eslint-disable-line import/no-extraneous-dependencies
import spdy from 'spdy'; // eslint-disable-line import/no-extraneous-dependencies
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { StyleRoot } from 'radium';

import getPosts from '../shared/assets/posts';
import App from '../shared/components/App';
import { httpsMaxAge, cacheMaxAge, port, httpsPort, pems } from '../../configuration';

winston.cli();
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
  secureApp.use(express.static('public', { maxAge: cacheMaxAge }));
  secureApp.use((request, response) => {
    const context = {};
    const root = renderToStaticMarkup(
      <StyleRoot radiumConfig={{ userAgent: request.headers['user-agent'] }}>
        <StaticRouter location={request.url} context={context}>
          <App posts={posts} />
        </StaticRouter>
      </StyleRoot>,
    );

    if (context.url) {
      response.redirect(301, context.url);
    } else {
      response.status(200).send(index.replace('<!-- root -->', root));
    }
  });

  httpsApp.listen(httpsPort, listen(httpsPort));
})();
