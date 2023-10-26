import {useState} from "react";
import styled from "styled-components";
import meta from './img/meta.svg';
import KKI_Sticker from './img/KKI_Sticker.png';
import { useNavigate } from 'react-router-dom';
const Body = styled.div `
    width: 100%;
    height : 95vh;
    box-sizing: border-box;
    `;
const SectionMain = styled.div `
    width: 935px;
    margin: 30px auto;
    height : 647px;
    display: flex;
    border: 1px solid rgba(0, 0, 0, .1);
`;

const SideBar = styled.div `
    width : 25%;
    display: flex;
    flex-direction: column;
`;

const Row1 = styled.div `
    width: 100%;
    height : 70%;
    #Data1{
        border-left: 3px solid black;
    }
        
`;

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

const MyInput = styled.input `
    width : 70%;
    height : 20px;
`;

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

const Img = styled.img `
width : 40px;
height : 40px;
    border-radius : 50%;
`;

const FileInput = styled.input`
  display: none; /* 숨길 수 있도록 설정 */
`;

const FileInputLabel = styled.label`

    color: #0095F6;
    border-radius: 4px;
    cursor: pointer;
`;

function EditProfile(props) {
    const navigate = useNavigate();
    const { myData, onUserDataChange } = props;
    const [newData, setNewData] = useState(myData);
    const Fixedname = myData.name;
    const [isDataChanged, setIsDataChanged] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // 여기서 수정된 데이터(newData)를 부모 컴포넌트에 전달
        onUserDataChange(newData);
        navigate('/');
        alert("수정 되었습니다.");
    };

    const handleInputChange = (e) => {
        const fieldName = e.target.name; // input 요소의 name 속성을 가져옴
        const fieldValue = e.target.value;
        // setNewData({ ...newData, email: e.target.value }); // 예시로 name 필드만 업데이트
        setNewData({ ...newData, [fieldName]: fieldValue });
        // setIsDataChanged(true); // 입력값이 변경되면 상태를 true로 설정
            if (myData !=newData) {
                let button = document.getElementById("submitButton");
                button.style.backgroundColor = "#2E9AFE";
            } else {
                let button = document.getElementById("submitButton");
                button.style.backgroundColor = "rgba(0, 149, 246, 0.25)";
        }
    };
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        // 파일 관련 작업 수행
    };

    return (
        <Body>
            <SectionMain>
                <SideBar>
                    <Row1>
                        <Data id = "Data1">
                            <p>프로필 편집</p>
                        </Data>
                        <Data>
                            <p>비밀번호 변경</p>

                        </Data>
                    </Row1>
                    <Row2>
                        <div>
                            <img src={meta} alt=""></img>
                            <P1>Accounts center</P1>
                            <P2>Control settings for connected experiences on Instagram, the Facebook app,
                                and Messenger, including sharing stories and posts, and logging in.</P2>
                        </div>
                    </Row2>
                </SideBar>
                <EditContent>
                    <form onSubmit={handleFormSubmit}>
                    <table>
                        <tr>
                            <td>
                                <Img src={KKI_Sticker}></Img>
                            </td>
                            <td>
                                <p>{Fixedname}</p>
                                    {/* <input type="file" id="fileTitle"></input> */}
                                <FileInputLabel htmlFor="fileTitle">프로필사진 바꾸기</FileInputLabel>
                                <FileInput
                                type="file"
                                id="fileTitle"
                                onChange={handleFileChange}
                                />
                                        
                                
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>사용자 이름</label>
                            </td>
                            <td>
                                <MyInput
                                        type="text"
                                        name = "name"
                                    value={newData.name}
                                    onChange={handleInputChange}
                                ></MyInput>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>소개</label>
                            </td>
                            <td>
                                <textarea name = "introduction" value={newData.introduction} onChange={handleInputChange} ></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>웹사이트</label>
                            </td>
                            <td>
                                <MyInput type="text" name = "website"  value={newData.website}onChange={handleInputChange} ></MyInput>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>이메일</label>
                            </td>
                            <td>
                                <MyInput type="text" name = "email"  value={newData.email} onChange={handleInputChange} ></MyInput>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>성별</label>
                            </td>
                            <td>
                                <MyInput type="text" name = "gender" value={newData.gender} onChange={handleInputChange}></MyInput>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <input type = "submit" value = "제출" id = "submitButton"></input>
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
