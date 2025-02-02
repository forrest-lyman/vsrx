import React from 'react';
import styled from 'styled-components';

const ListContainer = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    background-color: #252526;
    border: 1px solid #3c3c3c;
    border-radius: 4px;
    overflow: hidden;
`;

export interface ListProps {
    items?: Array<{ startSlot?: React.ReactNode; endSlot?: React.ReactNode; children: React.ReactNode }>;
    children?: React.ReactNode;
}

export interface RowProps {
    startSlot?: React.ReactNode;
    endSlot?: React.ReactNode;
    children: React.ReactNode;
}

export const Row: React.FC<RowProps> = ({ startSlot, endSlot, children }) => {
    return (
        <StyledRow>
            {startSlot && <div>{startSlot}</div>}
            <div>{children}</div>
            {endSlot && <div>{endSlot}</div>}
        </StyledRow>
    );
};

const StyledRow = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #3c3c3c;
    background-color: #1e1e1e;
    color: #d4d4d4;

    & > div {
        margin: 0 10px;
    }

    &:hover {
        background-color: #2a2d2e;
    }
`;

export const List: React.FC<ListProps> = ({ items, children }) => {
    return (
        <ListContainer>
            {items ? (
                items.map((item, index) => (
                    <Row key={index} startSlot={item.startSlot} endSlot={item.endSlot}>
                        {item.children}
                    </Row>
                ))
            ) : (children)}
            {}
        </ListContainer>
    );
};