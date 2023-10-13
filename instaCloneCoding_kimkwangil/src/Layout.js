import image from './img/Logo.png';
import './Layout.css';
import Home_fill from './img/Icons/Home-fill.png';
import NewPosts from './img/Icons/NewPosts.png';
import ActivityFeed from './img/Icons/ActivityFeed.png';
import KKI_Sticker from './img/KKI_Sticker.png';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Logo() {
    return (
        <div className="section_header_logo">
            <Link to = "/"><img src={image} alt=""></img></Link>
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
            <img src={Home_fill} alt=""></img>
            <img src={NewPosts} alt=""></img>
            <img src={ActivityFeed} alt=""></img>
            <img src={KKI_Sticker} width="22px" alt=""></img>
        </div>
    );
}

function Layout() {
    return (
        <div>
            <header>
                <div className="section_header">
                    <Logo></Logo>
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