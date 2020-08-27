import React from 'react';
import styled from 'styled-components';
import BannerWithButton from '../BannerWithButton';
import TopBar from '../TopBar';

const MainHeader = styled.header`
    height: 450px;
    background-color: var(--primaria);
    width: 100vw;

    .banner {
        width: 100%;
        display: flex; 
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 10px;
    }

    .inicio-image {
        width: 200px;
    }

    .banner h1 {
        width: 350px;
        color: var(--fundo);
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        margin-top: 20px;
        line-height: 1.6;
    }

    .banner h2 {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        color: var(--fundo);
        font-weight: normal;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .banner .message {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin-left: 100px;
    }

    .banner .message button {
        background-color: var(--primaria);
        border: 1px solid var(--cinza);
        border-radius: 0.8rem;
        height: 4rem;
        padding-left: 2rem;
        padding-right: 2rem;
        color: var(--fundo);
    }

    .banner .button {
        display: inline-block;
        margin-top: 10px;
    }
`;

export default function Header() {
    return (
        <MainHeader>
            <TopBar />
            <BannerWithButton />
        </MainHeader>
    );
}

