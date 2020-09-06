import React from 'react';
import styled from 'styled-components';
import Img from '../../../assets/images/Home/inicio.svg';
import BannerImg from '../BannerImg';

const BannerContainer = styled.div`
    display: flex;
    justify-content: center;
`

export default function Banner() {
    return (
        <BannerContainer>
            <BannerImg
                src={Img}
                alt="Imagem da Home"
            />
        </BannerContainer>
    );
}