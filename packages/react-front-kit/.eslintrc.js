module.exports = {
  extends: ['custom'],
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  root: true,
  rules: {
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-handler-names': ['error', { checkLocalVariables: false }],
  },
};
