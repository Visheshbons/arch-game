/** @file Electron main process */
/** @description Creates the game window and renders the html and stuff */
/** @author electronjs docs */

const { app, BrowserWindow } = require('electron')
const path = require('node:path')

function createWindow () {
  const win = new BrowserWindow({
    // width: 800,
    // height: 600,
    fullscreen: true,
    frame: false,
    backgroundColor: '#000',
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs')
    }
  })

  win.loadFile('src/renderer/index.html')
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