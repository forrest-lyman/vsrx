import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface ProgressSpinnerProps {
    value?: number; // value between 1-100
    indeterminate?: boolean;
    size?: 'small' | 'medium' | 'large';
    message?: string;
}

const sizes = {
    small: 24,
    medium: 48,
    large: 96,
};

const strokeWidths = {
    small: 2,
    medium: 3,
    large: 4,
};

const rotate = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

// Define the keyframes for the spinner animation
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Define the keyframes for the progress animation
const progress = keyframes`
  0% {
    stroke-dashoffset: 100;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

const SpinnerWrapper = styled.div`
  display: inline-block;
`;

const ProgressCircle = styled.circle<{ value: number; size: number; indeterminate?: boolean }>`
  stroke: #3498db;
  stroke-dasharray: 100;
  stroke-dashoffset: ${({ value }) => 100 - value};
  transition: stroke-dashoffset 0.35s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  ${({ indeterminate }) =>
    indeterminate &&
    css`
      animation: ${progress} 2s linear infinite;
    `}
`;

const Message = styled.div`
  margin-top: 8px;
  font-size: 14px;
  color: #333;
  text-align: center;
`;

export const ProgressSpinner: React.FC<ProgressSpinnerProps> = ({ message, value, indeterminate, size = 'medium' }) => {
  const diameter = sizes[size];
  const strokeWidth = strokeWidths[size];

  return (
    <>
      <svg width={diameter} height={diameter} viewBox={`0 0 ${diameter} ${diameter}`}>
        <circle
          cx={diameter / 2}
          cy={diameter / 2}
          r={(diameter / 2) - strokeWidth}
          fill="none"
          stroke="rgba(0, 0, 0, 0.1)"
          strokeWidth={strokeWidth}
        />
        <ProgressCircle
          cx={diameter / 2}
          cy={diameter / 2}
          r={(diameter / 2) - strokeWidth}
          fill="none"
          strokeWidth={strokeWidth}
          value={value || 0}
          size={diameter}
          indeterminate={indeterminate}
        />
      </svg>
      {message && <Message>{message}</Message>}
    </>
  );
};

export default ProgressSpinner;