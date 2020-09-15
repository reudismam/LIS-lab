import React from 'react';
import styled from 'styled-components';
import PageTemplate from '../PageTemplate';
import homeImg from '../../assets/images/Home/inicio.svg';
import Projetos from '../../components/Projetos';
import VideoDestaque from '../../components/VideoDestaque';

const Button = styled.a`
    width: 90%;
    margin: 50px auto;
    background-color: var(--primaria);
    display: flex;
    border: 1px solid var(--cinza);
    height: 6rem;
    justify-content: center;
    align-items: center;
    color: var(--branco);
    text-decoration: none;
    border-radius: 0.8rem;
    font-size: 1.4rem;
    margin-bottom: 20px;
    font-family: 'Roboto', sans-serif;

    @media(min-width: 768px) {
        width: 200px;
        margin-right: 0;
    }
`
export default function Home() {
    return (
        <PageTemplate
            imageSrc={homeImg}
            imageAlt="Imagem da Home"
            title="Somos apaixonados por inovação e fazemos disso nosso trabalho"
            buttonLink="/projetos"
            buttonText="Projetos"
        >
            <Projetos />
            <Button href="/projetos">Projetos</Button>
            <VideoDestaque />
            <Button href="/videos">Vídeos</Button>
        </PageTemplate>
    );
}