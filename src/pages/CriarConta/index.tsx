import React from 'react';
import styled from 'styled-components';
import criarContaImg from '../../assets/images/CriarConta/criarConta.svg';
import PageTemplate from '../PageTemplate';
import Input from '../../components/Input';

const Form = styled.form`
    font-family: 'Roboto', sans-serif;
    margin: 50px auto;
    width: 90%;
`

const FieldSet = styled.fieldset`
    border: none;
`

const Legend = styled.legend`
    font-size: 2.4rem;
    color: var(--primaria);
`

const NameContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Photo = styled.div`
    width: 150px;
    height: 150px;
    background-color: var(--bordas);
    border-radius: 50%;
    margin-top: 20px;
`

const Name = styled.div`

`

export default function CriarConta() {
    return (
        <PageTemplate
            imageSrc={criarContaImg}
            imageAlt="CriarConta"
            title="Quase tudo pronto para se tornar um membro do grupo"
            description="Insira seus dados cadastrais nos campos abaixo."
        >
            <Form>
                <FieldSet>
                    <Legend>
                        Seus Dados
                    </Legend>

                    <NameContainer>
                        <Photo>
                        </Photo>
                        <Name>
                            <Input name="name" label="Nome" />
                            <Input name="lastname" label="Sobrenome"/>
                        </Name>
                    </NameContainer>
                </FieldSet>
            </Form>
        </PageTemplate>
    );
}