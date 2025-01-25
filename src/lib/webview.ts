import * as vscode from 'vscode';

// todo support sidebar and panel
export enum WebViewTargets {
    main = vscode.ViewColumn.One,
}

export interface WebViewOptions {
    target?: WebViewTargets;
}

export class WebView {
    private instance: vscode.WebviewPanel | undefined;
    
    target: WebViewTargets = WebViewTargets.main;

    constructor(readonly filepath: string, options: WebViewOptions = {}) {
        if (options.target) {
            this.target = options.target;
        }
    }

    dispatch(action: string, payload: any) {
        // const webView = this.getWebView();
        // webView.postMessage({ action, payload });
    }

    onDispatch(action: string, callback: (payload: any) => void) {
        // const webView = this.getWebView();
        // webView.onDidReceiveMessage((message) => {
        //     if (message.action === action) {
        //         callback(message.payload);
        //     }
        // });
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
}