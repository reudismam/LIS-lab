import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { ContainerStyles, InputStyles, LabelStyles } from '../InputStyles';

export const SelectContainer = styled.div`
    ${ContainerStyles}
`

export const Label = styled.label`
    ${LabelStyles}
`

const SelectBox = styled.select`
    ${InputStyles}
`

const Option = styled.option`
    font-size: 1.6rem;
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
                <Option value="" hidden>--SELECIONE--</Option>
                {
                    options.map((option) =>{
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