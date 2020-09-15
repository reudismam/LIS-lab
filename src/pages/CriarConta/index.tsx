import React, { useState } from 'react';
import PageTemplate from '../PageTemplate';
import criarContaImg from '../../assets/images/CriarConta/criar-conta.svg';
import styled from 'styled-components';

interface Publication {
    title: string,
    reference: string,
    year: number
}

interface Project {
    title: string,
    year: number,
    description: string
}

interface User {
    photo?: string,
    name: string,
    lastName: string,
    email: string,
    phone: string,
    course: string,
    type: string,
    occupation: string,
    degree: string,
    areas: string[],
    bio: string,
    publications: Publication[],
    projects: Project[]
}

const Form = styled.form`

`

const FieldSet = styled.fieldset`
`

const Legend = styled.legend`

`

export default function CriarConta() {
    const [user, setUser] = useState<User>();
    return (
        <PageTemplate
            imageSrc={criarContaImg}
            imageAlt="Criar Conta"
            title="Quase tudo pronto para se tornar um membro do grupo"
            description="Insira seus dados cadastrais nos campos abaixo
            "
        >
            <Form>
                <FieldSet>
                    <Legend>
                        Seus Dados
                    </Legend>

                </FieldSet>

                <FieldSet>
                    <Legend>
                        Áreas de Interesse
                    </Legend>
                </FieldSet>

                <FieldSet>
                    <Legend>
                        Publicações
                    </Legend>
                </FieldSet>

                <FieldSet>
                    <Legend>
                        Projetos
                    </Legend>
                </FieldSet>
            </Form>
        </PageTemplate>
    );
}