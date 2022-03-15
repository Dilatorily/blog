module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.@(j|t)s?(x)'],
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text-summary'],
  moduleNameMapper: { '\\.(css|jpg)$': 'identity-obj-proxy' },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
};
