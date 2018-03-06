const electron = require('electron');
const { app, BrowserWindow } = electron;

app.on('ready', function() {
  let mainWindow = new BrowserWindow({
		width: 1400,
		height: 800,
		webPreferences:{
			nodeIntegration: false }
	});

  mainWindow.setTitle('iron Bank Network');
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.webContents.on('did-finish-load', function() {
    mainWindow.webContents.executeJavaScript();
  });

  	mainWindow.on('closed', () => {
		mainWindow = null;
	});
});
