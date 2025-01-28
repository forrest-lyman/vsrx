import React from 'react';
import ReactDOM from 'react-dom/client';

export function provideWebview(Component: React.FC) {
    const rootElement = document.getElementById('root') as HTMLElement;
    const root = ReactDOM.createRoot(rootElement);
    const props = rootElement ? JSON.parse(rootElement.getAttribute('data-props') || '{}') : {};
    root.render(<Component {...props} />);
}