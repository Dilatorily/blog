import { isDevelopment } from '../utils';
import router from './router';
import logger from './logger';

const baseMiddleware = [router];
const developmentMiddleware = [logger];
const middleware = baseMiddleware.concat(
    isDevelopment ? developmentMiddleware : []
);

export default middleware;
