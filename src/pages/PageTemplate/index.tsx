import React from 'react';
import Header from '../../components/Header/TopBar';
import Footer from '../../components/Footer';

const PageTemplate: React.FC = (props) => {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    );
}

export default PageTemplate;