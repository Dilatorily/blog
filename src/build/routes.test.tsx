import { copyFileSync, readFileSync, writeFileSync } from 'fs';
import noop from 'lodash/noop';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import HtmlParser from '../components/HtmlParser';
import Post from '../components/Post';
import { Encoding } from '../constants';
import buildRoutes from './routes';
import { createFolderForFile, generateHtml, listFiles } from './utils';

jest.mock('fs', () => ({
  ...jest.requireActual('fs'),
  copyFileSync: jest.fn(),
  readFileSync: jest.fn(),
  writeFileSync: jest.fn(),
}));

jest.mock('lodash/noop', () => ({
  ...jest.requireActual('lodash/noop'),
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('../components/Post', () => ({
  ...jest.requireActual('../components/Post'),
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('./utils', () => ({
  ...jest.requireActual('./utils'),
  createFolderForFile: jest.fn(),
  generateHtml: jest.fn(),
  listFiles: jest.fn(),
}));

describe('buildRoutes', () => {
  beforeAll(() => {
    jest.mocked(readFileSync).mockReturnValue('# Hello World!');
    jest.mocked(Post).mockImplementation(({ children }) => <HtmlParser>{children}</HtmlParser>);
    jest
      .mocked(generateHtml)
      .mockImplementation((children) => renderToStaticMarkup(<>{children}</>));
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('creates the parent folder for the processed file', () => {
    jest.mocked(listFiles).mockReturnValue(['src/routes/path/to/test/folder/file.html']);
    buildRoutes();
    expect(createFolderForFile).toHaveBeenCalledWith('docs/path/to/test/folder/file.html');
  });

  it('processes HTML files', () => {
    jest
      .mocked(listFiles)
      .mockReturnValue([
        'src/routes/path/to/test/folder/file1.html',
        'src/routes/path/to/test/folder/file2.html',
        'src/routes/path/to/test/folder/file3.html',
      ]);

    buildRoutes();
    expect(copyFileSync).toHaveBeenCalledTimes(3);
    expect(copyFileSync).toHaveBeenCalledWith(
      'src/routes/path/to/test/folder/file1.html',
      'docs/path/to/test/folder/file1.html',
    );
    expect(copyFileSync).toHaveBeenCalledWith(
      'src/routes/path/to/test/folder/file2.html',
      'docs/path/to/test/folder/file2.html',
    );
    expect(copyFileSync).toHaveBeenCalledWith(
      'src/routes/path/to/test/folder/file3.html',
      'docs/path/to/test/folder/file3.html',
    );
  });

  it('processes Markdown files', () => {
    jest
      .mocked(listFiles)
      .mockReturnValue([
        'src/routes/path/to/test/folder/file1.md',
        'src/routes/path/to/test/folder/file2.md',
        'src/routes/path/to/test/folder/file3.md',
      ]);

    buildRoutes();
    expect(writeFileSync).toHaveBeenCalledTimes(3);
    expect(writeFileSync).toHaveBeenCalledWith(
      'docs/path/to/test/folder/file1.html',
      expect.stringContaining('<h1 id="hello-world">Hello World!</h1>'),
      Encoding['UTF-8'],
    );
    expect(writeFileSync).toHaveBeenCalledWith(
      'docs/path/to/test/folder/file2.html',
      expect.stringContaining('<h1 id="hello-world">Hello World!</h1>'),
      Encoding['UTF-8'],
    );
    expect(writeFileSync).toHaveBeenCalledWith(
      'docs/path/to/test/folder/file3.html',
      expect.stringContaining('<h1 id="hello-world">Hello World!</h1>'),
      Encoding['UTF-8'],
    );
  });

  it('does not process other files', () => {
    jest
      .mocked(listFiles)
      .mockReturnValue([
        'src/routes/path/to/test/folder/file1.js',
        'src/routes/path/to/test/folder/file2.js',
        'src/routes/path/to/test/folder/file3.js',
      ]);

    buildRoutes();
    expect(noop).toHaveBeenCalledTimes(3);
    expect(noop).toHaveBeenCalledWith(
      'src/routes/path/to/test/folder/file1.js',
      'docs/path/to/test/folder/file1.html',
    );
    expect(noop).toHaveBeenCalledWith(
      'src/routes/path/to/test/folder/file2.js',
      'docs/path/to/test/folder/file2.html',
    );
    expect(noop).toHaveBeenCalledWith(
      'src/routes/path/to/test/folder/file3.js',
      'docs/path/to/test/folder/file3.html',
    );
  });
});
