import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Conexao from '../../services/conection';

const VideoDestaqueContainer = styled.div`
    @media(min-width: 768px) {
        display: flex;
        margin-bottom: 40px;
    }
`

const Video = styled.iframe`
    width: 100%;
    height: 315px;

    @media(min-width: 768px) {
        width: 60%;
        height: 500px;
        border-radius: 0.8rem;
    }
`

const Title = styled.h2`
    color: var(--cinza);
    font-size: 1.6rem;
    font-weight: normal;
    margin-bottom: 20px;
`

const Description = styled.div`
    margin-top: 20px;
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    line-height: 1.6;
    height: 300px;

    @media(min-width: 768px) {
        width: 30%;
        margin-left: 20px;
        margin-top: 0;

    }
`

const Info = styled.p`
    color: var(--cinza);
    height: 150px;
    overflow: hidden;
`

interface Video {
    name: string,
    video: string,
    featured: boolean,
    description: string
}

export default function VideoDestaque() {
    const [videos, setVideos] = useState<Video[]>([]);

    useEffect(() => {
        Conexao.get('/videos')
            .then((response) => {
                setVideos(response.data);
            })
            .catch((error) => {
                alert(error);
            });
    }, []);

    if (videos.length) {
        var videoItem = videos.filter(v => v.featured === true)[0];
        return (
            <VideoDestaqueContainer>
                <Video src={`https://www.youtube.com/embed/${videoItem.video}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Video>
                <Description>
                    <Title>
                        {videoItem.name}
                    </Title>

                    <Info>
                        {videoItem.description}
                    </Info>
                </Description>
            </VideoDestaqueContainer>
        );
    }
    else {
        return null;
    }
}