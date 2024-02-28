import { readFileSync, writeFileSync } from 'fs';
import { join, parse } from 'path';
import { marked } from 'marked';
import React from 'react';
import Home from '../components/Home';
import { Encoding, Path } from '../constants';
import { generateHtml, listFiles } from './utils';

const listPosts = (): Record<string, string> =>
  listFiles(Path.Posts).reduce((routes, file) => {
    const { name } = parse(file);
    const markdown = readFileSync(file, Encoding['UTF-8']);
    const content = marked.parse(markdown);
    return Object.assign(routes, { [name]: content });
  }, {});

export default async () => {
  const posts = listPosts();
  const html = await generateHtml(<Home posts={posts} />);
  writeFileSync(join(Path.Documents, 'index.html'), html, Encoding['UTF-8']);
};
