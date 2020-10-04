import React from 'react';
import styled from 'styled-components';
import PageTemplate from '../PageTemplate';
import criarContaImg from '../../assets/images/CriarConta/criarConta.svg';
import Input from '../../components/Input';
import Select from '../../components/Select';

const categoria = ['Discente', 'Docente']
const funcao = ['Membro', 'Líder']
const titulacao = ['Graduando', 'Graduado', 'Mestrado', 'Doutorado']

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

const Contato = styled.div`
`
const Property = styled.div`

`

export default function CriarConta() {
    return (
        <PageTemplate
            imageSrc={criarContaImg}
            imageAlt="Imagem da Página Criar Conta"
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
                            <Input type="text" name="name" label="Nome"/>
                            <Input type="text" name="lastname" label="Sobrenome"/>
                        </Name>
                    </NameContainer>
                    <Contato>
                            <Input 
                                type="email" 
                                name="email" 
                                label="Email"
                                placeholder="example@email.com"
                                />
                            <Input 
                                type="number" 
                                name="phone" 
                                label="Telefone"
                                placeholder="(__)  9 ____  ____"
                                />
                    </Contato>
                    <Input type="text" name="course" label="Curso" />
                    <Property>
                        <Select
                            name="category"
                            label="Categoria (discente, docente)"
                            options={categoria}
                            />
                        <Select 
                            name="occupation"
                            label="Função (Membro, Líder)"
                            options={funcao}
                            />
                        <Select
                            name="degree"
                            label="Titulação (graduando, mestre)"
                            options={titulacao} 
                        />
                    </Property>
                </FieldSet>
            </Form>
        </PageTemplate>
    );
}