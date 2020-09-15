import React from 'react';
import styled from 'styled-components';
import {PROJETOS} from '../../data/projetos';
import Card from '../ProjetosCard';

const ProjetList = styled.section`
    margin-top: 20px;
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    line-height: 1.6;

    @media(min-width: 768px) {
        display: flex;
        justify-content: space-between;
    }
`

const ProjetoName = styled.h2`
    color: var(--cinza);
    font-size: 1.6rem;
    margin: 10px 0;
    font-weight: normal;
`

const Description = styled.p`
    color: var(--cinza);
    height: 150px;
    overflow: hidden;
`
const Image = styled.img`

`

export default function Projetos() {
    return (
        <ProjetList>
            {
                PROJETOS.filter(p => p.featured === true).map((projeto) => {
                    return (
                        <Card key={projeto.name}>
                            <Image src={require(`../../assets/${projeto.image}`)} alt={projeto.name} />
                            <ProjetoName>
                                {projeto.name}
                            </ProjetoName>
                            <Description>
                                {projeto.description}
                            </Description>
                        </Card>
                    );
                })
            }
        </ProjetList>
    );
}