module.exports = {
    root: true,
    extends: [
      '@nuxt/eslint-config',
      'plugin:prettier/recommended',
      'plugin:tailwindcss/recommended',
    ],
    plugins: ['tailwindcss'],
    parser: 'vue-eslint-parser',
    parserOptions: {
      parser: '@typescript-eslint/parser',
      rules: {
        'prefer-const': [
          'error',
          {
            destructuring: 'any',
            ignoreReadBeforeAssign: false,
          },
        ],
      },
    },
  }
  