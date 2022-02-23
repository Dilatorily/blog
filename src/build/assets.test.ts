import { copyFileSync, writeFileSync } from 'fs';
import { Encoding, Path } from '../constants';
import buildAssets from './assets';
import { createFolder, listFiles } from './utils';

jest.mock('fs', () => ({
  ...jest.requireActual('fs'),
  copyFileSync: jest.fn(),
  writeFileSync: jest.fn(),
}));

jest.mock('./utils', () => ({
  ...jest.requireActual('./utils'),
  createFolder: jest.fn(),
  listFiles: jest.fn(),
}));

describe('buildAssets', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('creates the assets folder', () => {
    jest.mocked(listFiles).mockReturnValue([]);

    buildAssets();

    expect(createFolder).toHaveBeenCalledWith(Path.Assets);
  });

  it('creates the .nojekyll file', () => {
    buildAssets();

    expect(writeFileSync).toHaveBeenCalledWith('docs/.nojekyll', '', Encoding['UTF-8']);
  });

  it('creates the CNAME file', () => {
    buildAssets();

    expect(writeFileSync).toHaveBeenCalledWith(
      'docs/CNAME',
      'huy-dang.le-ngo.com',
      Encoding['UTF-8'],
    );
  });

  it('copies the assets in the build folder to the destination assets folder', () => {
    jest
      .mocked(listFiles)
      .mockReturnValueOnce([
        'build/font.ttf',
        'build/image.jpg',
        'build/index.js',
        'build/stylesheet.css',
      ]);

    buildAssets();

    expect(copyFileSync).toHaveBeenCalledTimes(3);
    expect(copyFileSync).toHaveBeenCalledWith('build/font.ttf', 'docs/assets/font.ttf');
    expect(copyFileSync).toHaveBeenCalledWith('build/image.jpg', 'docs/assets/image.jpg');
    expect(copyFileSync).toHaveBeenCalledWith('build/stylesheet.css', 'docs/assets/stylesheet.css');
  });

  it('does not copy the index files in the build folder', () => {
    jest
      .mocked(listFiles)
      .mockReturnValueOnce([
        'build/font.ttf',
        'build/image.jpg',
        'build/index.js',
        'build/stylesheet.css',
      ]);

    buildAssets();

    expect(copyFileSync).not.toHaveBeenCalledWith('build/index.js', expect.any(String));
  });

  it('copies the source assets folder to the destination assets folder', () => {
    jest
      .mocked(listFiles)
      .mockReturnValueOnce([])
      .mockReturnValueOnce([
        'src/assets/favicon/favicon.ico',
        'src/assets/favicon/manifest.json',
        'src/assets/images/image.png',
      ]);

    buildAssets();

    expect(copyFileSync).toHaveBeenCalledWith(
      'src/assets/favicon/favicon.ico',
      'docs/assets/favicon.ico',
    );
    expect(copyFileSync).toHaveBeenCalledWith(
      'src/assets/favicon/manifest.json',
      'docs/assets/manifest.json',
    );
    expect(copyFileSync).toHaveBeenCalledWith(
      'src/assets/images/image.png',
      'docs/assets/image.png',
    );
  });
});
