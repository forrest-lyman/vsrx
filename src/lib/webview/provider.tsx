import React from 'react';
import ReactDOM from 'react-dom/client';

export function provideWebview(Component: React.FC) {
    const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
    root.render(<Component />);
}