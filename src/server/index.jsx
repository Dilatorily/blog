import fs from 'fs';
import path from 'path';
import http2 from 'http2';
import winston from 'winston';
import Koa from 'koa';
import koaCompress from 'koa-compress';
import koaHelmet from 'koa-helmet';
import koaStatic from 'koa-static';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
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

const app = new Koa();
const secureApp = new Koa();
const httpsApp = http2.createSecureServer({ key, cert }, secureApp.callback());

(async () => {
  const posts = await getPosts();

  app.use(ctx => ctx.redirect(`https://${ctx.host}${ctx.path}`));
  app.listen(port, listen(port));

  secureApp.use(koaCompress({ threshold: 0 }));
  secureApp.use(koaHelmet.hsts({ maxAge: httpsMaxAge, includeSubdomains: true }));
  secureApp.use(koaStatic('public', { index: false, maxAge: cacheMaxAge }));
  secureApp.use((ctx) => {
    const context = {};
    const root = renderToStaticMarkup((
      <StaticRouter location={ctx.url} context={context}>
        <App posts={posts} />
      </StaticRouter>
    ));

    if (context.url) {
      ctx.status = 301;
      ctx.redirect(context.url);
    } else {
      ctx.status = 200;
      ctx.body = index.replace('<!-- root -->', root);
    }
  });

  httpsApp.listen(httpsPort, listen(httpsPort));
})();
