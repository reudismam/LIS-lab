import React from 'react';
import styled from 'styled-components';
import TopBar from '../TopBar';
import Banner from '../Banner';
import {BannerProps} from '../Banner';

const MainHeader = styled.header`
    background-color: var(--primaria);
`

const Header: React.FC<BannerProps> = (props) => {
    return (
        <MainHeader>
            <TopBar />
            <Banner {...props} />
        </MainHeader>
    );
}

export default Header;