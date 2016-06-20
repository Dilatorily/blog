const constants = require('./constants');

module.exports = {
    'react/jsx-boolean-value': [constants.ERROR, 'never'],
    'react/jsx-closing-bracket-location': [constants.ERROR, 'line-aligned'],
    'react/jsx-curly-spacing': [constants.ERROR, 'always'],
    'react/jsx-equals-spacing': [constants.ERROR, 'never'],
    'react/jsx-filename-extension': constants.ERROR,
    'react/jsx-first-prop-new-line': [constants.ERROR, 'multiline'],
    'react/jsx-handler-names': [constants.ERROR, {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on'
    }],
    'react/jsx-indent': [constants.ERROR, constants.INDENTATION],
    'react/jsx-indent-props': [constants.ERROR, constants.INDENTATION],
    'react/jsx-key': constants.ERROR,
    'react/jsx-max-props-per-line': [constants.ERROR, { maximum: 1 }],
    'react/jsx-no-bind': [constants.ERROR, {
        ignoreRefs: false,
        allowArrowFunctions: false,
        allowBind: false
    }],
    'react/jsx-no-duplicate-props': [constants.ERROR, { ignoreCase: false }],
    'react/jsx-no-literals': constants.OFF,
    'react/jsx-no-target-blank': constants.ERROR,
    'react/jsx-no-undef': constants.ERROR,
    'react/jsx-pascal-case': [constants.ERROR, { allowAllCaps: false }],
    'react/jsx-sort-props': constants.OFF,
    'react/jsx-space-before-closing': [constants.ERROR, 'always'],
    'react/jsx-uses-react': constants.ERROR,
    'react/jsx-uses-vars': constants.ERROR
};
