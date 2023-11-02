import React, {useContext, useState} from 'react';
import styled from 'styled-components';
import meta from './img/meta.svg';
import KKI_Sticker from './img/KKI_Sticker.png';
import {useNavigate} from 'react-router-dom';
import {UserInfoContext} from './App'; // App.js에서 생성한 Context를 import합니다.

// Body 영역 Component입니다.
const Body = styled.div `
    width: 100%;
    height : 95vh;
    box-sizing: border-box;
`;

// section의 Main 영역 Component입니다.
const SectionMain = styled.div `
    width: 935px;
    margin: 30px auto;
    height : 647px;
    display: flex;
    border: 1px solid rgba(0, 0, 0, .1);
`;

// 왼쪽 Side Bar Component입니다.
const SideBar = styled.div `
    width : 25%;
    display: flex;
    flex-direction: column;
`;

// Side bar에서 프로필 편집 Component입니다.
const Row1 = styled.div `
    width: 100%;
    height : 70%;
    #Data1{
        border-left: 3px solid black;
    }
`;

// Side bar에서 프로필 편집의 데이터 부분 Component입니다.
const Data = styled.div `
    width: 100%;
    height : 60px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding-left: 50px;

    p{
        background-color : transparent;
        margin: 0;
    }
`;

// Side bar에서 비밀번호 변경 Component입니다.
const Row2 = styled.div `
    border-top :  1px solid rgba(0, 0, 0, .1);
    width: 100%;
    height : 30%;
    padding : 30px;
    box-sizing: border-box;
    div{
        margin: 0;
        p{
            margin: 0;
        }
    }
`;

// 데이터를 수정하는 영역의 Component입니다.
const EditContent = styled.div `
    width:  75%;    
    border-left: 1px solid rgba(0, 0, 0, .1);
    table{
        width: 100%;
    }
    table > tr{
        height: 60px;
    }
    table > tr > td{
        p{
            margin : 0;
        }
        label{
            font-size: 15px;
        }
        &:nth-child(1){
            width: 30%;
            text-align: right;
            padding-right: 20px;
            font-weight: bold;
        }
        &:nth-child(2){
            width: 70%;
        }
        textarea{
            width : 70%;
            height : 50px;
            resize: none;
        }
        #submitButton{
            color : white;
            border-radius: 4px;
            background: rgba(0, 149, 246, 0.25);
            margin-top : 70px;
            width: 60px;
            height : 30px;
            border : none;
            font-size : 15px;
        }
    }
`;

// 입력을 위한 input Component입니다.
const MyInput = styled.input `
    width : 70%;
    height : 20px;
`;

// p 태그 Component입니다.
const P1 = styled.p `
    font-size: 16px;
    padding-top: 5px;
    padding-bottom: 5px;
    color: #0095F6;
`;

const P2 = styled.p `
    color: #8E8E8E;
    font-size: 13px;
`;

// 이미지 태그 Component입니다.
const Img = styled.img `
    width : 40px;
    height : 40px;
    border-radius : 50%;
`;

// 이미지 변경 File input 태그 Component입니다.
const FileInput = styled.input `
    display: none;
`;

const FileInputLabel = styled.label `
    color: #0095F6;
    border-radius: 4px;
    cursor: pointer;
`;

