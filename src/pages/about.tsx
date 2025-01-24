import React from 'react';
import { provideWebview } from '../lib/webview/provider';

const About: React.FC = () => {
    return (
        <div>
            <h1>About</h1>
        </div>
    );
};

export default provideWebview(About);