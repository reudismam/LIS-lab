import React from 'react';
import styled from 'styled-components';
import BannerImage from '../BannerImage';
import BannerImg from '../../../assets/images/Home/inicio.svg';

const BannerContainer = styled.div`
    display: flex;
    justify-content: center;

`

export default function Banner () {
    return (
        <BannerContainer>
            <BannerImage
                src={BannerImg}
                alt="Home Image"
            />
        </BannerContainer>
    )
}