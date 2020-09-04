import React from 'react';
import styled from 'styled-components';
import {FiMenu} from 'react-icons/fi';
import MenuIcon from '../MenuIcon';
import MenuList from '../MenuList';

const MenuContainer = styled.div`
    margin-left: 1.6rem;
    margin-right: 1.6rem;
    display: flex;
    flex: 1;
    & ${MenuIcon} {
        position: fixed;
        right: 20px;
        top: 10px;
    }
`

const Menus = styled.nav`
    background-color: var(--branco);
    height: 100vh;
    width: 200px;
    position: fixed;
    top: 0;
    right: 0;

    @media (min-width: 768px) {
        background-color: transparent;
        margin-left: 1.2rem;
        margin-right: 1.2rem;
        display: flex;
        position: static;
        height: 100%;
        flex: 1;
        justify-content: space-between;
    }
`

export default function Menu() {
    return (
        <MenuContainer>
            <MenuIcon>
                <FiMenu />
            </MenuIcon>

            <Menus>
                <MenuList>
                    <li>Início</li>
                    <li>Pesquisadores</li>
                    <li>Publicações</li>
                    <li>Projetos</li>
                    <li>Portifólio</li>
                    <li>Notícias</li>
                    <li>Editais</li>
                    <li>Parceiros</li>
                    <li>Contato</li>
                    <li>Sobre</li>
                </MenuList>

                <MenuList>
                    <li>Sair</li>
                    <li>Perfil</li>
                </MenuList>
            </Menus>
        </MenuContainer>
    );
}