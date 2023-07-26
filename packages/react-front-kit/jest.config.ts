import type { Config } from 'jest';

const config: Config = {
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  testEnvironment: 'jsdom',
};

export default config;
