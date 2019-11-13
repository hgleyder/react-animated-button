const { resolve } = require('path');
const { modules } = require('./config/modules');

module.exports = {
  notify: true,
  rootDir: resolve(),
  testURL: 'http://localhost/',
  testRegex: '/*.test.js$',
  globals: {
    __DEVELOPMENT__: true,
  },
  /*--------*/
  collectCoverage: true,
  coverageReporters: ['lcov'],
  coverageDirectory: '__tests__/coverage',
  collectCoverageFrom: modules.map(module => `src/${module}/**/*.{js|jsx}`),
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  // https://github.com/facebook/jest/issues/2838
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/config/tests/mediaFileTransformer.js',
  },
  // https://github.com/akiran/react-slick#test-setup
  setupFiles: ['<rootDir>/config/tests/test-setup.js'],
  // https://github.com/facebook/create-react-app/issues/1909
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/config/tests/mocks/file.mock.js',
    '^.+\\.s?css$': '<rootDir>/config/tests/mocks/style.mock.js',
  },
};
