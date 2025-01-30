import React from 'react';
import styled from 'styled-components';



const getSizeStyles = (size?: 'small' | 'medium' | 'large') => {
    switch (size) {
        case 'small':
            return `
                padding: 4px 8px;
                font-size: 12px;
            `;
        case 'large':
            return `
                padding: 12px 24px;
                font-size: 16px;
            `;
        case 'medium':
        default:
            return `
                padding: 8px 16px;
                font-size: 14px;
            `;
    }
};

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

const outlineStyles = `
    background: none;
    border: 1px solid #007acc;
    color: #007acc;

    &:hover {
        background-color: #f0f8ff;
    }

    &:active {
        background-color: #e0f0ff;
    }
`;

const getButtonStyles = (variant?: 'primary' | 'secondary' | 'link' | 'icon' | 'outline') => {
    switch (variant) {
        case 'secondary':
            return secondaryStyles;
        case 'link':
            return linkStyles;
        case 'icon':
            return iconStyles;
        case 'outline':
            return outlineStyles;
        default:
            return '';
    }
};

const StyledButton = styled.button<{ variant?: 'primary' | 'secondary' | 'link' | 'icon' | 'outline', size?: 'small' | 'medium' | 'large' }>`
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
    ${({ size }) => getSizeStyles(size)}
`;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'link' | 'icon' | 'outline';
    size?: 'small' | 'medium' | 'large';
}

export const Button: React.FC<ButtonProps> = ({ children, variant, size, ...props }) => {
    return <StyledButton size={size} variant={variant} {...props}>{children}</StyledButton>;
};



