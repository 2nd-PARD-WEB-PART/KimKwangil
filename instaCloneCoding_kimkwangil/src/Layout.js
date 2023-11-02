import image from './img/Logo.png';
import './Layout.css';
import Home_fill from './img/Icons/Home-fill.png';
import NewPosts from './img/Icons/NewPosts.png';
import ActivityFeed from './img/Icons/ActivityFeed.png';
import KKI_Sticker from './img/KKI_Sticker.png';
import {Outlet} from 'react-router-dom';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

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
    /* @media (max-width :450px){

    } */
    
`;
function Menu() {
    return (
        <Nav1>
            <Link to="/">
                <img src={Home_fill} alt=""></img>
            </Link>
            <img src={NewPosts} alt=""></img>
            <img src={ActivityFeed} alt=""></img>
            <Link to="/MyPage" id = "Link1">
                <img src={KKI_Sticker} alt="" id = "myimg"/>
            </Link>
        </Nav1>
    );
}

function Layout() {
    return (
        <div>
            <header>
                <Header1>
                    <Link to="/Content">
                        <Logo1>
                            <img src={image} alt=""></img>
                        </Logo1>
                    </Link>
                    <Empty1>
                        <p></p>
                    </Empty1>
                    <Menu></Menu> 
                </Header1>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    );
}
export default Layout;