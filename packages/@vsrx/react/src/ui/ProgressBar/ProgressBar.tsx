import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface ProgressBarProps {
    value?: number; // Value between 1 and 100
    indeterminate?: boolean;
    message?: string; // Message to display above the progress bar
}

const indeterminateAnimation = keyframes`
    0% {
        left: -100%;
        width: 100%;
    }
    50% {
        left: 0;
        width: 100%;
    }
    100% {
        left: 100%;
        width: 10%;
    }
`;

const ProgressBarContainer = styled.div`
    width: 100%;
    height: 4px; /* VS Code progress bar is thinner */
    background-color: #1e1e1e; /* Dark background */
    border-radius: 2px;
    overflow: hidden;
    position: relative;
`;

const ProgressBarValue = styled.div<{ value: number }>`
    height: 100%;
    background-color: #007acc; /* VS Code blue color */
    width: ${({ value }) => value}%;
    transition: width 0.3s ease;
    role: progressbar;
`;

const IndeterminateBar = styled.div`
    height: 100%;
    background-color: #007acc; /* VS Code blue color */
    position: absolute;
    animation: ${indeterminateAnimation} 2s infinite;
`;



const Message = styled.div`
    margin-bottom: 8px;
    color: #ffffff; /* White color for the message */
    font-size: 14px;
`;

export const ProgressBar: React.FC<ProgressBarProps> = ({ value = 0, indeterminate = false, message }) => {
    return (
        <>
            {message && <Message>{message}</Message>}
            <ProgressBarContainer>
                {indeterminate ? <IndeterminateBar /> : <ProgressBarValue value={value} />}
            </ProgressBarContainer>
        </>
    );
};


export default ProgressBar;