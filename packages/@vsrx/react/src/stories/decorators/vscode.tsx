import React from 'react';
import { Decorator } from '@storybook/react';
import styled from 'styled-components';

const Vsc = styled.div`
    font-family: 'Segoe WPC', 'Segoe UI', sans-serif;
    font-size: 14px;
    line-height: 1.5;
`;

const Sidebar = styled.div`
    width: 320px;
    height: 80vh;
    padding: 16px;
    box-sizing: border-box;
    background-color: #141414;
    color: #fff;
`;

export const withSidebar: Decorator = (Story, context) => (
    <Vsc>
        <Sidebar>
            <Story {...context} />
        </Sidebar>
    </Vsc>
);