// EditProfile 컴포넌트입니다. (메인)
function EditProfile() {

    // state를 관리하는 선언 부분
    const navigate = useNavigate();
    const {userInfo, updateUserInfo} = useContext(UserInfoContext);

    // 기존 데이터를 가져와서 수정을 위한 데이터로 초기화
    const [newData, setNewData] = useState(userInfo);
    const [isDataChanged, setIsDataChanged] = useState(false);

    // 전송을 위한 핸들러입니다.
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // 2. 수정된 데이터(newData)를 Context를 통해 업데이트
        updateUserInfo(newData);
        navigate('/');
        alert("수정 되었습니다.");
    };

    // 입력 변경 시 반영하는 핸들러입니다.
    const handleInputChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        setNewData({
            ...newData,
            [fieldName]: fieldValue
        });
        setIsDataChanged(true);

        // 입력값이 변경되면 버튼 스타일 변경
        if (isDataChanged) {
            let button = document.getElementById("submitButton");
            button.style.backgroundColor = "#2E9AFE";
        } else {
            let button = document.getElementById("submitButton");
            button.style.backgroundColor = "rgba(0, 149, 246, 0.25)";
        }
    };

    // 파일을 변경하는 핸들러입니다.
    const handleFileChange = (e) => {
        // const file = e.target.files[0]; 파일 관련 작업 수행
    };

    return (
        <Body>
            <SectionMain>
                {/* 사이드 바 영역 */}
                <SideBar>
                    {/* 첫 번째 Row */}
                    <Row1>
                        <Data id="Data1">
                            <p>프로필 편집</p>
                        </Data>
                        <Data>
                            <p>비밀번호 변경</p>
                        </Data>
                    </Row1>

                    {/* 두 번째 Row */}
                    <Row2>
                        <div>
                            <img src={meta} alt=""></img>
                            <P1>Accounts center</P1>
                            <P2>Control settings for connected experiences on Instagram, the Facebook app,
                                and Messenger, including sharing stories and posts, and logging in.</P2>
                        </div>
                    </Row2>
                </SideBar>

                {/* 데이터를 수정하는 영역 */}
                <EditContent>
                    <form onSubmit={handleFormSubmit}>
                        <table>
                            <tr>
                                <td>
                                    {/* 사용자 사진 */}
                                    <Img src={KKI_Sticker}></Img>
                                </td>
                                <td>
                                    {/* 사용자 이름 */}
                                    <p>{userInfo.name}</p>

                                    {/* 사용자 프로필 변경 */}
                                    <FileInputLabel htmlFor="fileTitle">프로필사진 바꾸기</FileInputLabel>
                                    <FileInput type="file" id="fileTitle" onChange={handleFileChange}/>
                                </td>
                            </tr>

                            {/* 사용자 이름 변경 영역 */}
                            <tr>
                                <td>
                                    <label>사용자 이름</label>
                                </td>
                                <td>
                                    <MyInput
                                        type="text"
                                        name="name"
                                        value={newData.name}
                                        onChange={handleInputChange}></MyInput>
                                </td>
                            </tr>

                            {/* 사용자 소개 변경 영역 */}
                            <tr>
                                <td>
                                    <label>소개</label>
                                </td>
                                <td>
                                    <textarea
                                        name="introduction"
                                        value={newData.introduction}
                                        onChange={handleInputChange}></textarea>
                                </td>
                            </tr>

                            {/* 사용자 웹사이트 변경 영역 */}
                            <tr>
                                <td>
                                    <label>웹사이트</label>
                                </td>
                                <td>
                                    <MyInput
                                        type="text"
                                        name="website"
                                        value={newData.website}
                                        onChange={handleInputChange}></MyInput>
                                </td>
                            </tr>

                            {/* 사용자 이메일 변경 영역 */}
                            <tr>
                                <td>
                                    <label>이메일</label>
                                </td>
                                <td>
                                    <MyInput
                                        type="text"
                                        name="email"
                                        value={newData.email}
                                        onChange={handleInputChange}></MyInput>
                                </td>
                            </tr>

                            {/* 사용자 성별 변경 영역 */}
                            <tr>
                                <td>
                                    <label>성별</label>
                                </td>
                                <td>
                                    <MyInput
                                        type="text"
                                        name="gender"
                                        value={newData.gender}
                                        onChange={handleInputChange}></MyInput>
                                </td>
                            </tr>

                            {/* 수정 사항 전송 버튼 영역 */}
                            <tr>
                                <td></td>
                                <td>
                                    <input type="submit" value="제출" id="submitButton"></input>
                                </td>
                            </tr>
                        </table>
                    </form>
                </EditContent>
            </SectionMain>
        </Body>
    );
}

export default EditProfile;
