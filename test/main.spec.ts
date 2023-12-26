import { _electron } from 'playwright'
import { test, expect, ElectronApplication } from '@playwright/test'
import path from 'node:path'

let electronApp: ElectronApplication

test.beforeAll(async () => {
  const pathMain = path.join('./', 'dist-electron', 'main.js')

  process.env.CI = 'e2e'

  electronApp = await _electron.launch({
    args: [pathMain],
  })

  electronApp.on('window', async (page) => {
    const filename = page.url()?.split('/').pop()
    console.log(`Window opened: ${filename}`)

    // capture errors
    page.on('pageerror', (error) => {
      console.error(error)
    })
    // capture console messages
    page.on('console', (msg) => {
      console.log(msg.text())
    })
  })
})

test('App launches and quits', async () => {
  const window = await electronApp.firstWindow()
  await expect(await window.title()).toContain('Vite + Vue + TS')
})

test.afterAll(async () => {
  await electronApp.close()
})
