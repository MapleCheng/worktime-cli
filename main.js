const { app, BrowserWindow, globalShortcut } = require("electron");
const path = require("path");

let mainWindow;

// 避免多開
const gotTheLock = app.requestSingleInstanceLock();
if (!gotTheLock) {
  app.quit();
  return;
}

function createWindow() {
  // create browser window
  mainWindow = new BrowserWindow({
    title: "服務簽到系統",
    width: 400,
    height: 600,
    minWidth: 400,
    minHeight: 600,
    maxWidth: 400,
    maxHeight: 600,
    x: 50,
    y: 50,
    icon: path.join(__dirname, "./build/icon.ico"),
  });

  // load application
  mainWindow.loadFile(path.join(__dirname, "./build/index.html"));

  // hide menu
  mainWindow.setMenuBarVisibility(false);

  // dev tools
  // mainWindow.webContents.openDevTools()

  // close window
  mainWindow.on("closed", function () {
    mainWindow = null;
  });
}
app.on("ready", createWindow);
app.on("add", (event) => {
  event.preventDefault();
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", function () {
  if (mainWindow === null) {
    createWindow();
  }
});
