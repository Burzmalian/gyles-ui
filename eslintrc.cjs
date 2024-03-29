/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
        groups: ['external', 'builtin', ['internal', 'sibling', 'parent', 'index'], 'object', 'type'],
      },
    ],
  },
};
