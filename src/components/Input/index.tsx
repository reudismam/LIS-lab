import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0;
`

const Label = styled.label`
    font-size: 1.6rem;
    color: var(--cinza);
    margin-bottom: 10px;

`

const InputBox = styled.input`
    height: 6rem;
    border: 1px solid var(--bordas);
    border-radius: 0.8rem;
    padding-left: 20px;
    color: var(--cinza);

`

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

const Input: React.FC<InputProps> = ({name, label, ... rest}) => {
    return (
        <InputContainer>
            <Label htmlFor={name}>{label}</Label>
            <InputBox 
                id={name}
                name={name}
                />
        </InputContainer>
    );
}

export default Input;