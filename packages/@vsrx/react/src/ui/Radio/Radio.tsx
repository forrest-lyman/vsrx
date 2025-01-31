import React, { ReactNode } from 'react';
import styled from 'styled-components';

const RadioWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const HiddenRadio = styled.input.attrs({ type: 'radio' })`
    border: 0;
    clip: rect(0 0 0 0);
    clippath: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

const StyledRadio = styled.div<{ checked: boolean }>`
    width: 16px;
    height: 16px;
    background: ${props => (props.checked ? 'blue' : 'white')};
    border-radius: 50%;
    transition: all 150ms;
    border: 1px solid blue;
    display: flex;
    align-items: center;
    justify-content: center;

    ${HiddenRadio}:focus + & {
        box-shadow: 0 0 0 3px pink;
    }
`;

const RadioLabel = styled.label`
    margin-left: 8px;
`;

interface RadioProps {
    checked?: boolean;
    onChange?: () => void;
    label: string;
    value: string;
}

export const Radio: React.FC<RadioProps> = ({ checked, onChange, label, value }) => (
    <RadioWrapper>
        <HiddenRadio id={value} checked={checked} onChange={onChange} value={value} />
        <StyledRadio checked={checked || false} />
        <RadioLabel htmlFor={value}>{label}</RadioLabel>
    </RadioWrapper>
);

interface RadioGroupProps {
    children: ReactNode;
    selectedValue: string;
    onChange: (value: string) => void;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ children, selectedValue, onChange }) => {
    const handleChange = (value: string) => {
        onChange(value);
    };

    return (
        <div>
            {React.Children.map(children, child => {
                if (React.isValidElement(child) && child.type === Radio) {
                    return React.cloneElement(child as React.ReactElement<RadioProps>, {
                        checked: (child as React.ReactElement<RadioProps>).props.value === selectedValue,
                        onChange: () => handleChange((child as React.ReactElement<RadioProps>).props.value),
                    });
                }
                return child;
            })}
        </div>
    );
};