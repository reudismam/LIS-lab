import React, {useState} from 'react';
import styled from 'styled-components';
import {FiMenu} from 'react-icons/fi';
import {RiCloseFill} from 'react-icons/ri';
import MenuIcon from '../MenuIcon';
import MenuList from '../MenuList';

interface MenusProps {
    open?: boolean;
}

const MenuContainer = styled.div`
    margin-left: 1.6rem;
    margin-right: 1.6rem;
    display: flex;
    flex: 1;

    & ${MenuIcon} {
        position: fixed;
        right: 20px;
        top: 20px;
    }
`

const Menus = styled.nav`
    background-color: var(--branco);
    width: 200px;
    height: 100vh;
    position: fixed;
    right: 0;
    top: 0;
    transform: ${(props: MenusProps) => props.open ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s;

    @media(min-width: 768px) {
        transform: none;
        background-color: transparent;
        display: flex;
        position: static;
        height: 100%;
        flex: 1;
        justify-content: space-between;  
    }
`

export default function Menu() {
    const [open, setOpen] = useState(false);

    return (
        <MenuContainer>
           {!open &&
            <MenuIcon open={open} onClick={() => setOpen(!open)}>
                <FiMenu />
            </MenuIcon>
            }
            
            {open &&
            <MenuIcon open={open} onClick={() => setOpen(!open)}>
                <RiCloseFill />
            </MenuIcon>
            }
            
            <Menus open={open}>
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