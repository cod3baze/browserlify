const { app, BrowserWindow, globalShortcut, dialog } = require("electron");
const path = require("path");

let win = null;

function createWindow() {
  win = new BrowserWindow({
    width: 1300,
    height: 700,
    titleBarStyle: "hidden",
    center: true,
    darkTheme: true,
    backgroundColor: "#212134",
    title: "Loading..",
    alwaysOnTop: false,
    webPreferences: {
      nodeIntegration: true,
      defaultFontSize: 14,
      nativeWindowOpen: true,
      webviewTag: true,
    },
  });

  win.webContents.on("crashed", () => {
    const options = {
      type: "Info",
      title: "Render process crashed",
      message: "This process has crashed",
      buttons: ["Reload", "Close"],
    };

    dialog.showMessageBox(options, (index) => {
      if (index === 1) return win.reload();
      else return win.close();
    });
  });

  const file = path.join(__dirname, "public", "index.html");
  win.loadFile(file);
}

function toggleDevTools() {
  win.webContents.toggleDevTools();
}

function createShortcuts() {
  globalShortcut.register("CmdOrCtrl+j", toggleDevTools);
}

app.whenReady().then(createWindow).then(createShortcuts);

app.on("window-all-closed", () => {
  if (process.platform === "darwin") {
    return app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
