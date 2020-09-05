import styled from 'styled-components';

interface MenuIconProps {
    open: boolean;
}

const MenuIcon = styled.div`
    font-size: 2rem;
    color: ${(props: MenuIconProps) => props.open ? 'var(--cinza)': 'var(--branco)'};
    color: orange;
    z-index: 1;

    @media (min-width: 768px) {
        display: none;
    }
`
export default MenuIcon;