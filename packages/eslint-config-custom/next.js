module.exports = {
  extends: ['turbo', 'plugin:smile/next'],
  rules: {
    '@typescript-eslint/ban-types': ['error', { types: { Object: false } }],
    'require-await': 'off',
  },
};
