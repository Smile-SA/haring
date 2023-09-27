module.exports = {
  extends: [
    'turbo',
    'plugin:smile/react',
    'plugin:smile/ts',
    'plugin:smile/jest',
  ],
  overrides: [
    {
      files: ['**/__tests__/**/*', '**/*.{spec,test}.*'],
      rules: {
        '@typescript-eslint/no-floating-promises': 'off',
      },
    },
  ],
  rules: {
    'testing-library/no-node-access': 'off',
  },
};
