const constants = require('./constants');

module.exports = {
    'init-declarations': constants.OFF,
    'no-catch-shadow': constants.ERROR,
    'no-delete-var': constants.ERROR,
    'no-label-var': constants.ERROR,
    'no-restricted-globals': constants.OFF,
    'no-shadow': constants.ERROR,
    'no-shadow-restricted-names': constants.ERROR,
    'no-undef': constants.ERROR,
    'no-undef-init': constants.OFF,
    'no-undefined': constants.OFF,
    'no-unused-vars': constants.ERROR,
    'no-use-before-define': constants.ERROR
};
