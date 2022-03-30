import buildAssets from './assets';
import buildHome from './home';
import buildRoutes from './routes';

const buildDocsFolder = () => {
  buildAssets();
  buildHome();
  buildRoutes();
};

buildDocsFolder();

export default buildDocsFolder;
