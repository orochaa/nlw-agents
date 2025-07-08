import plugin from 'eslint-plugin-mist3rbru'

export default [
  plugin.configs.react,
  {
    rules: {
      '@typescript-eslint/no-magic-numbers': 'off',
      'react/jsx-no-bind': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
    },
  },
  {
    files: ['**/index.ts'],
    rules: {
      '@stylistic/padding-line-between-statements': 'off',
    },
  },
]
