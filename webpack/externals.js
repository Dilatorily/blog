const { isTest } = require('../configuration');

module.exports = isTest ? {
  cheerio: 'window',
  'react/addons': true,
  'react/lib/ReactContext': true,
  'react/lib/ExecutionEnvironment': true,
} : undefined;
