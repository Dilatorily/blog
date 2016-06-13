const constants = require('./constants');

module.exports = {
    'arrow-body-style': [constants.ERROR, 'as-needed'],
    'arrow-parens': [constants.ERROR, 'always'],
    'arrow-spacing': [constants.ERROR, { before: true, after: true }],
    'constructor-super': constants.ERROR,
    'generator-star-spacing': [constants.ERROR, { before: false, after: true }],
    'no-class-assign': constants.ERROR,
    'no-confusing-arrow': [constants.ERROR, { allowParens: true }],
    'no-const-assign': constants.ERROR,
    'no-dupe-class-members': constants.ERROR,
    'no-duplicate-imports': constants.ERROR,
    'no-new-symbol': constants.ERROR,
    'no-restricted-imports': constants.OFF,
    'no-this-before-super': constants.ERROR,
    'no-useless-computed-key': constants.ERROR,
    'no-useless-constructor': constants.ERROR,
    'no-useless-rename': constants.ERROR,
    'no-var': constants.ERROR,
    'object-shorthand': [constants.ERROR, 'always', {
        ignoreConstructors: false,
        avoidQuotes: true
    }],
    'prefer-arrow-callback': constants.ERROR,
    'prefer-const': constants.ERROR,
    'prefer-reflect': constants.OFF,
    'prefer-rest-params': constants.ERROR,
    'prefer-spread': constants.ERROR,
    'prefer-template': constants.ERROR,
    'require-yield': constants.ERROR,
    'rest-spread-spacing': [constants.ERROR, 'never'],
    'sort-imports': constants.OFF,
    'template-curly-spacing': [constants.ERROR, 'always'],
    'yield-star-spacing': [constants.ERROR, 'after']
};
