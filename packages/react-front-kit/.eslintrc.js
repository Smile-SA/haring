module.exports = {
  extends: ['custom'],
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  root: true,
  rules: {
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { disallowTypeAnnotations: false },
    ],
    '@typescript-eslint/no-invalid-void-type': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-handler-names': ['error', { checkLocalVariables: false }],
  },
};
