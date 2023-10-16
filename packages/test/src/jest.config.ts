import type { Config } from 'jest';

const config: Config = {
  setupFilesAfterEnv: ['<rootDir>/../test/setupTests.ts'],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['/node_modules/(?!(pretty-bytes)/)'],
};

export default config;
