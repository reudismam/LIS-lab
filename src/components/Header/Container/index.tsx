import React from 'react';
import styled from 'styled-components';

const MainHeader = styled.header`
    background-color: var(--primaria);
`

export default function Header() {
    return (
        <MainHeader>
            <h1>Cabeçalho</h1>
        </MainHeader>
    );
}