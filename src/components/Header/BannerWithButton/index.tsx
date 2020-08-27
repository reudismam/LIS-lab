import React from 'react';
import styled from 'styled-components';
import inicioImg from '../../../assets/images/Home/inicio.svg';
import TopBar from '../TopBar';

var Banner = styled.div`
        width: 100%;
        display: flex; 
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 10px;

    .inicio-image {
        width: 200px;
    }

    h1 {
        width: 350px;
        color: var(--fundo);
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        margin-top: 20px;
        line-height: 1.6;
    }

    h2 {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        color: var(--fundo);
        font-weight: normal;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .message {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin-left: 100px;
    }

    .message button {
        background-color: var(--primaria);
        border: 1px solid var(--cinza);
        border-radius: 0.8rem;
        height: 4rem;
        padding-left: 2rem;
        padding-right: 2rem;
        color: var(--fundo);
    }

    .button {
        display: inline-block;
        margin-top: 10px;
    }
`

export default function BannerWithButton() {
    return (
        <>
        <TopBar />
        <Banner>
            <img
                src={inicioImg}
                alt="Plataforma de estudos"
                className="inicio-image" />
            <div className="message">
                <h1>Somos apaixonados por inovação e fazemos disso nosso trabalho</h1>
                <h2>Insira seus dados cadastrais nos campos abaixo</h2>
                <div className="button">
                    <button>
                        Projetos
                        </button>
                </div>
            </div>
        </Banner>
        </>
    );
}