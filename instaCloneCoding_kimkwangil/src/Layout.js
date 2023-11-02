import image from './img/Logo.png';
import Home_fill from './img/Icons/Home-fill.png';
import NewPosts from './img/Icons/NewPosts.png';
import ActivityFeed from './img/Icons/ActivityFeed.png';
import KKI_Sticker from './img/KKI_Sticker.png';
import {Outlet} from 'react-router-dom';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import Instar from './img/Icons/instar.jpg';
import EmptyHeart from './img/Icons/ActivityFeed.png';

// Body를 스타일화한 Component입니다.
const Body = styled.div `
    *{
            background: var(--Dark-white, #FAFAFA);
    }

`;
// 인스타그램 로고를 관리하는 Component입니다.
const Logo1 = styled.div `
    display: flex;
    float: left;
    flex-direction: column;
    align-items: flex-start;
    height : 30px;
    width: 30%;
    
    @media (min-width: 750px) {
        padding-top: 7px;
        gap: 10px;
        /* background-color: red; */
    }
    @media (max-width :750px) and (min-width: 450px){
        width : 30%;
        /* padding-top: 7px; */
        gap : 3px;
    }

`;

// 상단의 공백을 관리하는 Component입니다.
const Empty1 = styled.div `
    display: flex;
    justify-content: center;
    align-items: flex-start;
    float: left;
    align-self: stretch;
    height : 30px;
    
    width: 50%;
    @media (min-width: 750px) {
    /* background-color: blue; */
    }
    @media (max-width :750px) and (min-width: 450px){
        width: 40%;

    }
`;

// 상단의 우측 네비게이션 바를 관리하는 Component입니다.
const Nav1 = styled.div `
    display: flex;
    float: left;
    align-items: flex-start;
    justify-content: space-between;
    height : 30px;
    
    #myimg{
        width: 30px;
        border-radius: 50%;
    }
    #Link1{
        background: none;
        width: 16%;
    }
    @media (min-width: 750px) {
        width: 20%;
        /* background-color: green; */
        height: 22px;
        padding-top: 7px;
        padding-bottom: 7px;
    }
    @media (max-width :750px) and (min-width: 450px){
        width : 30%;
    }
`;

// 상단 전체를 관리하는 version1 Component입니다.
const Header1 = styled.div `
    margin: 0 auto;

    /* background-color: aqua; */
    background: var(--Dark-white, #FAFAFA);
    height: 36px;

    

    @media (min-width: 750px) {
    width: 935px;
    padding-top: 10px;
    padding-bottom: 8px;
    
    }
    @media (max-width :750px) and (min-width: 450px){
        width : 500px;
        padding-top: 10px;
        padding-bottom: 4px;

    }
    @media (max-width :450px){
        display: flex;
        justify-content: space-between;
        align-items: center;
        width : 350px;
        /* background-color: aqua; */
        padding : 0px 5px;
        box-sizing: border-box;

        img{
            width: 15px;
            height : 15px;
        }
        
    }

`;

// 하단 전체를 관리하는 Version2 Component입니다. (width : 450px 아래에서만 작동됩니다.)
const Fotter = styled.div `
    margin: 0 auto;

    /* background-color: aqua; */
    background: var(--Dark-white, #FAFAFA);
    height: 36px;

    

    @media (min-width: 750px) {
    width: 935px;
    padding-top: 10px;
    padding-bottom: 8px;
    
    }
    @media (max-width :750px) and (min-width: 450px){
        width : 500px;
        padding-top: 10px;
        padding-bottom: 4px;

    }
    @media (max-width :450px){
        display: flex;
        justify-content: space-between;
        align-items: center;
        width : 350px;
        /* background-color: aqua; */
        padding : 0px 40px;
        box-sizing: border-box;

        img{
            width: 15px;
            height : 15px;
        }
        
    }
    #profile{
        border-radius: 50%;
    }

`;

// 상단의 검색 input을 관리하는 Conponent입니다.
const SearchInput = styled.input `
    text-align: center;
    border : none;
    border-radius: 5px;
    background-color: #EFEFEF;
    &::placeholder{
        font-size : 10px;
    }

`;

// 상단의 Header 영역을 관리 Conponent입니다.
const MyHeader = styled.header `
    border-bottom :  1px solid rgba(0, 0, 0, .1);
`;

// 상단의 fotter 영역을 관리 Conponent입니다.
const MyFootter = styled.footer `
    margin-top: 70px;
    border-top :  1px solid rgba(0, 0, 0, .1);
    height: 30px;
`;

// Menu의 Conponent를 관리하는 Componenet입니다.
function Menu() {
    return (
        <Nav1>
            <Link to="/">
                <img src={Home_fill} alt=""></img>
            </Link>
            <img src={NewPosts} alt=""></img>
            <img src={ActivityFeed} alt=""></img>
            <Link to="/MyPage" id="Link1">
                <img src={KKI_Sticker} alt="" id="myimg"/>
            </Link>
        </Nav1>
    );
}

// return되는 Layout conponent입니다.
function Layout() {
    return (
        <Body>
            {/* 상단 Header 태그입니다. */}
            <MyHeader>
                {/* width가 450px 이상일 때만 보여지는 태그입니다. */}
                <MediaQuery minWidth={450}>
                    <Header1>
                        {/* 인스타그램 로고 */}
                        <Link to="/">
                            <Logo1>
                                <img src={image} alt=""></img>
                            </Logo1>
                        </Link>

                        {/* Header의 공백 */}
                        <Empty1>
                            <p></p>
                        </Empty1>

                        {/* Navigation 태그 */}
                        <Menu></Menu>
                    </Header1>
                </MediaQuery>

                {/* width가 450px 이하일 때만 보여지는 태그입니다. */}
                <MediaQuery maxWidth={450}>
                    <Header1>
                        {/* 인스타그램 로고 (미니) */}
                        <Link to="/" id="Link1">
                            <img src={Instar} alt=""/>
                        </Link>

                        {/* 검색 input */}
                        <SearchInput placeholder='검색'/> {/* 하트 이미지 */}
                        <img src={EmptyHeart} alt=""/>
                    </Header1>
                </MediaQuery>
            </MyHeader>

            {/* 가운데 보여질 Outlet을 관리하는 태그입니다. */}
            <main>
                <Outlet/>
            </main>

            {/* 하단 Fotter 태그입니다.  (width가 450 이하일 때만 보여집니다.*/}
            <MediaQuery maxWidth={450}>
                <MyFootter>
                    <Fotter>
                        <Link to="/" id="Link1">
                            <img src={Home_fill} alt=""/>
                        </Link>
                        <img src={NewPosts} alt=""/>
                        <Link to="/MyPage" id="Link1">
                            <img src={KKI_Sticker} alt="" id="profile"/>
                        </Link>
                    </Fotter>
                </MyFootter>
            </MediaQuery>

        </Body>
    );
}
export default Layout;