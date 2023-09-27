module.exports = {
  extends: ['custom'],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  root: true,
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
};
