import React, { FormEvent } from 'react';
import styled from 'styled-components';
import PageTemplate from '../PageTemplate';
import criarContaImg from '../../assets/images/CriarConta/criarConta.svg';
import Input from '../../components/Input';
import Select from '../../components/Select';
import TextArea from '../../components/TextArea';

const categoria = ['Discente', 'Docente']
const funcao = ['Membro', 'Líder']
const titulacao = ['Graduando', 'Graduado', 'Mestrado', 'Doutorado']

const areasInteresse = ['']

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

const TopFieldSet = styled.div`
    display: flex;
    justify-content: space-between;
`

const PlusButton = styled.button`
    background-color: var(--branco);
    border: none;
    color: var(--secundaria);
    font-size: 1.6rem;
    font-weight: bold;
`

export default function CriarConta() {

    function AddNewInterestArea(e: FormEvent) {
        e.preventDefault();
    }

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
                        <PlusButton onClick={AddNewInterestArea}>+Áreas</PlusButton>
                    </TopFieldSet>
                    {
                        areasInteresse.map((area, index) => {
                            return (
                                <Input key={area} name={area} label="Área de Interesse" />
                            );
                        })
                    }
                </FieldSet>
            </Form>
        </PageTemplate>
    );
}