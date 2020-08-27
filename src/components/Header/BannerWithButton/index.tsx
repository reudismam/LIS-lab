import React from 'react';
import styled from 'styled-components';
import inicioImg from '../../../assets/images/Home/inicio.svg';

var Banner = styled.div`
        width: 100%;
        display: flex; 
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 10px;

    .image {
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

    @media(min-width: 768px) {
        display: grid;
        grid-template-columns: 3fr 1fr 1fr;
        grid-template-areas: 
            "message message message figure figure";
        
        .image {
            grid-area: figure;
            align-self: start;
            margin-right: 50px;
            width: 350px;
            
        }

        .message {
            grid-area: message;
            justify-content: center;
            display: grid;
            justify-content: start;
            align-items: center;
        }
    }
`

export default function BannerWithButton() {
    return (
        <>
        <Banner>
            <img
                src={inicioImg}
                alt="Plataforma de estudos"
                className="image" />
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