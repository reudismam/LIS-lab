import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';

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