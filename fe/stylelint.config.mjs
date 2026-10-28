/** @type {import('stylelint').Config} */
const stylelintConfig = {
  extends: ['stylelint-config-standard'],
  ignoreFiles: ['.next/**', 'out/**', 'build/**', 'coverage/**'],
  rules: {
    // Tailwind CSS v4 directives
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'theme',
          'source',
          'utility',
          'variant',
          'custom-variant',
          'apply',
          'reference',
          'config',
          'plugin',
          'tailwind',
        ],
      },
    ],
    'at-rule-no-deprecated': [true, { ignoreAtRules: ['apply'] }],
    'import-notation': 'string',
  },
}

export default stylelintConfig
