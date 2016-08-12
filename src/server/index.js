import { isDevelopment } from '../../configuration';

export default () => {
  if (isDevelopment) {
    require('./development').default(); // eslint-disable-line global-require
  } else {
    require('./production').default(); // eslint-disable-line global-require
  }
};
