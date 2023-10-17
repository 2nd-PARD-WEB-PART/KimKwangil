import {Link} from 'react-router-dom';

import KKI_Sticker from './img/KKI_Sticker.png';
import Options from './img/Icons/Options.png';
import Posts from './img/Icons/Posts.png';
import Save from './img/Icons/Save.png';
import Tagged from './img/Icons/Tagged.png';
import Content1 from './img/content1.png';
import Content2 from './img/content2.png';
import styled from 'styled-components';
import {useState} from 'react';

const SectionMain = styled.div `

    width: 935px;
    margin: 0 auto;
    background: var(--Dark-white, #FAFAFA);
    a{
        text-decoration: none;
    }
`;

const SectionBody = styled.div `
    height: 150px;
    padding-top: 20px;
    padding-bottom: 44px;
`;

const SectionContent = styled.div `
    width: 300px;
    height: 300px;
    float: left;

    img{
        width: 300px;
        height: 300px;
    }
`;

function Content(props) {
    return (
        <SectionContent>
            {/* <a href=""> */}
            <img src={props.value} alt=''></img>
            {/* </a> */}
        </SectionContent>
    );
};

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

const SectionImage = styled.img `
        padding-left: 71px;
        padding-right: 101px;
        width: 150px;
        height: 150px;
        float : left;
`;
const SectionData = styled.div `
    width: 935px;
    height: 700px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`;

function MyContents() {
    return (

        <SectionData>
            {/* <Link to="/Content"> */}
            <Content value={Content1}></Content>
            {/* </Link> */}
            {/* <Link to="/Content"> */}
            <Content value={Content2}></Content>
            {/* </Link> */}
            {/* <Link to="/Content"> */}
            <Content value={Content1}></Content>
            {/* </Link> */}

        </SectionData>
    );
}
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

}
    .section_toggle_first_first {
    font-size: 12px;
}

`;
function Toggle() {
    return (
        <SectionToggle>
            <Category value={Posts} name="게시물"></Category>
            <Category value={Save} name="저장됨"></Category>
            <Category value={Tagged} name="태그됨"></Category>
        </SectionToggle>
    );
}
const SectiobBodyContent = styled.div `
    width: 85px;
    margin-right: 10px;
`;

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
        /* background-color: gray; */
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

const SectionBodyContent1 = styled.div `
    height : 40px;  
    * {
        display: inline;
    }


`;
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

const SectiobBodyContent3 = styled.p `
    font-size: 16px;
    font-weight: 600;
    margin: 0;
`;

function MyPage(props) {

    const [newData, setNewData] = useState(props.myData);

    return (
        <SectionMain>
            <SectionBody>
                <Link to="./Profile">
                    <SectionImage src={KKI_Sticker}></SectionImage>
                </Link>

                <SectionBodyContent>
                    <SectionBodyContent1>
                        <p className='p1'>{newData.name}</p>
                        <Link to="./EditProfile">
                            <button className='button1'>프로필 편집</button>
                        </Link>

                        <Link to="./EditProfile">
                            <img src={Options} alt=""></img>
                        </Link>
                    </SectionBodyContent1>

                    <SectionBodyContent2>
                        <MydataInfo button="게시물" data="3"></MydataInfo>
                        <MydataInfo button="팔로워" data="255"></MydataInfo>
                        <MydataInfo button="팔로우" data="255"></MydataInfo>
                    </SectionBodyContent2>

                    <SectiobBodyContent3>{newData.introduction}</SectiobBodyContent3>

                </SectionBodyContent>
            </SectionBody>
            <Toggle></Toggle>
            <MyContents></MyContents>
        </SectionMain>
    );

}

export default MyPage;