import * as vscode from 'vscode';
import { WebView, WebViewTargets, WebViewOptions, WebViewContext, renderWebView } from './webview';

jest.mock('vscode');

describe('WebView', () => {
    let context: vscode.ExtensionContext;

    beforeEach(() => {
        context = {
            extensionPath: '/path/to/extension',
        } as any;
        WebViewContext.setContext(context);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should initialize with default target', () => {
        const webView = new WebView('test.html');
        expect(webView.target).toBe(WebViewTargets.main);
    });

    it('should initialize with provided target', () => {
        const options: WebViewOptions = { target: WebViewTargets.main };
        const webView = new WebView('test.html', options);
        expect(webView.target).toBe(WebViewTargets.main);
    });

    it('should throw error if instance is not found when accessing panel', () => {
        const webView = new WebView('test.html');
        expect(() => webView.panel).toThrow('Webview instance not found');
    });

    jest.mock('vscode');

    describe('WebView', () => {
        let context: vscode.ExtensionContext;

        beforeEach(() => {
            context = {
                extensionPath: '/path/to/extension',
            } as any;
            WebViewContext.setContext(context);
        });

        afterEach(() => {
            jest.clearAllMocks();
        });

        it('should initialize with default target', () => {
            const webView = new WebView('test.html');
            expect(webView.target).toBe(WebViewTargets.main);
        });

        it('should initialize with provided target', () => {
            
            const options: WebViewOptions = { target: WebViewTargets.main };
            const webView = new WebView('test.html', options);
            expect(webView.target).toBe(WebViewTargets.main);
        });

        it('should throw error if instance is not found when accessing panel', () => {
            const webView = new WebView('test.html');
            expect(() => webView.panel).toThrow('Webview instance not found');
        });

        it('should throw error if instance is not found when sending message', () => {
            const webView = new WebView('test.html');
            expect(() => webView.send('testEvent', {})).toThrow('Webview instance not found');
        });

        it('should throw error if instance is not found when adding event listener', () => {
            const webView = new WebView('test.html');
            expect(() => webView.addEventListener('testEvent', jest.fn())).toThrow('Webview instance not found');
        });

        it('should create a webview panel when rendering', () => {
            
            const createWebviewPanelMock = vscode.window.createWebviewPanel as jest.Mock;
            const asWebviewUriMock = jest.fn().mockReturnValue('scriptUri');
            createWebviewPanelMock.mockReturnValue({
                webview: {
                    html: '',
                    postMessage: jest.fn(),
                    asWebviewUri: jest.fn(),
                },
            });

            const webView = new WebView('test.html');
            webView.render();

            expect(createWebviewPanelMock).toHaveBeenCalledWith(
                'webview',
                'Webview',
                WebViewTargets.main,
                { enableScripts: true }
            );
        });

        it('should set webview HTML content when rendering', () => {
            const createWebviewPanelMock = vscode.window.createWebviewPanel as jest.Mock;
            const webviewMock = {
                html: '',
                postMessage: jest.fn(),
                onDidReceiveMessage: jest.fn(),
                asWebviewUri: jest.fn().mockReturnValue('scriptUri'),
            };
            createWebviewPanelMock.mockReturnValue({ webview: webviewMock });

            const webView = new WebView('test.html');
            webView.render();

            expect(webviewMock.html).toContain('<!DOCTYPE html>');
            expect(webviewMock.html).toContain('<div id="root" data-props=\'{}\'>');
        });

        it('should get webview content', () => {
            const createWebviewPanelMock = vscode.window.createWebviewPanel as jest.Mock;
            const webviewMock = {
                html: '',
                postMessage: jest.fn(),
                onDidReceiveMessage: jest.fn(),
                asWebviewUri: jest.fn().mockReturnValue('scriptUri'),
            };
            createWebviewPanelMock.mockReturnValue({ webview: webviewMock });

            const webView = new WebView('test.html');
            webView.render();

            const content = webView['getWebviewContent']();
            expect(content).toContain('<!DOCTYPE html>');
            expect(content).toContain('<div id="root" data-props=\'{}\'>');
            expect(content).toContain('<script src="scriptUri"></script>');
        });

        it('should send message to webview', () => {
            const createWebviewPanelMock = vscode.window.createWebviewPanel as jest.Mock;
            const postMessageMock = jest.fn();
            createWebviewPanelMock.mockReturnValue({
                webview: {
                    html: '',
                    postMessage: postMessageMock,
                    onDidReceiveMessage: jest.fn(),
                    asWebviewUri: jest.fn(),
                },
            });

            const webView = new WebView('test.html');
            webView.render();
            webView.send('testEvent', { data: 'test' });

            expect(postMessageMock).toHaveBeenCalledWith({ event: 'testEvent', payload: { data: 'test' } });
        });

        it('should add event listener to webview', () => {
            const createWebviewPanelMock = vscode.window.createWebviewPanel as jest.Mock;
            const onDidReceiveMessageMock = jest.fn();
            createWebviewPanelMock.mockReturnValue({
                webview: {
                    html: '',
                    postMessage: jest.fn(),
                    onDidReceiveMessage: onDidReceiveMessageMock,
                    asWebviewUri: jest.fn(),
                },
            });

            const webView = new WebView('test.html');
            webView.render();
            const callback = jest.fn();
            webView.addEventListener('testEvent', callback);

            const messageHandler = onDidReceiveMessageMock.mock.calls[0][0];
            messageHandler({ event: 'testEvent', payload: { data: 'test' } });

            expect(callback).toHaveBeenCalledWith({ data: 'test' });
    });
    });

    it('should set webview HTML content when rendering', () => {
        const createWebviewPanelMock = vscode.window.createWebviewPanel as jest.Mock;
        const webviewMock = {
            html: '',
            postMessage: jest.fn(),
            onDidReceiveMessage: jest.fn(),
            asWebviewUri: jest.fn(),
        };
        createWebviewPanelMock.mockReturnValue({ webview: webviewMock });

        const webView = new WebView('test.html');
        webView.render();

        expect(webviewMock.html).toContain('<!DOCTYPE html>');
        expect(webviewMock.html).toContain('<div id="root" data-props=\'{}\'>');
    });

    it('should get webview content', () => {
        const createWebviewPanelMock = vscode.window.createWebviewPanel as jest.Mock;
        const webviewMock = {
            html: '',
            postMessage: jest.fn(),
            onDidReceiveMessage: jest.fn(),
            asWebviewUri: jest.fn().mockReturnValue('scriptUri'),
        };
        createWebviewPanelMock.mockReturnValue({ webview: webviewMock });

        const webView = new WebView('test.html');
        webView.render();

        const content = webView['getWebviewContent']();
        expect(content).toContain('<!DOCTYPE html>');
        expect(content).toContain('<div id="root" data-props=\'{}\'>');
        expect(content).toContain('<script src="scriptUri"></script>');
    });
});