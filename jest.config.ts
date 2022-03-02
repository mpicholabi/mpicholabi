import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  moduleNameMapper: {
    '@core/(.*)': '<rootDir>/src/app/core/$1',
    '@/(.*)': '<rootDir>/src/$1'
  },
  verbose: true,
  preset: 'jest-preset-angular',
  collectCoverage: true,
  coverageDirectory: 'coverage/base-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globals: {
    'ts-jest': {
      stringifyContentPathRegex: '\\.html$',
    },
  },
};

export default config;
