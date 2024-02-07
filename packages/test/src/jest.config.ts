import type { Config } from 'jest';

const config: Config = {
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'test/cssModuleMock',
    '\\.(css|less)$': 'test/fileMock',
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'test/fileMock',
  },
  roots: ['src'],
  setupFilesAfterEnv: ['test/setupTests'],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['/node_modules/(?!(pretty-bytes)/)'],
};

export default config;
