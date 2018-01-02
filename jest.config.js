module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coverageDirectory: 'coverage',
  globals: { __DEV__: true },
  setupFiles: ['<rootDir>/jest.setup.js'],
};
