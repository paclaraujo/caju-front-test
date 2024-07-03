module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier',
    'plugin:react-hooks/recommended'
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-named-as-default': 0,
    'import/no-unresolved': ['error', { 'ignore': ['^@/'] }],
    'react/display-name': 'off',
    '@typescript-eslint/ban-types': 'off',
    'import/named': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'indent': ['error', 2],
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'space-before-blocks': ['error', 'always'],
    'no-trailing-spaces': 'error',
    'no-var': 'error',
    'no-empty': 'error',
    'no-console': 'warn'
  },
};
