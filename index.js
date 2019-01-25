const { app, BrowserWindow } = require('electron');

if(process.env.NODE_ENV === "development") {
  require('electron-reload')(__dirname);
}

function createWindow () {
  win = new BrowserWindow({ width: 1024, height: 768, webPreferences: { nodeIntegration: false } });
  win.webContents.openDevTools();
  win.loadURL(`file://${__dirname}/build/index.html`);
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});


