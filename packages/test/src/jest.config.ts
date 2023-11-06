import type { Config } from 'jest';

const config: Config = {
  moduleNameMapper: {
    '\\.(css|less)$': 'test/src/fileMock.ts',
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'test/src/fileMock.ts',
  },
  setupFilesAfterEnv: ['<rootDir>/../test/setupTests.ts'],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['/node_modules/(?!(pretty-bytes)/)'],
};

export default config;
