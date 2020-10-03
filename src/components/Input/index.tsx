import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { ContainerStyles, InputStyles, LabelStyles } from '../InputStyles';

const InputContainer = styled.div`
    ${ContainerStyles}
`

const Label = styled.label`
    ${LabelStyles}
`

const InputBox = styled.input`
    ${InputStyles}
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
                {...rest}
                />
        </InputContainer>
    );
}

export default Input;