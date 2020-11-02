import React from 'react';
import styled from 'styled-components';
import PageTemplate from '../PageTemplate';
import criarContaImg from '../../assets/images/CriarConta/criarConta.svg';
import Input, {InputContainer} from '../../components/Input';
import Select, {SelectContainer} from '../../components/Select';
import TextArea from '../../components/TextArea';
import SubmitButton from '../../components/SubmitButton';

const categoria = ['Discente', 'Docente']
const funcao = ['Membro', 'Líder']
const titulacao = ['Graduando', 'Graduado', 'Mestrado', 'Doutorado']

const Form = styled.form`
    font-family: 'Roboto', sans-serif;
    margin: 50px auto;
    width: 90%;
    min-width: 768px;
    @media(min-width: 768px) {
        border: 1px solid var(--bordas);
        padding: 50px;
        border-radius: 0.8rem;
        width: 70%;
    }
`

const FieldSet = styled.fieldset`
    border: none;
`

const Legend = styled.legend`
    font-size: 2.4rem;
    color: var(--primaria);
`

const NameContainer = styled.div`
    @media(min-width: 768px) {
        display: flex;
    }
`

const Photo = styled.div`
    width: 150px;
    height: 150px;
    background-color: var(--bordas);
    border-radius: 50%;
    margin-top: 20px;

    @media(min-width: 768px) {
        flex-shrink: 0;
        margin-right: 10px;
    }
`

const Name = styled.div`
    @media(min-width: 768px) {
        display: flex;
        width: 100%;
        align-items: center;

        ${InputContainer} {
            width: 100%;
        }

        ${InputContainer} + ${InputContainer} {
            margin-left: 10px;
        }
    }
`

const Contato = styled.div`
    @media(min-width: 768px) {
        display: flex;
        width: 100%;

        ${InputContainer} {
            width: 100%;
        }

        ${InputContainer} + ${InputContainer} {
            width: 30%;
            margin-left: 10px;
        }
    }
`
const Property = styled.div`
    @media(min-width: 768px) {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    ${SelectContainer} {
        width: 100%;
    }

    ${SelectContainer} + ${SelectContainer} {
        margin-left: 10px;
    }
`

const TopFieldSet = styled.div`
    display: flex;
    justify-content: space-between;
`

const PlusButton = styled.button`
    border: none;
    background-color: var(--branco);
    color: var(--secundaria);
    font-size: 1.6rem;
    font-weight: bold;
`

const TitleContainer = styled.div`

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
                    <TextArea name="bio" label=" Bio (max  300 caracteres)"/>
                </FieldSet>
                <FieldSet>
                    <TopFieldSet>
                        <Legend>
                            Áreas de Interesse
                        </Legend>
                        <PlusButton>+Área</PlusButton>
                    </TopFieldSet>
                    <Input name="area" label="Área de Interesse"/>
                </FieldSet>
                <FieldSet>
                    <TopFieldSet>
                        <Legend>
                            Publicações
                        </Legend>
                        <PlusButton>+Publicações</PlusButton>
                    </TopFieldSet>
                    <TitleContainer>
                        <Input name="publication_tile" label="Título"/>
                        <Input name="publication_year" label="Ano" />                    
                    </TitleContainer>
                    <TextArea name="publication_reference" label="Referência ABNT (max. 300 caracteres)"/>
                </FieldSet>
                <SubmitButton>Enviar</SubmitButton>
            </Form>
        </PageTemplate>
    );
}