import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
import Menu from '../Menu';

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--primaria-dark);
    width: 100%;
    height: 4rem;
`

export default function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <Menu />
        </HeaderContainer>
    );
}