import React from 'react';

const root = { __html: '<!-- root -->' };
const analytics = {
  __html: '(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,\'script\',\'https://www.google-analytics.com/analytics.js\',\'ga\');ga(\'create\',\'UA-82434766-1\',\'auto\');ga(\'send\',\'pageview\');',
};

const Html = () => (
  /* eslint-disable react/no-danger */
  <html lang="en">
    <head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <title>Huy Dang Lê-Ngô's Blog</title>
    </head>
    <body>
      <div id="root" dangerouslySetInnerHTML={root} />
      <script dangerouslySetInnerHTML={analytics} />
    </body>
  </html>
  /* eslint-enable react/no-danger */
);

export default Html;
