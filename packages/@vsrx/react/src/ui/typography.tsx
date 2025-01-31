import React from 'react';
import styled from 'styled-components';

const StyledTypography = styled.div<{ variant: Variant; stylesArray: Style[]; color: Color }>`
    &.typography-body {
        font-size: 1rem;
    }
    &.typography-h1 {
        font-size: 2rem;
    }
    &.typography-h2 {
        font-size: 1.75rem;
    }
    &.typography-h3 {
        font-size: 1.5rem;
    }
    &.typography-h4 {
        font-size: 1.25rem;
    }
    &.typography-small {
        font-size: 0.875rem;
    }
    &.typography-italic {
        font-style: italic;
    }
    &.typography-bold {
        font-weight: bold;
    }
    &.typography-normal {
    }
    &.typography-warning {
        color: orange;
    }
    &.typography-danger {
        color: red;
    }
    &.typography-info {
        color: blue;
    }
    &.typography-success {
        color: green;
    }
    &.typography-muted {
        color: #6c757d;
    }
`;

type Variant = 'body' | 'h1' | 'h2' | 'h3' | 'h4' | 'small';
type Style = 'normal' | 'italic' | 'bold';
type Color = 'normal' | 'warning' | 'danger' | 'info' | 'success' | 'muted';

interface TypographyProps {
    variant?: Variant;
    style?: Style | Style[];
    color?: Color;
    children: React.ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({
    variant = 'body',
    style = 'normal',
    color = 'normal',
    children,
}) => {
    const stylesArray = Array.isArray(style) ? style : [style];
    return (
        <StyledTypography
            variant={variant}
            stylesArray={stylesArray}
            color={color}
            className={`typography-${variant} ${stylesArray.map(s => `typography-${s}`).join(' ')} typography-${color}`}
        >
            {children}
        </StyledTypography>
    );
};