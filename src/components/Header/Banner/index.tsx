import React from 'react';
import styled from 'styled-components';
import Img from '../../../assets/images/Home/inicio.svg';
import BannerImg from '../BannerImg';
import BannerMessage, {MessageContainer} from '../BannerMessage';

const BannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(min-width: 768px) {
        display: grid;
        grid-template-columns: 3fr 2fr;
        grid-template-areas: 
            "message figure";

        & ${BannerImg} {
            grid-area: figure;
            justify-self: end;
        }

        & ${MessageContainer} {
            grid-area: message;
        }
    }
`

export default function Banner() {
    return (
        <BannerContainer>
            <BannerImg
                src={Img}
                alt="Imagem da Home"
            />
            <BannerMessage />
        </BannerContainer>
    );
}