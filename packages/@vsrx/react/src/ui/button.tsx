import React from 'react';
import styled from 'styled-components';

const secondaryStyles = `
    background-color: #e0e0e0;
    color: #333;

    &:hover {
        background-color: #c0c0c0;
    }

    &:active {
        background-color: #a0a0a0;
    }
`;

const linkStyles = `
    background: none;
    color: #007acc;
    padding: 0;
    text-decoration: underline;

    &:hover {
        color: #005a9e;
    }

    &:active {
        color: #004578;
    }
`;

const iconStyles = `
    background: none;
    color: #007acc;
    padding: 8px;
    border-radius: 50%;

    &:hover {
        background-color: rgba(0, 122, 204, 0.1);
    }

    &:active {
        background-color: rgba(0, 122, 204, 0.2);
    }
`;

const getButtonStyles = (variant?: 'primary' | 'secondary' | 'link' | 'icon') => {
    switch (variant) {
        case 'secondary':
            return secondaryStyles;
        case 'link':
            return linkStyles;
        case 'icon':
            return iconStyles;
        default:
            return '';
    }
};

const StyledButton = styled.button<{ variant?: 'primary' | 'secondary' | 'link' | 'icon' }>`
    background-color: #007acc;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 2px;
    font-size: 14px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: #005a9e;
    }

    &:active {
        background-color: #004578;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(0, 122, 204, 0.5);
    }

    &:disabled {
        background-color: #c0c0c0;
        cursor: not-allowed;
    }

    ${({ variant }) => getButtonStyles(variant)}
`;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'link' | 'icon';
}

export const Button: React.FC<ButtonProps> = ({ children, variant, ...props }) => {
    return <StyledButton variant={variant} {...props}>{children}</StyledButton>;
};