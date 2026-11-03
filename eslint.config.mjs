import github from 'eslint-plugin-github';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import globals from 'globals';

export default [
  github.getFlatConfigs().recommended,
  {
    files: ['src/**/*.ts'],
    plugins: {
      '@typescript-eslint': tsPlugin
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 9,
        sourceType: 'module',
        project: './tsconfig.json'
      },
      globals: {
        ...globals.node,
        ...globals.es2017
      }
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      'import/no-namespace': 'off',
      'i18n-text/no-en': 'off',
      'no-unused-vars': ['error', {caughtErrors: 'none'}]
    }
  },
  {
    ignores: ['dist/**', 'lib/**', 'node_modules/**']
  }
];
