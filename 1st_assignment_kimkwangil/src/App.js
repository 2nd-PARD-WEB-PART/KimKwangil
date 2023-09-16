import './App.css';
import image from './img/Logo.png';
import Home_fill from './img/Icons/Home-fill.png';
import NewPosts from './img/Icons/NewPosts.png';
import ActivityFeed from './img/Icons/ActivityFeed.png';
import KKI_Sticker from './img/KKI_Sticker.png';
import Options from './img/Icons/Options.png';
import Posts from './img/Icons/Posts.png';
import Save from './img/Icons/Save.png';
import Tagged from './img/Icons/Tagged.png';


import content1 from './img/content1.png';
import content2 from './img/content2.png';

function App() {
    return (
        <div className="section_main">
            <div className="section_header">
                <div className="section_header_logo">
                    <img src={image}></img>
                </div>

                <div className="section_header_empty">
                    <p></p>
                </div>

                <div className="section_header_nav">
                    <img src={Home_fill}></img>
                    <img src={NewPosts}></img>
                    <img src={ActivityFeed}></img>
                    <img src={KKI_Sticker} width="22px"></img>
                </div>
            </div>
            <div className="section_body">
                <div className="section_body_image">
                    <img src={KKI_Sticker}></img>
                </div>
                <div className="section_body_content">
                    <div className="section_body_content_first">
                        <div className="section_body_content_first_first">
                            <p>we_pard</p>
                            <div className="section_body_content_first_first_button">
                                <button>프로필 편집</button>
                            </div>
                        </div>
                        <div className="section_body_content_first_second">
                            <img src={Options}></img>
                        </div>

                    </div>
                    <div className="section_body_content_second">
                        <div className="section_body_content_second_first">
                            <button>게시물</button>
                            <p>1</p>
                        </div>
                        <div className="section_body_content_second_second">
                            <button>팔로워</button>
                            <p>255</p>
                        </div>
                        <div className="section_body_content_second_third">
                            <button>팔로우</button>
                            <p>500</p>
                        </div>
                    </div>

                    <div className="section_body_content_third">
                        <p>Pay it forward</p>
                    </div>

                </div>
            </div>
            <div className="section_toggle">
                <div className="section_toggle_first">
                    <img src={Posts}></img>
                    <div className="section_toggle_first_first">
                        <p>게시물</p>
                    </div>
                </div>
                <div className="section_toggle_first">
                    <img src={Save}></img>
                    <div className="section_toggle_first_first">
                        <p>게시물</p>
                    </div>
                </div>
                <div className="section_toggle_first">
                    <img src={Tagged}></img>
                    <div className="section_toggle_first_first">
                        <p>게시물</p>
                    </div>
                </div>
            </div>
            <div className="section_content">
                <div className="section_content_first">
                    <img src = {content1}></img>
                </div>
                <div className="section_content_first">
                    <img src = {content2}></img>
                </div>
                <div className="section_content_first">
                    <img src = {content1}></img>
                </div>
            </div>
        </div>
    );

}

export default App;
