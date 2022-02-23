import { existsSync, mkdirSync, readdirSync, Stats, statSync, writeFileSync } from 'fs';
import { collect } from '@linaria/server';
import md5 from 'md5';
import React, { FC } from 'react';
import Html from '../components/Html';
import Root from '../components/Root';
import { Encoding } from '../constants';
import { createFolder, createFolderForFile, generateHtml, listFiles } from './utils';

jest.mock('fs', () => ({
  ...jest.requireActual('fs'),
  existsSync: jest.fn(),
  mkdirSync: jest.fn(),
  readdirSync: jest.fn(),
  statSync: jest.fn(),
  writeFileSync: jest.fn(),
}));

jest.mock('@linaria/server', () => ({
  ...jest.requireActual('@linaria/server'),
  collect: jest.fn(),
}));

jest.mock('md5', () => ({
  ...jest.requireActual('md5'),
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('../components/Html', () => ({
  ...jest.requireActual('../components/Html'),
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('../components/Root', () => ({
  ...jest.requireActual('../components/Root'),
  __esModule: true,
  default: jest.fn(),
}));

describe('utils', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('createFolder', () => {
    it('creates the folder if it does not exist', () => {
      jest.mocked(existsSync).mockReturnValue(false);

      createFolder('/path/to/test/folder');

      expect(mkdirSync).toHaveBeenCalledWith('/path/to/test/folder', { recursive: true });
    });

    it('does not create the folder if it exists', () => {
      jest.mocked(existsSync).mockReturnValue(true);

      createFolder('/path/to/test/folder');

      expect(mkdirSync).not.toHaveBeenCalled();
    });
  });

  describe('createFolderForFile', () => {
    it('creates the parent folder of the file if it does not exist', () => {
      jest.mocked(existsSync).mockReturnValue(false);

      createFolderForFile('/path/to/test/folder/test-file.abc');

      expect(mkdirSync).toHaveBeenCalledWith('/path/to/test/folder', { recursive: true });
    });

    it('does not create the parent folder of the file if it exists', () => {
      jest.mocked(existsSync).mockReturnValue(true);

      createFolderForFile('/path/to/test/folder/test-file.abc');

      expect(mkdirSync).not.toHaveBeenCalled();
    });
  });

  describe('generateHtml', () => {
    beforeAll(() => {
      jest.mocked(collect).mockImplementation(() => ({
        critical: 'body{font-size:16px}',
        other: 'body{display:block}',
      }));
      jest.mocked(md5).mockImplementation(() => 'abc123');
      jest.mocked(Root).mockImplementation((({ children }) => children) as FC);
      jest.mocked(Html).mockImplementation((({ children }) => (
        <html lang="en">
          <body>{children}</body>
        </html>
      )) as FC);
    });

    it('returns the content of a HTML page', () => {
      const results = generateHtml('Hello World!');

      expect(results).toBe('<!DOCTYPE html><html lang="en"><body>Hello World!</body></html>');
    });

    it('creates a stylesheet if there are non-critical styles', () => {
      generateHtml('Hello World!');

      expect(writeFileSync).toHaveBeenCalledWith(
        'docs/assets/styles.abc123.css',
        'body{display:block}',
        Encoding['UTF-8'],
      );
    });

    it('does not create a stylesheet if there are no non-critical styles', () => {
      jest
        .mocked(collect)
        .mockImplementation(() => ({ critical: 'body{font-size:16px}', other: '' }));

      generateHtml('Hello World!');

      expect(writeFileSync).not.toHaveBeenCalled();
    });
  });

  describe('listFiles', () => {
    it('returns the list of files in a folder', () => {
      jest
        .mocked<(path: string) => string[]>(readdirSync)
        .mockImplementationOnce(() => ['file1.js', 'file2.js', 'file3.js']);
      jest.mocked(statSync).mockImplementation(() => ({ isDirectory: () => false } as Stats));

      const results = listFiles('/path/to/test/folder');

      expect(results).toEqual([
        '/path/to/test/folder/file1.js',
        '/path/to/test/folder/file2.js',
        '/path/to/test/folder/file3.js',
      ]);
    });

    it('recursively returns the list of files in a folder', () => {
      jest
        .mocked<(path: string) => string[]>(readdirSync)
        .mockImplementationOnce(() => ['child-folder', 'file1.js', 'file2.js', 'file3.js'])
        .mockImplementationOnce(() => ['child-file1.js', 'child-file2.js', 'child-file3.js']);
      jest
        .mocked(statSync)
        .mockImplementationOnce(() => ({ isDirectory: () => true } as Stats))
        .mockImplementation(() => ({ isDirectory: () => false } as Stats));

      const results = listFiles('/path/to/test/folder');

      expect(results).toEqual([
        '/path/to/test/folder/child-folder/child-file1.js',
        '/path/to/test/folder/child-folder/child-file2.js',
        '/path/to/test/folder/child-folder/child-file3.js',
        '/path/to/test/folder/file1.js',
        '/path/to/test/folder/file2.js',
        '/path/to/test/folder/file3.js',
      ]);
    });
  });
});
