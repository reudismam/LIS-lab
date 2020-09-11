import React from 'react';
import styled from 'styled-components';
import {PROJETOS} from '../../data/projetos';
import Card from '../ProjetosCard';

const ProjetList = styled.section`
    margin-top: 20px;
    font-family: 'Roboto', sans-serif;
    line-height: 1.6;
    font-size: 1.6rem;

`

const Image = styled.img`

`

const ProjectName = styled.h2`
    color: var(--cinza);
    font-size: 1.6rem;
    margin: 20px 0;
    font-weight: normal;
`

const Description = styled.p`
    color: var(--cinza);
    height: 150px;
    overflow: hidden;
`

export default function Projetos() {
    return (
        <ProjetList>
           {
                PROJETOS.filter(p => p.featured === true).map((projeto) => {
                    return (
                        <Card key={projeto.name}>
                        <Image src={require(`../../assets/${projeto.image}`)} alt={projeto.name}/>
                        <ProjectName>
                            {projeto.name}
                        </ProjectName>
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