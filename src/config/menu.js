const {
  BrowserWindow,
} = require('electron')

let template = [{
    label: 'Reload',
    accelerator: 'CmdOrCtrl+R',
    click: (item, focusedWindow) => {
      if (focusedWindow) {
        if (focusedWindow.id === 1) {
          BrowserWindow.getAllWindows().forEach((win) => {
            if (win.id > 1) win.close()
          })
        }
        focusedWindow.reload()
      }
    }
  },
  {
    label: 'Toogle window',
    accelerator: ((item, focusedWindow) => {
      if (process.platform === "darwin") {
        return 'Ctrl+Command+F'
      } else {
        return 'F11'
      }
    })(),
    click: (item, focusedWindow) => {
      if (focusedWindow) {
        focusedWindow.setFullScreen(!focusedWindow.isFullScreen())
      }
    }
  },
  {
    label: '!Fixar',
    accelerator: 'CmdOrCtrl+Shift+P',
    role: 'aba',
    click: (item, focusedWindow) => {
      if (focusedWindow) {
        focusedWindow.alwaysOnTop = !focusedWindow.alwaysOnTop
        focusedWindow.reload()
        return
      }
      return
    }
  },
  {
    label: 'Close',
    accelerator: 'CmdOrCtrl+X',
    role: 'ex'
  },
  {
    label: 'Elias',
    accelerator: 'CmdOrCtrl+E'
  }
]

module.exports = template
