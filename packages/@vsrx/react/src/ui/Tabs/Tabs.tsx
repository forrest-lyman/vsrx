import React, { useState } from 'react';
import styled from 'styled-components';

const TabsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const TabList = styled.div`
    display: flex;
    border-bottom: 1px solid #333;
    background-color: #1e1e1e;
`;

const Tab = styled.button<{ isActive: boolean }>`
    padding: 10px 20px;
    cursor: pointer;
    background: ${({ isActive }) => (isActive ? '#252526' : '#2d2d2d')};
    color: ${({ isActive }) => (isActive ? '#fff' : '#ccc')};
    border: none;
    border-bottom: ${({ isActive }) => (isActive ? '2px solid #007acc' : 'none')};
    outline: none;
    font-size: 14px;

    &:hover {
        background: #3e3e3e;
    }
`;

const TabPanelContainer = styled.div`
    padding: 20px;
    border: 1px solid #333;
    border-top: none;
    background-color: #1e1e1e;
    color: #d4d4d4;
`;

interface TabPanelProps {
    title: string;
    children: React.ReactNode;
}

const TabPanel: React.FC<TabPanelProps> = ({ children }) => {
    return <TabPanelContainer>{children}</TabPanelContainer>;
};

interface TabsProps {
    children: React.ReactElement<TabPanelProps>[];
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <TabsContainer>
            <TabList>
                {children.map((child, index) => (
                    <Tab
                        key={index}
                        isActive={index === activeIndex}
                        onClick={() => setActiveIndex(index)}
                    >
                        {child.props.title}
                    </Tab>
                ))}
            </TabList>
            {children[activeIndex]}
        </TabsContainer>
    );
};

export { Tabs, TabPanel };