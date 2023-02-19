module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: [
    'react',
    'react-hooks',
    'import',
    '@typescript-eslint'
  ],
  rules: {
    'indent': [2, 2],
    'jsx-quotes': ['error', 'prefer-single'],
    quotes: ['error', 'single'],
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/no-unresolved': [2, {
      'commonjs': true,
      'amd': true
    }],
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@/app', './client/app']
        ],
        extensions: ['.js', '.jsx']
      }
    }
  }
}