import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { ContainerStyles, InputStyles, LabelStyles } from '../InputStyles';

const SelectBox = styled.select`
    ${InputStyles}
`
const Label = styled.label`
    ${LabelStyles}
`

const Option = styled.option`
    font-size: 1.6rem;
`

const SelectContainer = styled.div`
    ${ContainerStyles}
`

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
    options: string [],
    name: string,
    label: string
}

const Select: React.FC<SelectProps> = ({options, name, label, ...rest}) => {
    return (
        <SelectContainer>  
            <Label htmlFor={name}>{label}</Label> 
            <SelectBox id={name} name={name} {...rest}>
                <Option value="">--SELECIONE--</Option>
                {
                    options.map((option) => {
                        return (
                        <Option key={option}>{option}</Option>
                        );
                    })
                }
            </SelectBox>
        </SelectContainer> 
    );
}

export default Select;