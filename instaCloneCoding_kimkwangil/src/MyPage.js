import {Link} from 'react-router-dom';

import KKI_Sticker from './img/KKI_Sticker.png';
import Options from './img/Icons/Options.png';
import Posts from './img/Icons/Posts.png';
import Save from './img/Icons/Save.png';
import Tagged from './img/Icons/Tagged.png';
import Content1 from './img/content1.png';
import Content2 from './img/content2.png';
import styled from 'styled-components';

import React, {useContext, useState} from 'react';
import {UserInfoContext} from './App'; // App.js에서 생성한 Context를 import합니다.

// 화면의 main section을 관리하는 Component입니다.
const SectionMain = styled.div `
    width: 935px;
    margin: 0 auto;
    background: var(--Dark-white, #FAFAFA);

    a{
        text-decoration: none;
    }
`;

// section에서 body 영역을 관리하는  Component입니다.
const SectionBody = styled.div `
    height: 150px;
    padding-top: 20px;
    padding-bottom: 44px;
`;

// section에서 두 번째 Content에 대한 Component입니다.
const SectionBodyContent2 = styled.div `
    padding: 20px 0;
    
    * {
        display: inline;
    }

    button{
        background: var(--Dark-white, #FAFAFA);
        border: none;
        padding: 0;
        font-size: 16px;
}
`;

// section에서 세 번째 Content에 대한 Component입니다.
const SectiobBodyContent3 = styled.p `
    font-size: 16px;
    font-weight: 600;
    margin: 0;
`;

// section에서 내용을 관리하는  Component입니다.
const SectionContent = styled.div `
    width: 300px;
    height: 300px;
    float: left;

    img{
        width: 300px;
        height: 300px;
    }
`;

// 프로필의 이미지 Component입니다.
const SectionImage = styled.img `
    padding-left: 71px;
    padding-right: 101px;
    width: 150px;
    height: 150px;
    float : left;
`;

// 프로필의 데이터 Component입니다.
const SectionData = styled.div `
    width: 935px;
    height: 700px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`;

//  Toggle 영역 Component입니다.
const SectionToggle = styled.div `
    width: 935px;
    height: 52px;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    .section_toggle_first {
        /* background-color: blue; */
        width: 112px;
        height: 18px;
        display: flex;
        align-items: flex-start;
        float: left;
        padding-top: 17px;
        padding-bottom: 17px;
    }

    p{
        padding-left: 6px;
        font-size: 12px;
        font-weight: 600;
        margin: 0;

        /* color: var(--Black, #262626); */
        font-size: 12px;
        line-height: 18px;
    }

    img {
        padding: 3px 0;
        width: 12px;
        height: 12px;
    }

    .section_toggle_first_first {
        font-size: 12px;
    }
`;

// 피드를 관리하는 Component입니다.
function Content(props) {
    return (
        <SectionContent>
            <img src={props.value} alt=''></img>
        </SectionContent>
    );
};

// 가운데 영역의 카테고리를 관리하는 Conponent입니다.
function Category(props) {
    return (

        <div className="section_toggle_first">
            <img src={props.value} alt=""></img>
            <div className="section_toggle_first_first">
                <p>{props.name}</p>
            </div>
        </div>
    );
}

// Conent를 한 번에 관리하는 Component입니다.
function MyContents() {
    return (
        <SectionData>
            <Content value={Content1}></Content>
            <Content value={Content2}></Content>
            <Content value={Content1}></Content>
        </SectionData>
    );
}

// 프로필의 데이터를 한 번에 관리하는 Component입니다.
function MydataInfo(props) {
    return (
        <SectiobBodyContent>
            <button>{props.button}</button>
            <strong>
                <p>{props.data}</p>
            </strong>
        </SectiobBodyContent>
    )
}

// Category를 한 번에 묶은 토클 Component입니다.
function Toggle() {
    return (
        <SectionToggle>
            <Category value={Posts} name="게시물"></Category>
            <Category value={Save} name="저장됨"></Category>
            <Category value={Tagged} name="태그됨"></Category>
        </SectionToggle>
    );
}

// body의 Content 영역 Component입니다.
const SectiobBodyContent = styled.div `
    width: 85px;
    margin-right: 10px;
`;

// Section body Component입니다.
const SectionBodyContent = styled.div `
    float: left;
    width: 613px;
    height: calc(150px - 28px);
    padding-top: 14px;
    padding-bottom: 14px;

    .p1 {
        width: 101px;
        font-size: 28px;
    }
        
    .button1{
        margin-left: 20px;
        border-radius: 5px;
        height : 80%;
        border : 1px solid gray;
        color : black;
        font-size: 15px;
    }

    img{
        margin-left: 20px;
        width: 24px;
        height: 24px;
    }
    
`;

// section에서 첫 번째 Content에 대한 Component입니다.
const SectionBodyContent1 = styled.div `
    height : 40px;  
    * {
        display: inline;
    }


`;

function MyPage() {

    // context로 넘어온 값을 담고 있습니다.
    const {userInfo} = useContext(UserInfoContext);
    const [newData] = useState(userInfo);

    return (
        <SectionMain>
            {/* 상단의 프로필 영역 */}
            <SectionBody>
                {/* 프로필 사진 */}
                <SectionImage src={KKI_Sticker}></SectionImage>

                {/* 프로필 정보 */}
                <SectionBodyContent>
                    {/* 첫 번째 Row */}
                    <SectionBodyContent1>
                        {/* 이름 */}
                        <p className='p1'>{newData.name}</p>

                        {/* 프로필 변경 버튼*/}
                        <Link to="../EditProfile">
                            <button className='button1'>프로필 편집</button>
                        </Link>

                        {/* EditProfile 버튼 */}
                        <Link to="../EditProfile">
                            <img src={Options} alt=""></img>
                        </Link>
                    </SectionBodyContent1>

                    {/* 두 번째 Row */}
                    <SectionBodyContent2>
                        <MydataInfo button="게시물" data="3"></MydataInfo>
                        <MydataInfo button="팔로워" data="255"></MydataInfo>
                        <MydataInfo button="팔로우" data="255"></MydataInfo>
                    </SectionBodyContent2>

                    {/* 세 번째 Row */}
                    <SectiobBodyContent3>{newData.introduction}</SectiobBodyContent3>

                </SectionBodyContent>
            </SectionBody>

            {/* 토클 버튼 영역 */}
            <Toggle></Toggle>

            {/* 피드 영역 */}
            <MyContents></MyContents>
        </SectionMain>
    );

}

export default MyPage;