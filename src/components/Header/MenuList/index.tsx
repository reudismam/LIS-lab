import styled from 'styled-components';

interface MenuIconProps {
    open: boolean;
}

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;

  li {
    font-family: 'Roboto', sans-serif;
    color: var(--fundo);
  }

  @media(max-width: 768px) {
    flex-direction: column;
    font-size: 1.6rem;
    margin-bottom: 3rem;

    li {
      width: 100%;
      display:flex;
      align-items: left;
      margin-bottom: 1rem;
      margin-left: 3rem;
      color: var(--primaria-dark);
    }
  }
`;

export default MenuList;