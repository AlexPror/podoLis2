import { defineConfigWithVueTs } from '@vue/eslint-config-typescript'

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
    rules: {
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: 2,
          multiline: 1,
        },
      ],
    },
  }
)
