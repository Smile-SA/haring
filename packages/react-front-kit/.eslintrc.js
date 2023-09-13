module.exports = {
  extends: ['custom'],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  root: true,
  rules: {
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-handler-names': ['error', { checkLocalVariables: false }],
  },
};
