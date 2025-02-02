import React from 'react';
import { Decorator } from '@storybook/react';
import styled from 'styled-components';

const Vsc = styled.div`
    font-family: 'Segoe WPC', 'Segoe UI', sans-serif;
    font-size: 14px;
    line-height: 1.5;
`;

const Sidebar = styled.div<{ noPadding: boolean }>`
    width: 320px;
    height: 80vh;
    padding: ${({ noPadding }) => (noPadding ? '0' : '16px')};
    box-sizing: border-box;
    background-color: #141414;
    color: #fff;
`;

interface WithSidebarProps {
    noPadding?: boolean;
}

export const withSidebar: Decorator = (Story, context) => {
    const { noPadding = false } = context.args as WithSidebarProps;
    return (
        <Vsc>
            <Sidebar noPadding={noPadding}>
                <Story {...context} />
            </Sidebar>
        </Vsc>
    );
};