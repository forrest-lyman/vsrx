import * as vscode from 'vscode';
import * as path from 'path';

// todo support sidebar and panel
export enum WebViewTargets {
    main = vscode.ViewColumn.One,
}

export interface WebViewOptions {
    target?: WebViewTargets;
    props?: any;
}

export class WebView {
    private instance: vscode.WebviewPanel | undefined;

    get props() {
        return this.options.props || {};
    }

    set props(props: any) { 
        this.options.props = props;
    }

    get panel() {
        if (!this.instance) {
            throw new Error('Webview instance not found');
        }
        return this.instance;
    }

    target: WebViewTargets = WebViewTargets.main;

    constructor(readonly filepath: string, private options: WebViewOptions = {}) {
        if (options.target) {
            this.target = options.target;
        }
    }

    send(event: string, payload: any) {
        if (! this.instance) {
            throw new Error('Webview instance not found');
        }
        this.instance.webview.postMessage({ event, payload });
    }

    addEventListener(event: string, callback: (payload: any) => void) {
        if (! this.instance) {
            throw new Error('Webview instance not found');
        }
        this.instance.webview.onDidReceiveMessage((message) => {
            if (message.event === event) {
                callback(message.payload);
            }
        });
    }

    public render(): vscode.WebviewPanel {
        if (!this.instance) {
            this.instance = vscode.window.createWebviewPanel(
                'webview',
                'Webview',
                this.target as any,
                {
                    enableScripts: true,
                }
            );
            this.instance.webview.html = this.getWebviewContent();
        }
        return this.instance;
    }

    private getWebviewContent() {
        if (! this.instance) {
            throw new Error('Webview instance not found');
        }

        const context = WebViewContext.getContext();
        const scriptPathOnDisk = vscode.Uri.file(
            path.join(context.extensionPath, 'out', this.filepath + '.bundle.js')
        );
    
        const scriptUri = this.instance.webview.asWebviewUri(scriptPathOnDisk);
    
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Hello World</title>
        </head>
        <body>
            <div id="root" data-props='${JSON.stringify(this.props)}'></div>
            <script src="${scriptUri}"></script>
        </body>
        </html>`;
    }
}


export class WebViewContext {
    private static instance: vscode.ExtensionContext;

    private constructor() {}

    static setContext(context: vscode.ExtensionContext) {
        if (!WebViewContext.instance) {
            WebViewContext.instance = context;
        }
    }

    static getContext(): vscode.ExtensionContext {
        if (!WebViewContext.instance) {
            throw new Error('WebViewContext has not been initialized.');
        }
        return WebViewContext.instance;
    }
}

export function initWebViews(context: vscode.ExtensionContext) {
    WebViewContext.setContext(context);
}

export function renderWebView(filepath: string, options: WebViewOptions = {}) {
    const webView = new WebView(filepath, options);
    webView.render();
    return webView;
}