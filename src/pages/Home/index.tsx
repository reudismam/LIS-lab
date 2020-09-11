import React from 'react';
import PageTemplate from '../PageTemplate';
import homeImg from '../../assets/images/Home/inicio.svg';
import Projetos from '../../components/Projetos';

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
        </PageTemplate>
    );
}