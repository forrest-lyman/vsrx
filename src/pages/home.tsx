import React from 'react';
import ReactDOM from 'react-dom/client';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Hello World from React!</h1>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Home />);