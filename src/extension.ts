import { WebViewContext, renderWebView } from '@vsrx/core';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    WebViewContext.setContext(context);
    const disposable = vscode.commands.registerCommand('vsrx.helloWorld', () => {
        const panel = renderWebView('pages/about', {props: {name: 'Stanley'}});
        panel.send('score', {screen: 105});
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}