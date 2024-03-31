/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime',
  ],
  plugins: ['react', 'prettier'],
  rules: {
    '@typescript-eslint/strict-boolean-expressions': 0,
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
