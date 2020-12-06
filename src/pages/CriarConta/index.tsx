import React, {ChangeEvent, FormEvent, useState} from 'react';
import styled from 'styled-components';
import PageTemplate from '../PageTemplate';
import criarContaImg from '../../assets/images/CriarConta/criarConta.svg';
import Input, {InputContainer} from '../../components/Input';
import Select, {SelectContainer} from '../../components/Select';
import TextArea from '../../components/TextArea';
import SubmitButton from '../../components/SubmitButton';
import Conection from '../../services/conection';
import {MdAddAPhoto} from 'react-icons/md';

const categoria = ['Discente', 'Docente']
const funcao = ['Membro', 'Líder']
const titulacao = ['Graduando', 'Graduado', 'Mestrado', 'Doutorado']

const Form = styled.form`
    font-family: 'Roboto', sans-serif;
    margin: 50px auto;
    width: 90%;
    @media(min-width: 768px) {
        min-width: 768px;
        border: 1px solid var(--bordas);
        padding: 50px;
        border-radius: 0.8rem;
        width: 70%;
    }
`

const PublicationContainer = styled.div`
`

const FieldSet = styled.fieldset`
    border: none;

    ${PublicationContainer} + ${PublicationContainer} {
        border-top: 1px solid var(--bordas);
        margin-top: 50px;
        padding-top: 50px;
    }
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

const Photo = styled.label`
    position: relative;
    width: 150px;
    height: 150px;
    background-color: var(--bordas);
    border-radius: 50%;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    color: var(--cinza);

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

        ${SelectContainer} {
            width: 100%;
        }

        ${SelectContainer} + ${SelectContainer} {
            margin-left: 10px;
        }
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

const PhotoIcon = styled(MdAddAPhoto)`
    position: absolute;
    z-index: 1;
    opacity: 0.5;
`

const PhotoPreview = styled.img`
    width: 100%;
    height: 100%;
    border-radius: inherit;
`

interface Publication {
    title: string,
    year: string,
    reference: string
}

