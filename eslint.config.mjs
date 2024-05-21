// eslint config .mjs
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    languageOptions: {
      globals: {
        process: 'readonly',
      },
      sourceType: 'module',
      parser: tsParser,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      '@typescript-eslint': tsPlugin,
    },

    rules: {
      'no-unused-vars': 'error',
      'no-unused-expressions': 'error',
      'prefer-const': 'error',
      'no-console': 'warn',
      'no-undef': 'warn',
    },
  },
  {
    ignores: ['node_modules', 'dist'],
  },
];
