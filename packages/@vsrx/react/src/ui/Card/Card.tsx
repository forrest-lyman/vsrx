import React from 'react';
import styled from 'styled-components';

export const CardContainer = styled.div`
    background-color: #222;
    border: 1px solid #333;
    color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 400px;
`;

export const CardHeader = styled.div`
    font-size: 1.5em;
    margin-bottom: 8px;
`;

export const CardBody = styled.div`
    font-size: 1em;
`;

export const CardFooter = styled.div`
    margin-top: 8px;
`;

export const CardActions = styled(CardFooter)`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`;

export interface CardActionProps {
    label: string;
    onClick: () => void;
}

export interface CardProps {
    header: string | React.ReactNode;
    body: string | React.ReactNode;
    footer?: string | React.ReactNode;
    actions?: CardActionProps[];
    children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ header, body, footer, actions, children }) => {
    if (children) {
        return <CardContainer>{children}</CardContainer>;
    }
    
    return (
        <CardContainer>
            <CardHeader>{header}</CardHeader>
            <CardBody>{body}</CardBody>
            {footer && <CardFooter>{footer}</CardFooter>}
            {actions && (
                <CardActions>
                    {actions.map((action) => (
                        <button key={action.label} onClick={action.onClick}>
                            {action.label}
                        </button>
                    ))}
                </CardActions>
            )}
        </CardContainer>
    );
};

export default Card;