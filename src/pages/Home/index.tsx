import React from 'react';
import styled from 'styled-components';
import PageTemplate from '../PageTemplate';
import homeImg from '../../assets/images/Home/inicio.svg';
import Projetos from '../../components/Projetos';
import VideoDestaque from '../../components/VideoDestaque';
import SeeMoreButton from '../../components/SeeMoreButton';

const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    color: var(--fundo);
    width: 100%;
    text-align: center;
    margin: 40px 0;
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
            Confira nossos projetos em destaque
            </Title>
            <Projetos />
            <SeeMoreButton to="/projetos">Projetos</SeeMoreButton>
            <Title>
            Vídeo em destaque
            </Title>
            <VideoDestaque />
            <SeeMoreButton to="/videos">Vídeos</SeeMoreButton>
        </PageTemplate>
    );
}