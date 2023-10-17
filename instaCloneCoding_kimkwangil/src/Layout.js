import image from './img/Logo.png';
import './Layout.css';
import Home_fill from './img/Icons/Home-fill.png';
import NewPosts from './img/Icons/NewPosts.png';
import ActivityFeed from './img/Icons/ActivityFeed.png';
import KKI_Sticker from './img/KKI_Sticker.png';
import {Outlet} from 'react-router-dom';
import {Link} from 'react-router-dom';

function Logo() {
    return (
        <div className="section_header_logo">
            <img src={image} alt=""></img>
        </div>
    );
}
function Empty() {
    return (
        <div className="section_header_empty">
            <p></p>
        </div>
    );
}
function Menu() {
    return (
        <div className="section_header_nav">
            <Link to="/">
                <img src={Home_fill} alt=""></img>
            </Link>
            <img src={NewPosts} alt=""></img>
            <img src={ActivityFeed} alt=""></img>
            <Link to="/MyPage">
                <img src={KKI_Sticker} width="22px" alt="" id = "img1"></img>
            </Link>
        </div>
    );
}

function Layout() {
    return (
        <div>
            <header>
                <div className="section_header">
                    <Link to="/Content">
                        <Logo></Logo>
                    </Link>
                    <Empty></Empty>
                    <Menu></Menu>
                </div>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    );
}
export default Layout;