module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {},
    },
  },

  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react-hooks/exhaustive-deps': 0,

    '@typescript-eslint/ban-ts-comment': [2, { 'ts-ignore': 'allow-with-description' }],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-namespace': 0,

    'import/order': [
      2,
      {
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal', 'index', 'parent', 'sibling', 'type'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@reduxjs/**',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@config/**',
            group: 'internal',
            position: 'after',
          },
        ],
        distinctGroup: false,
      },
    ],
  },
};
