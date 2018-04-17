const electron = require('electron');
const { app, BrowserWindow, Menu } = electron;

app.on('ready', function() {

  // menu template 
  const template = [{
   	label: "Application",
   	submenu: [
        { label: "About iron", selector: "orderFrontStandardAboutPanel:" },
        { type: "separator" },
        { label: "Quit iron Dapp", accelerator: "Command+Q", click: function() { app.quit(); }}
    ]}, {
    label: "Edit",
    submenu: [
        { label: "Undo", accelerator: "CmdOrCtrl+Z", selector: "undo:" },
        { label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:" },
        { type: "separator" },
        { label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:" },
        { label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:" },
        { label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:" },
        { label: "Select All", accelerator: "CmdOrCtrl+A", selector: "selectAll:" }
    ]}
	];

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));

  let mainWindow = new BrowserWindow({
		width: 1200,
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
    app.quit();
	});
	 
});
