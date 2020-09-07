import React from 'react';
import PageTemplate from '../PageTemplate';
import erro404 from '../../assets/images/Erro404/erro404.svg';

export default function Erro404() {
    return (
        <PageTemplate
            imageSrc={erro404}
            imageAlt="Erro 404"
            title="Erro 404"
            description="Página não encontrada!">
            <h1>Erro 404</h1>
            <h1>Erro 404</h1>
        </PageTemplate>
    );
}