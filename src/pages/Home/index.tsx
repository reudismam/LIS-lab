import React from 'react';
import PageTemplate from '../PageTemplate';
import homeImg from '../../assets/images/Home/inicio.svg';
import Projetos from '../../components/Projetos';
import VideoDestaque from '../../components/VideoDestaque';
import SeeMoreButton from '../../components/SeeMoreButton';
import styled from 'styled-components';

const Title = styled.h1`
    color: var(--fundo);
    width: 100%;
    text-align: center;
    margin: 40px 0;
    font-family: 'Roboto', sans-serif;
    font-size: 2.4rem;
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
            <Title>
                Confira os nossos projetos recentes
            </Title>
            <Projetos />
            <SeeMoreButton to="./projetos">Mais projetos</SeeMoreButton>
            <Title>
                Vídeo em destaque
            </Title>
            <VideoDestaque />
            <SeeMoreButton to="./videos">Mais vídeos</SeeMoreButton>
        </PageTemplate>
    );
}