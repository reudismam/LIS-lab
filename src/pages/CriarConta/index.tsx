import React, { ChangeEvent, FormEvent, InputHTMLAttributes, useState } from 'react';
import {useHistory} from 'react-router-dom';
import PageTemplate from '../PageTemplate';
import criarContaImg from '../../assets/images/CriarConta/criar-conta.svg';
import SubmitButton from '../../components/SubmitButton';
import styled, {css} from 'styled-components';
import api from '../../services/api';

const categorias = ['Discente', 'Docente'];
const funcao = ['Membro', 'Líder'];
const titulacao = ['Graduando', 'Graduado', 'Mestrado', 'Doutorado'];

const valoresIniciais = {
    name: '',
    lastname: '',
    email: '',
    phone: '',
    course: '',
    category: '',
    occupation: '',
    degree: '',
    bio: '',
    InterestArea: [
        ''
    ],
    publications: [
        {
            title: '',
            year: '',
            reference: ''
        }
    ],
    projects: [
        {
            title: '',
            year: '',
            description: ''
        }
    ]   
}

const Form = styled.form`
    margin-top: 20px;
    margin-bottom: 10px;
    font-family: 'Roboto', sans-serif;
    margin: 50px auto;
    width: 90%;
`

const FieldSet = styled.fieldset`
    border: none;
`
const TopFieldSet = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1.6rem;
    margin-bottom: 30px;
`

const Legend = styled.legend`
    font-size: 2.4rem;
    color: var(--primaria);
`

const NameContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media(min-width: 768px) {
        flex-direction: row;
    }
`

const Photo = styled.div`
    width: 150px;
    height: 150px;
    background-color: var(--bordas);
    border-radius: 50%;
    margin-top: 20px;
`

const BaseInputStyle = css`
    height: 6rem;
    border: 1px solid var(--bordas);
    border-radius: 0.8rem;
`

const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 10px 0;
`

const Label = styled.label`
    font-size: 1.6rem;
    color: var(--cinza);
    margin-bottom: 10px;
`

const InputStyles = css`
    height: 6rem;
    border: 1px solid var(--bordas);
    border-radius: 0.8rem;
    padding-left: 20px;
    color: var(--cinza);
`

const Input = styled.input`
    ${InputStyles};
`

const Name = styled.div`
    @media(min-width: 768px) {
        display: flex;
        flex: 1;
        justify-content: space-between;

        ${InputContainer} {
            margin-left: 20px;
        }
    }
`

const Contato = styled.div`
    @media(min-width: 768px) {
        display: flex;

        ${InputContainer} + ${InputContainer} {
            width: 300px;
            margin-left: 20px;
        }
    }
`

const Property = styled.div`
    @media(min-width: 768px) {
        display: flex;

        ${InputContainer} + ${InputContainer} {
            margin-left: 20px;
        }
    }
`

const SelectContainer = styled.select`
    ${InputStyles};
`

const TitleContainer = styled.div`
    @media(min-width: 768px) {
        display: flex;

        ${InputContainer} + ${InputContainer} {
            width: 300px;
            margin-left: 20px;
        }
    }
`

const PropertyContainer = styled.div`
    margin-bottom: 50px;
`

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement>{
    options: string [];
}

const Option = styled.option`
    font-size: 2.0rem;
`

const TextArea = styled.textarea`
    ${InputStyles};
    height: 300px;
    padding: 20px;
`

const PlusButton = styled.button`
    border: none;
    background-color: var(--branco);
    color: var(--secundaria);
    font-weight: bold;
