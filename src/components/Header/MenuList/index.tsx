import styled from 'styled-components';

const MenuList = styled.ul`
    list-style: none;
    margin-left: 3rem;
    margin-top: 3rem;
    font-size: 1.4rem;
    
    li {
        color: var(--cinza);
        margin-bottom: 1rem;
    }

    @media (min-width: 768px) {
        margin: 0;
        display: flex;

        li {
            margin-left: 1rem;
            margin-bottom: 0px;
            color: var(--branco);
        }
    }
`;

export default MenuList;