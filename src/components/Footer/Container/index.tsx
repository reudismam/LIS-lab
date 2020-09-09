import React from 'react';
import styled from 'styled-components';
import FooterContent from '../Content';

const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    background-color: var(--fundo);
`;

export default function Footer() {
    return (
        <FooterContainer>
            <FooterContent />
        </FooterContainer>
    );
}