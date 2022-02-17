module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.@(j|t)s?(x)'],
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text-summary'],
};
