import type { Config } from 'jest';

const config: Config = {
  setupFilesAfterEnv: ['<rootDir>/../test/setupTests.ts'],
  testEnvironment: 'jsdom',
};

export default config;
