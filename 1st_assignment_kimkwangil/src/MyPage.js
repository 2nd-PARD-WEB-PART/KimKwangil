import './MyPage.css';
import image from './img/Logo.png';
import Home_fill from './img/Icons/Home-fill.png';
import NewPosts from './img/Icons/NewPosts.png';
import ActivityFeed from './img/Icons/ActivityFeed.png';
import KKI_Sticker from './img/KKI_Sticker.png';
import Options from './img/Icons/Options.png';
import Posts from './img/Icons/Posts.png';
import Save from './img/Icons/Save.png';
import Tagged from './img/Icons/Tagged.png';
import Content1 from './img/content1.png';
import Content2 from './img/content2.png';

function Content(props) {
    return (
        <div className="section_content_first">
            <a href="https://www.naver.com">
                <img src={props.value} alt=""></img>
            </a>
        </div>
    );
};
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
function Logo() {
    return (
        <div className="section_header_logo">
            <img src={image} alt=""></img>
        </div>
    );
}

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

function MyContents() {
    return (
        <div className="section_content">
            <div className="section_content_first">
                <img src={Content1} alt=""></img>
            </div>
            <div className="section_content_first">
                <img src={Content2} alt=""></img>
            </div>
            <div className="section_content_first">
                <img src={Content1} alt=""></img>
            </div>

            {/* <Content value="Content1"></Content>
            <Content value="Content2"></Content>
            <Content value="Content1"></Content>  */
            }
        </div>
    );
}

function Toggle() {
    return (
        <div className="section_toggle">
            <div className="section_toggle_first">
                <img src={Posts} alt=""></img>
                <div className="section_toggle_first_first">
                    <p>게시물</p>
                </div>
            </div>
            <div className="section_toggle_first">
                <img src={Save} alt=""></img>
                <div className="section_toggle_first_first">
                    <p>저장됨</p>
                </div>
            </div>
            <iv className="section_toggle_first">
                <img src={Tagged} alt=""></img>
                <div className="section_toggle_first_first">
                    <p>태그됨</p>
                </div>
            </iv>
            {/*
                <Category value="Posts" name="게시물"></Category>
                <Category value="Save" name="저장됨"></Category>
                <Category value="Tagged" name="태그됨"></Category> */
            }

        </div>
    );
}

function SectionBody() {
    return (
        <div className="section_body">
            <div className="section_body_image">
                <img src={KKI_Sticker} alt=""></img>
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
                        <img src={Options} alt=""></img>
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
    );
}
function SectionHeader() {
    return (
        <div className="section_header">
            <Logo></Logo>
            <Empty></Empty>
            <Menu></Menu>
        </div>
    );
}
function MyPage() {
    return (
        <div className="section_main">
            <SectionHeader></SectionHeader>
            <SectionBody></SectionBody>
            <Toggle></Toggle>
            <MyContents></MyContents>
        </div>
    );

}

export default MyPage;
