import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

var Banner = styled.div`
        width: 100%;
        /*height: 100%;*/
        display: flex; 
        align-items: center;
        justify-content: center;
        flex-direction: column;

    .image {
        width: 200px;
    }

    h1 {
        width: 350px;
        color: var(--fundo);
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        margin-top: 20px;
        line-height: 1.6;
        display: flex;
        justify-content: center;
    }

    h2 {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        color: var(--fundo);
        font-weight: normal;
        margin-top: 10px;
        margin-bottom: 10px;
        width: 350px;
        line-height: 1.6;
        display: flex;
        justify-content: center;
    }

    .message {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .message button {
        background-color: var(--primaria);
        border: 1px solid var(--cinza);
        border-radius: 0.8rem;
        height: 4rem;
        padding-left: 2rem;
        padding-right: 2rem;
        color: var(--fundo);
    }

    .button {
        display: inline-block;
        margin-top: 10px;
    }

    @media(min-width: 768px) {
        display: grid;
        margin-top: 10px;
        margin-bottom: 10px;
        grid-template-columns: 3fr 1fr 1fr;
        grid-template-areas: 
            "message message message figure figure";
        
        .image {
            grid-area: figure;
            align-self: start;
            margin-right: 50px;
            width: 450px;
            
        }

        .message {
            align-items: center;
            display: grid;
            grid-area: message;
            justify-content: center;
            margin-bottom: 50px;
            margin-left: 100px;
            margin-top: 0;
        }

        h1 {
            font-size: 26px;
            width: 500px;
            justify-content: start;
        }

        h2 {
            justify-content: start;
        }
    }
`

export interface BannerProps {
    image?: string;
    imageAlt?: string;
    title: string;
    description?: string;
    buttonLink?: string;
    buttonText?: string;

}



const BannerWithButton: React.FC<BannerProps> = (props) => {
    return (
        <>
        <Banner>
            {props.image && <img
                src={props.image}
                alt={props.imageAlt}
                className="image" />}
            <div className="message">
                <h1>{props.title}</h1>
                {props.description && <h2>{props.description}</h2>}
                {props.buttonLink && <div className="button">
                    <Link to={props.buttonLink}>
                    <button>
                        {props.buttonText}
                    </button>
                    </Link>
                </div>}
            </div>
        </Banner>
        </>
    );
}

export default BannerWithButton;