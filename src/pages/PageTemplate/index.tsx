import React from 'react';
import Header from '../../components/Header/Container';
import Footer from '../../components/Footer/Container';
import {BannerProps} from '../../components/Header/Banner';
import Container from './Container';

const PageTemplate: React.FC<BannerProps> = (props) => {
    return (
        <>
            <Header {...props}/>
            <Container>
                {props.children}
            </Container>
            <Footer />
        </>
    );
}

export default PageTemplate;