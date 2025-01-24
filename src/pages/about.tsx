import React from 'react';
import ReactDOM from 'react-dom/client';

const About: React.FC = () => {
    return (
        <div>
            <h1>About</h1>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<About />);