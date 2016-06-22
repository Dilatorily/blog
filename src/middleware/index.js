import { isDevelopment } from '../utils';
import logger from './logger';

const baseMiddleware = [];
const developmentMiddleware = [logger];
const middleware = baseMiddleware.concat(
    isDevelopment ?
    developmentMiddleware :
    []
);

export default middleware;
