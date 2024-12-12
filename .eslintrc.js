module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier', 'simple-import-sort'],
  parser: '@typescript-eslint/parser',
  rules: {
    'prettier/prettier': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [['^react'], ['^@?\\w'], ['^@/?\\w'], ['^\\./'], ['^\\.\\.']],
      },
    ],
    '@typescript-eslint/consistent-type-imports': 'error',
    'simple-import-sort/exports': 'error',
  },
};
