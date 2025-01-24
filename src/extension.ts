import * as vscode from 'vscode';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "vsrx" is now active!');

    const disposable = vscode.commands.registerCommand('vsrx.helloWorld', () => {
        const panel = vscode.window.createWebviewPanel(
            'helloWorldWebview',
            'Hello World',
            vscode.ViewColumn.One,
            {
                enableScripts: true,
            }
        );

        panel.webview.html = getWebviewContent(context, panel.webview);
    });

    context.subscriptions.push(disposable);
}

function getWebviewContent(context: vscode.ExtensionContext, webview: vscode.Webview) {
    const scriptPathOnDisk = vscode.Uri.file(
        path.join(context.extensionPath, 'out', 'pages', 'about.bundle.js')
    );

    const scriptUri = webview.asWebviewUri(scriptPathOnDisk);

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello World</title>
    </head>
    <body>
        <div id="root"></div>
        <script src="${scriptUri}"></script>
    </body>
    </html>`;
}

export function deactivate() {}