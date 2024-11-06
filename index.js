const { app, BrowserWindow } = require("electron");
const path = require("path");

const CreateWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        }
    });

    win.loadFile("./pages/index.html");
}

app.whenReady().then(() => {
    CreateWindow();
});

app.on("activate", () => {
    if(BrowserWindow.getAllWindows().length === 0) CreateWindow();
});

app.on("window-all-closed", () => {
    if(process.platform !== "darwin") app.quit();
});