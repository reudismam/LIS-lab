import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {BannerProps} from '../Banner';

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
        text-align: start;
        margin-left: 50px;
    }
`

const Title = styled.h1`
    font-size: 2.4rem;

    @media(min-width: 768px) {
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

const Message: React.FC<BannerProps> = (props) => {
    return (
        <MessageContainer>
            <Title>
                {props.title}
            </Title>

            {props.description &&
            <Description>
                {props.description}
            </Description>
            }

            {props.buttonLink &&
            <Button to={props.buttonLink}>
                {props.buttonText}
            </Button>
            }
        </MessageContainer>
    );
}

export default Message;