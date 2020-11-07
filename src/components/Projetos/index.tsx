import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Card from '../ProjetosCard';
import Conexao from '../../services/conection';

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

interface Project {
    name: string,
    image: string,
    situation: string,
    featured: boolean,
    description: string,
}

export default function Projetos() {
    const [projetos, setProjetos] = useState<Project[]>([]);

    useEffect(() => {
        Conexao.get("/projetos")
        .then((response) => {
            setProjetos(response.data);
        })
        .catch((error) => {
            alert(error);
        });
    }, []);

    return (
        <ProjetList>
            {
                projetos.filter(p => p.featured === true).map((projeto) => {
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