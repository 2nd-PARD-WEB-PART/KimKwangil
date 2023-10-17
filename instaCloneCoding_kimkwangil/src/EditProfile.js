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
function EditProfile(props) {
    const navigate = useNavigate();
    const { myData, onUserDataChange } = props;
    const [newData, setNewData] = useState(myData);
    const Fixedname = myData.name;

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // 여기서 수정된 데이터(newData)를 부모 컴포넌트에 전달
        onUserDataChange(newData);
        navigate('/');

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
                                <input type="file" id="fileTitle"></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>사용자 이름</label>
                            </td>
                            <td>
                                <MyInput type="text" value={newData.name} onChange={(e) => setNewData({ ...newData, name: e.target.value })} ></MyInput>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>소개</label>
                            </td>
                            <td>
                                <textarea value={newData.introduction} onChange={(e) => setNewData({ ...newData, introduction: e.target.value })} ></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>웹사이트</label>
                            </td>
                            <td>
                                <MyInput type="text" value={newData.website}onChange={(e) => setNewData({ ...newData, website: e.target.value })} ></MyInput>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>이메일</label>
                            </td>
                            <td>
                                <MyInput type="text" value={newData.email} onChange={(e) => setNewData({ ...newData, email: e.target.value })} ></MyInput>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>성별</label>
                            </td>
                            <td>
                                <MyInput type="text" value={newData.gender} onChange={(e) => setNewData({ ...newData, gender: e.target.value })}></MyInput>
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
