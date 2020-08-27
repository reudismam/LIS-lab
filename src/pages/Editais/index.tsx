import React from 'react';
import PageTemplate from '../PageTemplate';
import inicioImg from '../../assets/images/Editais/editais.svg';


export default function Editais() {
    return (
        <PageTemplate
            image={inicioImg}
            imageAlt="Editais"
            title="Editais"
            description="Acompanhe nossa postagens e fique por dentro do que
            rola aqui no LIS, e claro que tem aquele toque de aprendizagem!">
            <h1>Editais</h1>
        </PageTemplate>
    );
}