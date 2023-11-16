import React from 'react';
import {styled} from 'styled-components';

const Wrapper = styled.div `
    // 기본 배경 색
    background-color: #fff;
    // 기본 글자 색
    color : #000;
    // 기본 폰트 크기
    font-size: 14px;

    // width의 최소 길이가 768px 때
    @media (min-width : 768px) {
        color : red;
        font-size: 16px;
    }

    // width의 최소 길이가 992px일 때
    @media (min-width : 992px) {
        color : blue;
        font-size: 18px;
    }
`;

function Media() {

    return (
        <Wrapper>
            <h1>Hello World</h1>
            <p>This is a paragraph</p>
        </Wrapper>
    );
}

export default Media;