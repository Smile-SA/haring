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
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { disallowTypeAnnotations: false },
    ],
    '@typescript-eslint/no-invalid-void-type': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-handler-names': ['error', { checkLocalVariables: false }],
    'testing-library/no-node-access': 'off',
  },
};
