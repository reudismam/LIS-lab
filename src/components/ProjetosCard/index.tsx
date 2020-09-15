import styled from 'styled-components';

const Card = styled.article`
    height: 600px;
    overflow: hidden;

    @media(min-width: 768px) {
        width: 47%;
        border: 1px solid var(--bordas);
        border-radius: 0.8rem;
    }
`

export default Card;