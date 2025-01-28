import React from 'react';
import {useStream, provideWebview} from '@vsrx/react';

const About: React.FC = ({name}: any) => {


    const [score, sendScore] = useStream('score');

    // useEffect(() => {
    //     sendScore({ score: 100 });
    // }, []);

    console.log(score);

    return (
        <div>
            <h1>Hello {name}</h1>
        </div>
    );
};

export default provideWebview(About);