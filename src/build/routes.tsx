import { copyFileSync, readFileSync, writeFileSync } from 'fs';
import { join, parse, relative } from 'path';
import { noop } from 'lodash';
import { marked } from 'marked';
import React from 'react';
import Post from '../components/Post';
import { Extension, Path } from '../constants';
import { createFolderForFile, generateHtml, listFiles } from './utils';

const listRoutes = (): Record<string, string> =>
  listFiles(Path.Routes).reduce((routes, file) => {
    const relativePath = relative(Path.Routes, file);
    const { dir, ext, name } = parse(relativePath);

    if (ext === Extension.HTML) {
      return Object.assign(routes, { [relativePath]: file });
    }

    const newPath = join(dir, `${name}.html`);
    return Object.assign(routes, { [newPath]: file });
  }, {});

const processHtml = (source: string, destination: string) => {
  copyFileSync(source, destination);
};

const processMarkdown = (source: string, destination: string) => {
  const { name } = parse(source);
  const markdown = readFileSync(source, 'utf8');
  const content = marked.parse(markdown);
  const html = generateHtml(<Post date={name}>{content}</Post>);
  writeFileSync(destination, html, 'utf8');
};

const processFileByExtension: Record<
  string,
  ((source: string, destination: string) => void) | undefined
> = {
  [Extension.HTML]: processHtml,
  [Extension.Markdown]: processMarkdown,
};

export default () => {
  const routes = listRoutes();
  Object.entries(routes).forEach(async ([route, source]) => {
    const destination = join(Path.Documents, route);
    createFolderForFile(destination);

    const { ext } = parse(source);
    const processFile = processFileByExtension[ext] ?? noop;
    processFile(source, destination);
  });
};
