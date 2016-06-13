const constants = require('./constants');

module.exports = {
    'react/display-name': constants.OFF,
    'react/forbid-prop-types': constants.OFF,
    'react/no-danger': constants.ERROR,
    'react/no-deprecated': constants.ERROR,
    'react/no-did-mount-set-state': constants.ERROR,
    'react/no-did-update-set-state': constants.ERROR,
    'react/no-direct-mutation-state': constants.ERROR,
    'react/no-is-mounted': constants.ERROR,
    'react/no-multi-comp': constants.ERROR,
    'react/no-set-state': constants.ERROR,
    'react/no-string-refs': constants.ERROR,
    'react/no-unknown-property': constants.ERROR,
    'react/prefer-es6-class': [constants.ERROR, 'always'],
    'react/prefer-stateless-function': constants.ERROR,
    'react/prop-types': constants.ERROR,
    'react/react-in-jsx-scope': constants.ERROR,
    'react/require-extension': constants.OFF,
    'react/require-optimization': constants.OFF,
    'react/require-render-return': constants.ERROR,
    'react/self-closing-comp': constants.ERROR,
    'react/sort-comp': constants.OFF,
    'react/sort-prop-types': constants.OFF,
    'react/wrap-multilines': constants.ERROR
};
