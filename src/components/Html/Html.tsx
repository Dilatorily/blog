import React, { memo, useMemo } from 'react';
import HtmlParser from '../HtmlParser';

interface HtmlProps {
  children: string;
  critical: string;
  stylesheet?: string;
}

function Html({ children, critical, stylesheet = '' }: HtmlProps) {
  const criticalStyle = useMemo(() => ({ __html: critical }), [critical]);

  return (
    <html lang="en">
      <head>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta charSet="utf-8" />
        <meta content="width=device-width,initial-scale=1" name="viewport" />
        <meta content="#ff7e71" name="theme-color" />
        <title>Huy Dang Lê-Ngô&apos;s Blog</title>
        <link href="/assets/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
        <link href="/assets/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
        <link
          href="/assets/android-chrome-192x192.png"
          rel="icon"
          sizes="192x192"
          type="image/png"
        />
        <link href="/assets/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
        <link href="/assets/manifest.json" rel="manifest" />
        <link color="#ff7e71" href="/assets/safari-pinned-tab.svg" rel="mask-icon" />
        <meta content="Huy Dang L&ecirc;-Ng&ocirc;'s Blog" name="apple-mobile-web-app-title" />
        <meta content="Huy Dang L&ecirc;-Ng&ocirc;'s Blog" name="application-name" />
        <meta content="#ff7e71" name="msapplication-TileColor" />
        <meta content="/assets/mstile-144x144.png" name="msapplication-TileImage" />
        <style
          dangerouslySetInnerHTML={criticalStyle} // eslint-disable-line react/no-danger
          type="text/css"
        />
      </head>
      <body>
        <HtmlParser>{children}</HtmlParser>
        {stylesheet && <link href={stylesheet} rel="stylesheet" />}
      </body>
    </html>
  );
}

export default memo(Html);
