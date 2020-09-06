import styled from 'styled-components';

const BannerImg = styled.img`
    width: 300px;
    padding: 10px 0;

    @media(min-width: 768px) {
        margin-right: 50px;
        width: 400px;
    }

    @media(min-width: 768px) and (max-width: 1080px) {
        width: 300px;
    }
`

export default BannerImg;