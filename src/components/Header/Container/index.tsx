import React from 'react';
import styled from 'styled-components';
import BannerWithButton from '../BannerWithButton';
import TopBar from '../TopBar';
import {BannerProps} from '../BannerWithButton';

const MainHeader = styled.header`
    /*height: 100%;*/
    background-color: var(--primaria);
    width: 100vw;
`;

const Header: React.FC<BannerProps> = (props) => {
    return (
        <MainHeader>
            <TopBar />
            <BannerWithButton {...props}/>
        </MainHeader>
    );
}

export default Header;

