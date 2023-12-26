import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './test',
  testMatch: ['**/*.spec.ts'],
  reporter: 'html',
  timeout: 200000,
  expect: {
    toMatchSnapshot: { threshold: 0.2 },
  },
  retries: 3,
})
