import { copyFileSync } from 'fs';
import { join, parse } from 'path';
import { Path } from '../constants';
import { createFolder, listFiles } from './utils';

const copyBuildFolder = () => {
  listFiles(Path.Build)
    .filter((file) => {
      const { name } = parse(file);
      return name !== 'index';
    })
    .forEach((file) => {
      const { base } = parse(file);
      copyFileSync(file, join(Path.Assets, base));
    });
};

const listAssets = (): Record<string, string> =>
  listFiles(Path.SourceAssets).reduce((assets, file) => {
    const { base } = parse(file);
    const newPath = join(Path.Assets, base);
    return Object.assign(assets, { [newPath]: file });
  }, {});

const copyAssets = () => {
  const assets = listAssets();
  Object.entries(assets).forEach(([destination, source]) => {
    copyFileSync(source, destination);
  });
};

export default () => {
  createFolder(Path.Assets);
  copyBuildFolder();
  copyAssets();
};
