import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MessageContainer = styled.div`
    width: 70%;
    color: var(--branco);
    font-family: 'Roboto', sans-serif;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
    line-height: 1.4;
`

const Title = styled.h1`
    font-size: 2.4rem;
`

const Description = styled.h2`
    font-weight: normal;
    margin: 10px 0;
`

const Button = styled(Link)`
    display: flex;
    border: 1px solid var(--cinza);
    height: 4rem;
    justify-content: center;
    align-items: center;
    color: var(--branco);
    text-decoration: none;
    border-radius: 0.8rem;
`

export default function Message() {
    return (
        <MessageContainer>
            <Title>
            Somos apaixonados por inovação e fazemos disso nosso trabalho
            </Title>

            <Description>
            Sabemos que o trabalho em grupo é algo essencial para qualquer time, e conosco não seria diferente
            </Description>

            <Button to="/projetos">
                Projetos
            </Button>
        </MessageContainer>
    );
}