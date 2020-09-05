import styled from 'styled-components';


const MenuList = styled.ul`
    list-style: none;
    margin-left: 3rem;
    margin-top: 3rem;

    li {
        color: var(--cinza);
        margin-bottom: 1rem;
        font-size: 1.2rem;
        font-family: 'Roboto', sans-serif;
    }

    @media(min-width: 768px) {
        display: flex;
        margin: 0;

        li {
            margin-left: 1rem;
            margin-bottom: 0;
            color: var(--branco);
        }
    }
`

export default MenuList;