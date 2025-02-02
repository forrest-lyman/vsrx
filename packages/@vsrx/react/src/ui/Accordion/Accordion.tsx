import React, { useState } from 'react';
import styled from 'styled-components';
import {Icon} from '../Icon/Icon';

interface ExpansionPanelProps {
    title: string;
    children: React.ReactNode;
}

interface ExpansionPanelHeaderProps {
    title: string;
    onClick?: () => void;
}

const AccordionContainer = styled.div`
    .accordion {
        border: 1px solid #ccc;
        border-radius: 4px;
    }
`;

const ExpansionPanelContainer = styled.div`
    .expansion-panel {
        border-bottom: 1px solid #444;
    }
    .expansion-panel:last-child {
        border-bottom: none;
    }
`;

const ExpansionPanelHeaderContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    color: #fff;
    cursor: pointer;

    &:hover {
        background-color: #444;
    }
`;

const ExpansionPanelBodyContainer = styled.div`
    .expansion-panel-body {
        padding: 10px;
        color: #d4d4d4;
    }
`;

const ExpansionPanelTitleContainer = styled.div`
    .expansion-panel-title {
        flex-grow: 1;
        font-weight: bold;
    }
`;

const ExpansionPanelTitle: React.FC<{ title: string }> = ({ title }) => {
    return <div className="expansion-panel-title">{title}</div>;
};

const ExpansionPanelHeader: React.FC<ExpansionPanelHeaderProps> = ({ title, onClick }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
        onClick && onClick();
    };

    return (
        <ExpansionPanelHeaderContainer onClick={handleClick}>
            <Icon name={isOpen ? "chevron-down" : "chevron-right"} />
            <ExpansionPanelTitle title={title} />
        </ExpansionPanelHeaderContainer>
    );
};

interface ExpansionPanelBodyProps {
    children: React.ReactNode;
}

const ExpansionPanelBody: React.FC<ExpansionPanelBodyProps> = ({ children }) => {
    return <div className="expansion-panel-body">{children}</div>;
};

export interface AccordionProps {
    children: React.ReactNode;
    multi?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({ children, multi = false }) => {
    const [openPanels, setOpenPanels] = useState<number[]>([]);

    const handleToggle = (index: number) => {
        if (multi) {
            setOpenPanels((prev) =>
                prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
            );
        } else {
            setOpenPanels((prev) => (prev.includes(index) ? [] : [index]));
        }
    };

    return (
        <div className="accordion">
            {React.Children.map(children, (child, index) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child as React.ReactElement<any>, {
                        isOpen: openPanels.includes(index),
                        onToggle: () => handleToggle(index),
                    });
                }
                return child;
            })}
        </div>
    );
};

interface ExpansionPanelProps {
    title: string;
    children: React.ReactNode;
    isOpen?: boolean;
    onToggle?: () => void;
}

export const ExpansionPanel: React.FC<ExpansionPanelProps> = ({ title, children, isOpen = false, onToggle }) => {
    return (
        <div className="expansion-panel">
            <ExpansionPanelHeader title={title} onClick={onToggle} />
            {isOpen && <ExpansionPanelBody>{children}</ExpansionPanelBody>}
        </div>
    );
};
