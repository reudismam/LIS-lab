import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';

const TopBarContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--primaria-dark);
    height: 4rem;
`

export default function TopBar() {
    return (
        <TopBarContainer>
            <Logo />
        </TopBarContainer>
    );
}