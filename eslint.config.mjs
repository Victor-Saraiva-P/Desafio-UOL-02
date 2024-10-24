import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: 'req|res|next|val' },
      ],
    },
  },
  {
    files: ['jest.config.js'], // Aplica somente ao arquivo jest.config.js
    languageOptions: {
      globals: globals.node, // Define o ambiente Node.js
    },
    rules: {
      'no-undef': 'off', // Desativa a regra `no-undef` para este arquivo específico
    },
  },
];
