import logo from './logo.svg';
import './App.css';
import imgLogo from './KKI.png';

function App() {
    return (
        <div id="div_main">
            {/* 메인 div로서 전체 태그를 포함하고 있습니다. (하나의 도화지라고 볼 수 있습니다.) */}

            {/* section1 - 글의 타이틀 */}
            <h1 id="h1_hello">Hello, PARD</h1>

            {/* section2 - 나를 소개하는 사진 */}
            <img src={imgLogo} id="image"></img>

            {/* section3 - 나를 소개하는 글 */}
            <div id="div_section_1">
                {/* 간단한 소개*/}
                <h2>김광일| 23세 | ISFJ | 컴퓨터공학</h2>

                {/* section3-1 - 나의 목표*/}
                <div id="div_section_1_1">
                    {/* title과 data 이름의 div를 사용하여 스타일을 구분하고 통일했습니다.*/}
                    <p id="title">
                        <b>💡Goal💡</b>
                    </p>
                    <p id="data">건강하게 재밌게 알차게!</p>
                </div>

                {/* margin-bottom으로 주려고 했으나 편의성을 위해 'blank' 이름의 div를 사용했습니다.*/}
                <div id="blank"></div>
                <div id="blank"></div>

                {/* section3-2 - 내가 좋아하는 것들*/}
                <div id="div_section_1_1">
                    {/* title과 data 이름의 div를 사용하여 스타일을 구분하고 통일했습니다.*/}
                    <p id="title">
                        <b>💛Favorite💛</b>
                    </p>
                    <ul id="data">
                        <li>1️⃣ 맛있는거 먹기</li>
                        <li>2️⃣ 사진 찍기</li>
                        <li>3️⃣ 자기개발 하기</li>
                    </ul>
                </div>

                {/* margin-bottom으로 주려고 했으나 편의성을 위해 'blank' 이름의 div를 사용했습니다.*/}
                <div id="blank"></div>
                <div id="blank"></div>

            </div>
        </div>
    );
}

export default App;
