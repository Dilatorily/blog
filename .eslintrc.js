module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:react-perf/recommended',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],
  overrides: [
    {
      extends: ['plugin:testing-library/react'],
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    },
  ],
  parserOptions: { project: './tsconfig.eslint.json' },
  plugins: ['sort-destructure-keys'],
  rules: {
    'import/order': [
      'error',
      {
        alphabetize: { caseInsensitive: true, order: 'asc' },
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
      },
    ],
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    'react/jsx-sort-props': ['error', { ignoreCase: true }],
    'react/require-default-props': [
      'error',
      { forbidDefaultForRequired: true, ignoreFunctionalComponents: true },
    ],
    'sort-destructure-keys/sort-destructure-keys': ['error', { caseSensitive: false }],
    'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }],
    'sort-keys': ['error', 'asc', { caseSensitive: false, natural: true }],
  },
  settings: { 'testing-library/custom-renders': 'off' },
};
