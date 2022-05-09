const { app, BrowserWindow } = require('electron')
const path = require('path')
// const webapp = require('./app/webserver')

const createWindow = () => {
  const window = new BrowserWindow({
    width: 800,
    height: 600
  })

  // window.loadURL('http://localhost:3000')
  window.loadFile(path.resolve(__dirname, 'build', 'index.html'))
}

app.whenReady().then(() => {
  // webapp()
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
})
