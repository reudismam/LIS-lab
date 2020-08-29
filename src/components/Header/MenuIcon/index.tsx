
import styled from 'styled-components';

interface MenuIconProps {
  open: boolean;
}

const MenuIcon = styled.div`
  display: flex;
  color: ${(props: MenuIconProps)  => props.open ? '#0C3197' : '#FFFFFF'};
  font-size: 2rem;
  height: 4rem;
  position: fixed;
  right: 20px;
  top: 10px;
  width: 4rem;
  z-index: 1;
  @media (min-width: 768px) {
    display: none;
  }
`;
export default MenuIcon;