export default function CriarConta() {
    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [course, setCourse] = useState('');
    const [category, setCategory] = useState('');
    const [occupation, setOccupation] = useState('');
    const [degree, setDegree] = useState('');
    const [bio, setBio] = useState('');
    const [areas, setAreas] = useState<string[]>(['']);
    const [publications, setPublications] = useState<Publication[]>([{
        title: '',
        year: '',
        reference: ''
    }]);
    const [photo, setPhoto] = useState<string>();
    const [photoImage, setPhotoImage] = useState<File>();

    function setAreaInteresse(position: number, value: string) {
        const areasAtualizadas = areas.map((area, index) => {
            if (index === position) {
                return value;
            }
            else {
                return area;
            }
        })
        setAreas(areasAtualizadas);
    }

    function setPublication(position: number, property: string, value: string) {
        const publicationsAtualizadas = publications.map((publication, index) => {
            if (position === index) {
                return (
                    {
                        ...publication,
                        [property]: value
                    }
                );
            }
            else {
                return publication;
            }
        })
        setPublications(publicationsAtualizadas);
    }

    function handleSubmit(e: FormEvent) {
            e.preventDefault();
            const path = category === 'Discente' ? '/discent' : '/docent';
            const data = new FormData();
            data.append('name', name);
            data.append('lastname', lastname);
            data.append('email', email);
            data.append('phone', phone);
            data.append('course', course);
            data.append('category', category);
            data.append('occupation', occupation);
            data.append('degree', degree);
            data.append('bio', bio);

            data.append('areas', JSON.stringify(areas));

            data.append('publications', JSON.stringify(publications));

            data.append('photo', (photoImage as File));

            Conection.post(path, data)
            .then((response) => {
                alert("Cadastro realizado com sucesso!!!");
            })
            .catch((error) => {
                alert(error);
            });
    }

    function addAreaInteresse(e: FormEvent) {
        e.preventDefault();
        const areasAtualizadas = [...areas, ''];
        setAreas(areasAtualizadas);
    }

    function addPublication(e: FormEvent) {
        e.preventDefault();
        const publicationsAtualizadas = [...publications, {
            title: '',
            year: '',
            reference: ''
        }]
        setPublications(publicationsAtualizadas);
    }

    function handleSelectedPhoto(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.files) {
            const image = e.target.files.item(0) as File;
            setPhotoImage(image);
            setPhoto(URL.createObjectURL(image));
        }
    }

    return (
        <PageTemplate
            imageSrc={criarContaImg}
            imageAlt="Imagem da Página Criar Conta"
            title="Quase tudo pronto para se tornar um membro do grupo"
            description="Insira seus dados cadastrais nos campos abaixo."
        >
            <Form onSubmit={handleSubmit}>
                <FieldSet>
                    <Legend>
                        Seus Dados
                    </Legend>

                    <NameContainer>
                        <Photo htmlFor="photo">
                            <PhotoIcon />
                            {photo && <PhotoPreview src={photo} alt="Foto de perfil" />}
                        </Photo>

                        <input 
                            type="file"
                            id="photo"
                            name="photo"
                            onChange={handleSelectedPhoto}
                            accept="image/*"
                            hidden
                        />
                        

                        <Name>
                            <Input 
                                type="text" 
                                name="name" 
                                label="Nome"
                                onChange={e => setName(e.target.value)}
                                />
                            <Input 
                                type="text" 
                                name="lastname" 
                                label="Sobrenome"
                                onChange={e => setLastName(e.target.value)}
                                />
                        </Name>
                    </NameContainer>
                    <Contato>
                            <Input 
                                type="email" 
                                name="email" 
                                label="Email"
                                placeholder="example@email.com"
                                onChange={e => setEmail(e.target.value)}
                                />
                            <Input 
                                type="number" 
                                name="phone" 
                                label="Telefone"
                                placeholder="(__)  9 ____  ____"
                                onChange={e => setPhone(e.target.value)}
                                />
                    </Contato>
                    <Input 
                        type="text" 
                        name="course" 
                        label="Curso" 
                        onChange={e => setCourse(e.target.value)}
                        />
                    <Property>
                        <Select
                            name="category"
                            label="Categoria (discente, docente)"
                            options={categoria}
                            onChange={e => setCategory(e.target.value)}
                            />
                        <Select 
                            name="occupation"
                            label="Função (Membro, Líder)"
                            options={funcao}
                            onChange={e => setOccupation(e.target.value)}
                            />
                        <Select
                            name="degree"
                            label="Titulação (graduando, mestre)"
                            options={titulacao} 
                            onChange = {e => setDegree(e.target.value)}
                        />
                    </Property>
                    <TextArea 
                        name="bio" 
                        label=" Bio (max  300 caracteres)"
                        onChange={e => setBio(e.target.value)}
                        />
                </FieldSet>
                <FieldSet>
                    <TopFieldSet>
                        <Legend>
                            Áreas de Interesse
                        </Legend>
                        <PlusButton onClick={addAreaInteresse}>+Área</PlusButton>
                    </TopFieldSet>
                    {
                        areas.map((area, index) => {
                            return (
                                <Input key={`Area ${index}`}
                                    name="area" 
                                    label="Área de Interesse"
                                    onChange={e => setAreaInteresse(index, e.target.value)}
                                    />
                            )
                        })        
                    }
                </FieldSet>
                <FieldSet>
                    <TopFieldSet>
                        <Legend>
                            Publicações
                        </Legend>
                        <PlusButton onClick={addPublication}>+Publicações</PlusButton>
                    </TopFieldSet>
                    {
                        publications.map((publication, index) => {
                            return (
                                <PublicationContainer key={`Publication ${index}`}>
                                    <TitleContainer>
                                        <Input 
                                            name="publication_title" 
                                            label="Título"
                                            onChange={e => setPublication(index, "title", e.target.value)}
                                            />
                                        <Input 
                                            name="publication_year" 
                                            label="Ano" 
                                            onChange={e => setPublication(index, "year", e.target.value)}
                                            />                    
                                    </TitleContainer>
                                    <TextArea 
                                        name="publication_reference" 
                                        label="Referência ABNT (max. 300 caracteres)"
                                        onChange={e => setPublication(index, "reference", e.target.value)}
                                        />
                                </PublicationContainer>
                            );
                        })
                    }
                    </FieldSet>
                <SubmitButton type="submit">Enviar</SubmitButton>
            </Form>
        </PageTemplate>
    );
}