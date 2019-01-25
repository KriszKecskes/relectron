const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

if(process.env.NODE_ENV === "development") {
  const reload = require('electron-reload')(path.resolve(__dirname, 'build'));
}

function createWindow () {

  win = new BrowserWindow({ 
    width: 1024, 
    height: 768, 
    minHeight: 768,
    minWidth: 1024,
    webPreferences: { nodeIntegration: false }
  });

  win.setMenu(null);

  win.loadURL(url.format({
    pathname: path.resolve(__dirname, 'build', 'index.html'),
    protocol: 'file',
    slashes: true,
  }));

  if(process.env.NODE_ENV === "development") {
    win.webContents.openDevTools();
  }

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


