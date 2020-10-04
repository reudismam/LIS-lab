import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { ContainerStyles, LabelStyles, InputStyles } from '../InputStyles';

const TextAreaContainer = styled.div`
    ${ContainerStyles}
`

const Label = styled.label`
    ${LabelStyles}
`

const TextAreaBox = styled.textarea`
    ${InputStyles}
    height: 300px;
    padding: 20px;
`

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
    name: string,
    label: string
}

const TextArea: React.FC<TextAreaProps> = ({name, label, ...rest}) => {
    return (
        <TextAreaContainer>
            <Label htmlFor={name}>{label}</Label>
            <TextAreaBox id={name} name={name} {...rest}/>
        </TextAreaContainer>
    );
}

export default TextArea;