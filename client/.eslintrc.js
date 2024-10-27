module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier', 'simple-import-sort'],
  rules: {
    'prettier/prettier': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [['^react'], ['^@?\\w'], ['^@/?\\w'], ['^\\./'], ['^\\.\\.']],
      },
    ],
    'simple-import-sort/exports': 'error',
  },
};
