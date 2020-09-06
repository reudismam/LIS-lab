import React from 'react';
import styled from 'styled-components';
import Img from '../../../assets/images/Home/inicio.svg';
import BannerImg from '../BannerImg';
import BannerMessage from '../BannerMessage';

const BannerContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
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