import { readFileSync, writeFileSync } from 'fs';
import { encode } from 'html-entities';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Home from '../components/Home';
import { Encoding } from '../constants';
import buildHome from './home';
import { generateHtml, listFiles } from './utils';

jest.mock('fs', () => ({
  ...jest.requireActual('fs'),
  readFileSync: jest.fn(),
  writeFileSync: jest.fn(),
}));

jest.mock('../components/Home', () => ({
  ...jest.requireActual('../components/Home'),
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('./utils', () => ({
  ...jest.requireActual('./utils'),
  generateHtml: jest.fn(),
  listFiles: jest.fn(),
}));

const postContent = '<h1>Hello World!</h1>';

describe('buildHome', () => {
  beforeAll(() => {
    jest.mocked(readFileSync).mockReturnValue(postContent);
    jest.mocked(Home).mockImplementation(({ posts }) => <>{JSON.stringify(posts)}</>);
    jest
      .mocked(generateHtml)
      .mockImplementation((children) => renderToStaticMarkup(<>{children}</>));
    jest
      .mocked(listFiles)
      .mockReturnValue([
        '/path/to/test/folder/file1.js',
        '/path/to/test/folder/file2.js',
        '/path/to/test/folder/file3.js',
      ]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('writes the home file', () => {
    buildHome();
    expect(writeFileSync).toHaveBeenCalledWith(
      'docs/index.html',
      encode(JSON.stringify({ file1: postContent, file2: postContent, file3: postContent })),
      Encoding['UTF-8'],
    );
  });
});
