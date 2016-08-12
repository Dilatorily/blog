import fs from 'fs';

import express from 'express'; // eslint-disable-line import/no-extraneous-dependencies
import compression from 'compression'; // eslint-disable-line import/no-extraneous-dependencies
import helmet from 'helmet'; // eslint-disable-line import/no-extraneous-dependencies
import https from 'https';
import engines from 'consolidate'; // eslint-disable-line import/no-extraneous-dependencies
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { StyleRoot } from 'radium';

import { httpsMaxAge, cacheMaxAge, port, httpsPort, pems } from '../../configuration';
import configuration from '../../webpack.config';
import routes from '../shared/routes';
import listen from './listen';

export default () => {
  const app = express();
  const secureApp = express();
  const httpsApp = https.createServer({
    key: fs.readFileSync(pems.key),
    cert: fs.readFileSync(pems.cert),
  }, secureApp);

  app.use((request, response) => response.redirect(`https://${request.headers.host}${request.path}`));
  app.listen(port, listen(port));

  secureApp.engine('html', engines.dot);
  secureApp.use(compression({ threshold: 0 }));
  secureApp.use(helmet.hsts({
    maxAge: httpsMaxAge,
    includeSubdomains: true,
    force: true,
  }));
  secureApp.use(express.static(configuration.output.path, { maxAge: cacheMaxAge }));
  secureApp.use((request, response) => {
    match({ routes, location: request.url }, (error, redirect, props) => {
      if (error) {
        response.status(500).send(error.message);
      } else if (redirect) {
        response.redirect(302, redirect.pathname + redirect.search);
      } else {
        const root = renderToStaticMarkup(
          <StyleRoot radiumConfig={{ userAgent: request.headers['user-agent'] }}>
            <RouterContext {...props} />
          </StyleRoot>
        );
        response.status(200).render('index.html', { root });
      }
    });
  });

  httpsApp.listen(httpsPort, listen(httpsPort));
};
