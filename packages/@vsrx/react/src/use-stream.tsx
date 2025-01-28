import { useEffect, useState } from "react";

export const useStream = (eventName: string) => {
    const [state, setState] = useState<any>(null);

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            const { event: messageEvent, payload } = event.data;
            if (messageEvent === eventName) {
                setState(payload);
            }
        };

        window.addEventListener('message', handleMessage);

        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, [eventName]);

    const sendMessage = (payload: any) => {
        window.postMessage({ event: eventName, payload }, '*');
    };

    return [state, sendMessage];
};