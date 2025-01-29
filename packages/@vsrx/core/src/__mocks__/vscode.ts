export const window = {
    createWebviewPanel: jest.fn(),
};

export const ViewColumn = {
    One: 1,
};

export const Uri = {
    file: jest.fn(),
};

export class WebviewPanel {
    public webview = {
        html: '',
        postMessage: jest.fn(),
        onDidReceiveMessage: jest.fn(),
        asWebviewUri: jest.fn().mockReturnValue('scriptUri'),
    };
}