import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MessageContainer = styled.div`
    width: 70%;
    color: var(--branco);
    font-family: 'Roboto', sans-serif;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
    line-height: 1.4;

    @media(min-width: 768px) {
        width: 500px;
        display: flex;
        flex-direction: column;
        justify-content: start;
        text-align: start;
        margin-left: 50px;
    }

    @media(min-width: 768px) and (max-width: 1080px) {
        width: 350px;
    }
`

const Title = styled.h1`
    font-size: 2.4rem;

    @media(min-width: 1080px) {
        font-size: 2.6rem;
    }
`

const Description = styled.h2`
    font-weight: normal;
    margin: 10px 0;
`

const Button = styled(Link)`
    display: flex;
    border: 1px solid var(--cinza);
    height: 6rem;
    justify-content: center;
    align-items: center;
    color: var(--branco);
    text-decoration: none;
    border-radius: 0.8rem;
    font-size: 1.4rem;

    @media(min-width: 768px) {
        width: 200px;
    }
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