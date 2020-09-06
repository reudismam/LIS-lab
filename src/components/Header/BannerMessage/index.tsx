import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--branco);
    font-family: 'Roboto', sans-serif;
    margin-top: 10px;
    margin-bottom: 10px;
    line-height: 1.4;
    text-align: center;
    width: 70%;
`

const Title = styled.h1`
    font-size: 2.4rem;
`

const Description = styled.h2`
    font-weight: normal;
    margin: 10px 0;


`

const Button = styled(Link)`
    text-decoration: none;
    border: 1px solid var(--cinza);
    border-radius: 0.8rem;
    font-size: 1.4rem;
    color: var(--branco);
    width: 90%;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
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