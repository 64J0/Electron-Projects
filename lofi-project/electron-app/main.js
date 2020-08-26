const { app, BrowserWindow } = require("electron");

const darkTheme = require("./colorDefaults");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    center: true,
    backgroundColor: darkTheme.background,
    webPreferences: {
      nodeIntegration: true,
      defaultFontFamily: "sansSerif",
      defaultFontSize: "18px"
    },
  });

  win.loadURL("http://localhost:3000");
  // win.loadFile("index.html");
}

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.whenReady().then(createWindow);
