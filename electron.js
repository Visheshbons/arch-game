/** @file Electron main process */
/** @description Creates the game window and renders the html and stuff */
/** @author electronjs docs */

// import { app, BrowserWindow } from 'electron';
// doesnt work bc electron is a rhodic
// so we need to do this stupid shit
import electron from 'electron';
const { app, BrowserWindow } = electron;
// so its like its a .cjs not a .mjs

import path from 'node:path'

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})