import React, { TextareaHTMLAttributes, InputHTMLAttributes, useEffect, useRef } from 'react';
import styled from 'styled-components';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    rows?: number;
    autogrow?: boolean;
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    rows?: number;
    autogrow?: boolean;
}

const StyledInput = styled.input`
    background-color: #1e1e1e;
    color: #d4d4d4;
    border: 1px solid #3c3c3c;
    padding: 8px;
    font-size: 14px;
    border-radius: 4px;
    width: 100%;
    box-sizing: border-box;

    &:focus {
        border-color: #007acc;
        outline: none;
    }
`;

const StyledTextarea = styled.textarea`
    background-color: #1e1e1e;
    color: #d4d4d4;
    border: 1px solid #3c3c3c;
    padding: 8px;
    font-size: 14px;
    border-radius: 4px;
    width: 100%;
    box-sizing: border-box;
    resize: ${(props: TextareaProps) => (props.autogrow ? 'none' : 'vertical')};

    &:focus {
        border-color: #007acc;
        outline: none;
    }
`;

export const Input: React.FC<InputProps> = ({ rows, autogrow, ...props }) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (autogrow && textareaRef.current) {
            const adjustHeight = () => {
                textareaRef.current!.style.height = 'auto';
                textareaRef.current!.style.height = `${textareaRef.current!.scrollHeight}px`;
            };

            adjustHeight();
            textareaRef.current!.addEventListener('input', adjustHeight);

            return () => {
                textareaRef.current!.removeEventListener('input', adjustHeight);
            };
        }
    }, [autogrow]);

    if (rows || autogrow) {
        return <StyledTextarea ref={textareaRef} rows={rows} autogrow={autogrow} {...props as TextareaProps} />;
    }
    return <StyledInput {...props} />;
};

export default Input;