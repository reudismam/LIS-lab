import React from 'react';
import Header from '../../components/Header/Container';
import Footer from '../../components/Footer';
import {BannerProps} from '../../components/Header/BannerWithButton';

const PageTemplate: React.FC<BannerProps> = (props) => {
    return (
        <>
            <Header {...props}/>
            {props.children}
            <Footer />
        </>
    );
}

export default PageTemplate;