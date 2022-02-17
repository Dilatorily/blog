import buildAssets from './assets';
import buildHome from './home';
import buildRoutes from './routes';

const buildPublicFolder = () => {
  buildAssets();
  buildHome();
  buildRoutes();
};

buildPublicFolder();
