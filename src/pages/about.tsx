import React from 'react';
import { provideWebview } from '../lib/cient/provider';

const About: React.FC = ({name}: any) => {
    return (
        <div>
            <h1>Hello {name}</h1>
        </div>
    );
};

export default provideWebview(About);