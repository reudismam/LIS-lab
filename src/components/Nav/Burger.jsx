import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';
import {FiMenu} from 'react-icons/fi'
import {RiCloseFill} from 'react-icons/ri';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  font-size: 1.6rem;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    color: ${({ open }) => open ? '#fff' : '#828282'};
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        {!open && <FiMenu />}
      </StyledBurger>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        {open && <RiCloseFill />}
      </StyledBurger>
      <RightNav open={open}/>
    </>
  )
}

export default Burger
