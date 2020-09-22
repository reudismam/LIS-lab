import styled from 'styled-components';

const Button = styled.button`
    width: 90%;
    margin: 50px auto;
    background-color: var(--primaria);
    display: flex;
    border: 1px solid var(--cinza);
    height: 6rem;
    justify-content: center;
    align-items: center;
    color: var(--branco);
    text-decoration: none;
    border-radius: 0.8rem;
    font-size: 1.4rem;
    margin-bottom: 20px;
    font-family: 'Roboto', sans-serif;

    @media(min-width: 768px) {
        width: 200px;
        margin-right: 0;
    }
`

export default Button;