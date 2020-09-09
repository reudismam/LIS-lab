import React from 'react';
import styled from 'styled-components';
import {GoLocation} from 'react-icons/go';
import {FiMail, FiInstagram} from 'react-icons/fi';
import {FaTwitter, FaFacebookF} from 'react-icons/fa';

const FooterData = styled.div`
    width: 100%;
    margin-bottom: 10px;
    height: 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
    text-align: center;

    @media(min-width: 768px) {
        width: 30%;
        margin-bottom: 0;
        align-items: start;
        text-align: left;
    }
`

const Content = styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto', sans-serif;

    ${FooterData} {
        border-bottom: 1px solid var(--cinza);
    }

    @media(min-width: 768px) {
        width: 90%;

        ${FooterData} {
            border-bottom: none;
        }
    }
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media(min-width: 768px) {
        flex-direction: row;
        justify-content: space-around;   
        
        ${FooterData} + ${FooterData} {
            margin-left: 10px;
        }

        ${FooterData} {
            margin-top: 30px;
        }
    }
`

const Title = styled.h1`
    font-size: 2.4rem;
    color: var(--branco);
    text-align: center;
    margin-bottom: 10px;
    
    @media(min-width: 768px) {
        text-align: left;
    }
`
const Lista = styled.ul`
    list-style: none;
    color: var(--branco);
    font-size: 1.6rem;
    width: 350px;

    li {
        line-height: 1.6;
    }
`

const Icon = styled.span`
    margin-right: 10px;
    font-size: 1.6rem;
    color: var(--branco);
`

const Email = styled.a`
    text-decoration:none;
    color: var(--branco);

    :hover {
        color: var(--cinza);
    }
`

const SocialNetworks = styled.ul`
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    height: 100px;

    @media(min-width: 768px) {
        width: 60%;
    }
`

const Link = styled.a`
    text-decoration:none;
    color: var(--branco);
    font-size: 1.6rem;
    margin-left: 2px;

    :hover {
        color: var(--cinza);
    }
`

export default function FooterContent() {
    return (
        <Content>
            <Info>
                <FooterData>
                        <Title>
                            Nossos Parceiros
                        </Title>
                        <Lista>
                            <li>Universidade Federal Rural do Semi-Árido</li>
                            <li>Bacharelado em Tecnologia da Informação</li>
                            <li>Engenharia de <i>Software</i></li>
                        </Lista>
                </FooterData>
                <FooterData>
                    
                        <Title>
                            Desenvolvedores
                        </Title>
                        <Lista>
                            <li>Rennan Santana</li>
                            <li>Fernando Dutra Ribeiro</li>
                            <li>Emanuel Bruno</li>
                            <li>Reudismam Rolim</li>
                        </Lista>
                    
                </FooterData>
                <FooterData>
                        <Title>
                            Informações
                        </Title>
                        <Lista>
                            <li><Icon><GoLocation /></Icon>Rodovia BR-226, s/n, Pau dos Ferros-RN, 59900-000</li>
                            <li><Icon>
                                    <FiMail />
                                </Icon>
                                    <Email href="mailto:lis.ufersa@gmail.com">
                                        lis.ufersa@gmail.com
                                    </Email>
                            </li>
                        </Lista>
                </FooterData>
            </Info>
            <SocialNetworks>
                <li>
                    <Icon>
                        <FiInstagram />
                    </Icon>
                    <Link href="https://www.instagram.com/lis.ufersa">
                    lis.ufersa
                    </Link>
                </li>

                <li>
                    <Icon>
                        <FaTwitter />
                    </Icon>
                    <Link href="https://www.twitter.com/lis.ufersa">
                    lis_ufersa
                    </Link>
                </li>

                <li>
                    <Icon>
                        <FaFacebookF />
                    </Icon>
                    <Link href="https://www.facebook.com/lis.ufersa">
                    /lis.ufersa
                    </Link>
                </li>
            </SocialNetworks>
        </Content>
    )
}