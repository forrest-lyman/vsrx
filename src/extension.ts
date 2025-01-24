import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "vsrx" is now active!');

    const disposable = vscode.commands.registerCommand('vsrx.helloWorld', () => {
        const panel = vscode.window.createWebviewPanel(
            'helloWorldWebview', // Identifies the type of the webview. Used internally
            'Hello World', // Title of the panel displayed to the user
            vscode.ViewColumn.One, // Editor column to show the new webview panel in
            {} // Webview options. More on these later.
        );

        // And set its HTML content
        panel.webview.html = getWebviewContent();
    });

    context.subscriptions.push(disposable);
}

function getWebviewContent() {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello World</title>
    </head>
    <body>
        <h1>Hello World from vsrx!</h1>
    </body>
    </html>`;
}

export function deactivate() {}