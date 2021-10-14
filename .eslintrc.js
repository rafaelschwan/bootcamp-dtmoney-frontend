module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx', '.ts', '.js'] }],
    'react/react-in-jsx-scope': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'linebreak-style': 0,
    'no-use-before-define': 0,
    'import/no-extraneous-dependencies': 0,
    'react/jsx-no-bind': 0,
  },
};
