import { copyFileSync, writeFileSync } from 'fs';
import { join, parse } from 'path';
import { Encoding, Path } from '../constants';
import { createFolder, listFiles } from './utils';

const createRootFiles = () => {
  writeFileSync(join(Path.Documents, '.nojekyll'), '', Encoding['UTF-8']);
  writeFileSync(join(Path.Documents, 'CNAME'), 'huy-dang.le-ngo.com', Encoding['UTF-8']);
};

const copyFileToAssets = (file: string) => {
  const { base } = parse(file);
  copyFileSync(file, join(Path.Assets, base));
};

const copyBuildFolder = () =>
  listFiles(Path.Build)
    .filter((file) => {
      const { name } = parse(file);
      return name !== 'index';
    })
    .forEach(copyFileToAssets);

const copyAssetsFolder = () => listFiles(Path.SourceAssets).forEach(copyFileToAssets);

export default () => {
  createFolder(Path.Assets);
  createRootFiles();
  copyBuildFolder();
  copyAssetsFolder();
};
