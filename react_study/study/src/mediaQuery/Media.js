import React from 'react';
import { styled } from 'styled-components';

const Div = styled.div`
    // 기본 넓이 지정
    width : 100vw;
    height : 100vh;
    
    // 기본 배경 색
    background-color: purple;

    // width의 최소 길이가 600px일 때
    @media (min-width : 600px) {
        background-color: blue;
    }

    // width의 최소 길이가 1000px일 때
    @media (min-width : 1000px) {
        background-color: yellow;
    }

    // width의 최소 길이가 1400px일 때
    @media (min-width : 1400px) {
        background-color : red;
    }
`;

function Media() {

    return (
        <Div>
            <h1>Media Query</h1>
        </Div>
    );
}

export default Media;
