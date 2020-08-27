import React from 'react';
import PageTemplate from '../PageTemplate';
import inicioImg from '../../assets/images/Home/inicio.svg';

export default function Home() {
    return (
        <PageTemplate
            image={inicioImg}
            imageAlt="Home"
            title="Somos apaixonados por inovação e fazemos disso nosso trabalho"
            buttonLink="/projetos"
            buttonText="Projetos">
            <h1>Home</h1>
        </PageTemplate>
    );
}