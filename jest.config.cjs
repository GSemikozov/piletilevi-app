/* eslint-disable */
module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts', '!src/tests/__mocks__/**'],
  coveragePathIgnorePatterns: [],
  setupFilesAfterEnv: ['./config/jest/setup-tests.cjs'],
  modulePaths: ['<rootDir>/src'],
  transform: {
    '^.+\\.(ts|js|tsx|jsx)$': '@swc/jest',
    '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)': '<rootDir>/config/jest/file-transform.cjs',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$'],
  moduleNameMapper: {
    '^@config(.*)$': '<rootDir>/config/$1',
    '^@app(.*)$': '<rootDir>/src/app/$1',
    '^@widgets(.*)$': '<rootDir>/src/widgets/$1',
    '^@pages(.*)$': '<rootDir>/src/pages/$1',
    '^@routing(.*)$': '<rootDir>/src/routing/$1',
    '^@entities(.*)$': '<rootDir>/src/entities/$1',
    '^@shared(.*)$': '<rootDir>/src/shared/$1',
    '^@tests(.*)$': '<rootDir>/src/tests/$1',
  },
  moduleFileExtensions: [
    // Place tsx and ts to beginning as suggestion from Jest team
    // https://jestjs.io/docs/configuration#modulefileextensions-arraystring
    'tsx',
    'ts',
    'web.js',
    'js',
    'web.ts',
    'web.tsx',
    'json',
    'web.jsx',
    'jsx',
    'node',
  ],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  resetMocks: true,
};
