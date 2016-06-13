const constants = require('./constants');

module.exports = {
    'callback-return': constants.OFF,
    'global-require': constants.ERROR,
    'handle-callback-err': constants.OFF,
    'no-mixed-requires': constants.OFF,
    'no-new-require': constants.ERROR,
    'no-path-concat': constants.ERROR,
    'no-process-env': constants.OFF,
    'no-process-exit': constants.ERROR,
    'no-restricted-modules': constants.OFF,
    'no-sync': constants.ERROR
};
