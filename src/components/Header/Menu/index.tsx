import React, { useState } from 'react';
import {FiMenu} from 'react-icons/fi';
import {RiCloseFill} from 'react-icons/ri';
import styled from 'styled-components';
import MenuIcon from '../MenuIcon';
import MenuList from '../MenuList';

interface MenuIconProps {
  open?: boolean;
}

const MenuContainer = styled.div`
  flex: 1;
  margin-left: 1.6rem;
  margin-right: 1.6rem;
`

const Menus = styled.nav`
    background-color: var(--fundo);
    flex-direction: column;
    height: 100vh;
    justify-content: left;
    padding-top: 3.5rem;
    position: fixed;
    right: 0;
    top: 0;
    transform: ${ (props: MenuIconProps) => props.open ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s;
    width: 200px;

  li {
    padding-right: 1.6rem;
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: 'center';
    justify-content: space-between;
  }
`;

const Menu = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <MenuContainer>
      {!open &&
      <MenuIcon open={open} onClick={() => setOpen(!open)}>
        <FiMenu />
      </MenuIcon>}
      
      {open &&
      <MenuIcon open={open} onClick={() => setOpen(!open)}>
        <RiCloseFill />
      </MenuIcon>}

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
            <li>Criar conta</li>
        </MenuList>
      </Menus>
      </MenuContainer>
  )
}

export default Menu

