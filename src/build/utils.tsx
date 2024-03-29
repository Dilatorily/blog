import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'fs';
import { join, parse } from 'path';
import { collect } from '@linaria/server';
import md5 from 'md5';
import React, { ReactNode } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Html from '../components/Html';
import Root from '../components/Root';
import { Encoding, Path } from '../constants';

export const createFolder = (folder: string) => {
  if (!existsSync(folder)) {
    mkdirSync(folder, { recursive: true });
  }
};

export const createFolderForFile = (file: string) => {
  const { dir } = parse(file);
  createFolder(dir);
};

export const generateHtml = (children: ReactNode) => {
  const body = renderToStaticMarkup(<Root>{children}</Root>);
  const serviceWorker = readFileSync(join(Path.Build, 'serviceWorker.js'), Encoding['UTF-8']);
  const css = readFileSync(join(Path.Build, 'index.css'), Encoding['UTF-8']);
  const { critical, other } = collect(body, css);

  const stylesheet = `styles.${md5(other)}.css`;
  if (other) {
    const stylesheetPath = join(Path.Assets, stylesheet);
    writeFileSync(stylesheetPath, other, Encoding['UTF-8']);
  }

  const html = renderToStaticMarkup(
    <Html
      critical={critical}
      serviceWorker={serviceWorker}
      stylesheet={other ? `/assets/${stylesheet}` : undefined}
    >
      {body}
    </Html>,
  );

  return `<!DOCTYPE html>${html}`;
};

export const listFiles = (path: string): string[] =>
  readdirSync(path).flatMap((fileOrFolder) => {
    const childPath = join(path, fileOrFolder);
    if (statSync(childPath).isDirectory()) {
      return listFiles(childPath);
    }

    return childPath;
  });
