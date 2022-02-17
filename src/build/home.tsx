import { readFileSync, writeFileSync } from 'fs';
import { join, parse } from 'path';
import { marked } from 'marked';
import React from 'react';
import Home from '../components/Home';
import { Path } from '../constants';
import { generateHtml, listFiles } from './utils';

const listPosts = (): Record<string, string> =>
  listFiles(Path.Posts).reduce((routes, file) => {
    const { name } = parse(file);
    const markdown = readFileSync(file, 'utf8');
    const content = marked.parse(markdown);
    return Object.assign(routes, { [name]: content });
  }, {});

export default () => {
  const posts = listPosts();
  const html = generateHtml(<Home posts={posts} />);
  writeFileSync(join(Path.Documents, 'index.html'), html, 'utf8');
};