`

const Select: React.FC<SelectProps> = ({options, ...rest}) => {
    return (
        <SelectContainer {...rest}>
            <Option value="" hidden>-- SELECIONE --</Option>
            {
                options.map((option) => {
                    return (
                        <Option key={option}>{option}</Option>
                    );
                })
            }
        </SelectContainer>
    );
}

export default function CriarConta() {
    const [user, setUser] = useState(valoresIniciais);

    const history = useHistory();

    function AddInterestArea(e: FormEvent) {
        e.preventDefault();
        const areasAtualizadas = [...user.InterestArea, ''];
        setUser({...user, "InterestArea": areasAtualizadas});
    }

    function addNewPublication(e: FormEvent) {
        e.preventDefault();
        setUser({...user, "publications": 
            [
                ...user.publications,
                {
                    title: '',
                    year: '',
                    reference: ''
                }
            ]});
    }

    function addNewProject(e: FormEvent) {
        e.preventDefault();
        setUser({...user, "projects": 
            [
                ...user.projects,
                {
                    title: '',
                    year: '',
                    description: ''
                }
            ]});
    }

    function onChange(e: ChangeEvent<HTMLInputElement>){
        const {name, value} = e.target;
        setUser({ ...user, [name]: value });
        if (e.target.files) {
            let reader = new FileReader();
            let file = e.target.files[0];
            reader.onloadend = () => {
                setUser({...user, [name]: reader.result});
            }
            reader.readAsDataURL(file);
        }
    }

    function onChangeSelect(e: ChangeEvent<HTMLSelectElement>){
        const {name, value} = e.target;
        setUser({ ...user, [name]: value });
    }

    function onChangeTextArea(e: ChangeEvent<HTMLTextAreaElement>){
        const {name, value} = e.target;
        setUser({ ...user, [name]: value });
    }

    function setAreaInteresse(position: number, value: string) {
        const areasAtualizadas = user.InterestArea.map((area, index) => {
            if(index === position) {
                return value;
            }
            return area;
        });
        setUser({...user, "InterestArea": areasAtualizadas});
    }

    function setProperty(list: any [], property: string, position: number, field: string, value: string) {
        const updatedList = list.map((item, index) => {
            if(index === position) {
                return {...item, [field]: value};
            }
            return item;
        });
        setUser({...user, [property]: updatedList});
    }

    function onSubmit(ev: FormEvent){
        ev.preventDefault();
        const path = user.category === "discente" ? "/discentes" : "/docentes";
        api.post(path, user)
        .then(() => {
            alert("Cadastro realizado com sucesso!");
            history.push('/discentes')
        })
        .catch(() => {
            alert("Error ao realizar o cadastro!");
        });
    }

    return (
        <PageTemplate
            imageSrc={criarContaImg}
            imageAlt="Criar Conta"
            title="Quase tudo pronto para se tornar um membro do grupo"
            description="Insira seus dados cadastrais nos campos abaixo
            "
        >
            <Form onSubmit={onSubmit}>
                <FieldSet>
                    
                    <Legend>
                        Seus Dados
                    </Legend>

                    <NameContainer>
                        <Photo>
                        </Photo>

                        <Name>
                            <InputContainer>
                                <Label htmlFor="name">Nome</Label>
                                <Input 
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={user.name}
                                    onChange={onChange}
                                    />
                            </InputContainer>

                            <InputContainer>
                                <Label htmlFor="lastname">Sobrenome</Label>
                                <Input 
                                    type="text"
                                    id="lastname"
                                    name="lastname"
                                    value={user.lastname}
                                    onChange={onChange}
                                    />
                            </InputContainer>
                        </Name>
                    </NameContainer>

                    <Contato>
                        <InputContainer>
                            <Label htmlFor="email">Email</Label>
                            <Input 
                                type="email"
                                id="email"
                                name="email"
                                placeholder="example@email.com" 
                                value={user.email}
                                onChange={onChange}/>
                        </InputContainer>
                        <InputContainer>
                            <Label htmlFor="phone">Phone</Label>
                            <Input 
                                type="text"
                                id="phone"
                                name="phone"
                                value={user.phone}
                                onChange={onChange}
                                />
                        </InputContainer>
                    </Contato>

                    <InputContainer>
                            <Label htmlFor="course">Curso</Label>
                            <Input 
                                type="text"
                                id="course"
                                name="course"
                                value={user.course}
                                onChange={onChange}
                                />
                    </InputContainer>
                    
                    <Property>
                        <InputContainer>
                            <Label htmlFor="category">Categoria (docente, discente)</Label>
                            <Select 
                                id="category"
                                options={categorias}
                                name="category"
                                value={user.category}
                                onChange={onChangeSelect}
                                />
                        </InputContainer>

                        <InputContainer>
                            <Label htmlFor="occupation">Função (membro, líder)</Label>
                            <Select 
                                id="occupation"
                                options={funcao}
                                name="occupation"
                                value={user.occupation}
                                onChange={onChangeSelect}
                                />
                        </InputContainer>

                        <InputContainer>
                            <Label htmlFor="degree">Titulação (graduando, mestre)</Label>
                            <Select 
                                id="degree"
                                name="degree"
                                options={titulacao}
                                value={user.degree}
                                onChange={onChangeSelect}
                                />
                        </InputContainer>
                    </Property>

                    <InputContainer>
                            <Label htmlFor="bio"> Bio (max  300 caracteres) </Label>
                            <TextArea 
                                id="bio"
                                name="bio"
                                value={user.bio}
                                onChange={onChangeTextArea}
                                />
                    </InputContainer>
                </FieldSet>

                <FieldSet>
                    <TopFieldSet>
                        <Legend>
                            Áreas de Interesse
                        </Legend>
                        <PlusButton onClick={AddInterestArea}>+Áreas</PlusButton>
                    </TopFieldSet>
                    {
                        user.InterestArea.map((area, index) => {
                            return (
                                <InputContainer key={`Area: ${index}`}>
                                    <Label htmlFor={`Area: ${index}`}>Área de Interesse</Label>
                                    <Input 
                                        id={`Area: ${index}`} 
                                        type="text" 
                                        value={area}
                                        onChange={(e) => setAreaInteresse(index, e.target.value)}
                                        />
                                </InputContainer>                                  
                            );
                        })
                    }
                </FieldSet>

                <FieldSet>
                    <TopFieldSet>
                        <Legend>
                            Publicações
                        </Legend>
                        <PlusButton onClick={addNewPublication}>+Publicações</PlusButton>
                    </TopFieldSet>
                    {
                        user.publications.map((publication, index) => {
                            return (
                                <PropertyContainer key={`Publication: ${index}`}>
                                    <TitleContainer>
                                        <InputContainer>
                                            <Label htmlFor={`publication_title: ${index}`}>Título</Label>
                                            <Input 
                                                id={`publication_title: ${index}`} 
                                                type="text" 
                                                value={publication.title}
                                                onChange={e => setProperty(user.publications, 'publications', index, 'title', e.target.value)}
                                                />
                                        </InputContainer>  

                                        <InputContainer>
                                            <Label htmlFor={`publicao_year: ${index}`}>Ano</Label>
                                            <Input 
                                                id={`publicao_year: ${index}`} 
                                                type="text" 
                                                value={publication.year}
                                                onChange={e => setProperty(user.publications, 'publications', index, 'year', e.target.value)}
                                                />
                                        </InputContainer> 
                                    </TitleContainer>

                                    <InputContainer>
                                        <Label htmlFor={`publication_reference: ${index}`}> Referência (max  300 caracteres) </Label>
                                        <TextArea 
                                            id={`publication_reference: ${index}`}
                                            value={publication.reference}
                                            onChange={e => setProperty(user.publications, 'publications', index, 'reference', e.target.value)}
                                            />
                                    </InputContainer>
                                </PropertyContainer>                                
                            );
                        })     
                    }
                </FieldSet>

                <FieldSet>
                <TopFieldSet>
                        <Legend>
                            Projetos
                        </Legend>
                        <PlusButton onClick={addNewProject}>+Projetos</PlusButton>
                    </TopFieldSet>
                    {
                        user.projects.map((project, index) => {
                            return (
                                <PropertyContainer key={`Project: ${index}`}>
                                    <TitleContainer>
                                        <InputContainer>
                                            <Label htmlFor={`project_title: ${index}`}>Título</Label>
                                            <Input 
                                                id={`project_title: ${index}`} 
                                                type="text" 
                                                value={project.title}
                                                onChange={e => setProperty(user.projects, 'projects', index, 'title', e.target.value)}
                                                />
                                        </InputContainer>  

                                        <InputContainer>
                                            <Label htmlFor={`project_year: ${index}`}>Ano</Label>
                                            <Input 
                                                id={`project_year: ${index}`} 
                                                type="text" 
                                                value={project.year}
                                                onChange={e => setProperty(user.projects, 'projects', index, 'year', e.target.value)}
                                                />
                                        </InputContainer> 
                                    </TitleContainer>

                                    <InputContainer>
                                        <Label htmlFor={`project_description: ${index}`}> Descrição (max  300 caracteres) </Label>
                                        <TextArea 
                                            id={`project_description: ${index}`}
                                            value={project.description}
                                            onChange={e => setProperty(user.projects, 'projects', index, 'description', e.target.value)}
                                            />
                                    </InputContainer>
                                </PropertyContainer>                                
                            );
                        })     
                    }
                </FieldSet>
                <SubmitButton type="submit">Enviar</SubmitButton>
            </Form>
        </PageTemplate>
    );
}