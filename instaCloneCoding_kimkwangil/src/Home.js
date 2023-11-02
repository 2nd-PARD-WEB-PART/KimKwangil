import React, {useContext, useState} from "react";
import styled from "styled-components";
import KkiSticker from './img/KKI_Sticker.png';
import FullHeart from './img/Icons/fullLike.png';
import EmptyHeart from './img/Icons/ActivityFeed.png';
import Content1 from './img/content1.png';
import More from './img/Icons/More.png';
import SharePosts from './img/Icons/SharePosts.png';
import Comment from './img/Icons/Comment.png';
import Save from './img/Icons/Save.png';
import Emoji from './img/Icons/Emoji.png';
import {Link} from "react-router-dom";
import {UserInfoContext} from "./App"; // App.js에서 생성한 Context를 가져옵니다.

// 메인 section conponent입니다.
const SectionMain = styled.div `
    margin: 0 auto;
    *{
        padding : 0;
        margin: 0;
    }
    @media (min-width: 750px) {
        width: 935px;
        height : 880px;        
    }
    @media (max-width :750px) and (min-width: 450px){
        width: 500px;
        height : 800px;
    }
    @media (max-width :450px){
        width : 350px;
    }
    
`;

// 첫 번째 section conponent입니다.
const SectionFirst = styled.div `
    text-align: right;
    @media (min-width: 750px) {
        height : 100px;
    }
    @media (max-width :750px) and (min-width: 450px){
        display: none;
    }
    @media (max-width :450px){
        display: none;
    }
`;

// 두 번째 section conponent입니다.
const SectionFristData = styled.div `

    @media (min-width: 750px) {
        text-align: left;
        padding-top: 20px;
        display: inline-block;
        width : 35%;
        height : 100%;
        img{
            width :  15%;
            float : left;
            margin-right: 30px;
            border-radius: 50%;
        }
        p{
            padding-top: 10px;
        }
    }
    @media (max-width :750px) and (min-width: 450px){
    }
    @media (max-width :450px){
    }

`;

// 두 번째 section conponent입니다.
const SectionSecond = styled.div `
    border: 1px solid rgba(0, 0, 0, .1);
    width: 500px;
    
    header{
        display: flex;
        align-items: center;
        img{
            box-sizing: border-box;
            border-radius: 50%;
            margin-right: 5%;
            margin-left : 2%;
            margin-bottom: 5px;
        }
        span{
            font-weight: bold;
        }
        div {
            text-align: right;
            width : 100%;
        }
        div > img{
            width : 20px;
        }
    }
    body{
        height : 70%;

        img{
            width: 100%;
            height: 100%;
        }

    }
    @media (min-width: 750px) {
        header{
            height: 7%;
            img{
                width: 8%;
            } 
        }
    }
    @media (max-width :750px) and (min-width: 450px){
        margin-top: 50px;
        header{
            height : 5%;
            img{
                width : 8%;
            }
        }
    }
    @media (max-width :450px){
        margin-top: 20px;
        width: 350px;
        span{
            font-size : 10px;
        }
        header{
            height: 5%;
            img{
                width : 8%;
            }
        }
    }

`;

// 사용자의 액션을 담당하는 conponent입니다.
const UserAction = styled.div `
    width: 100%;
    height : 40px;
    padding : 10px;
    padding-left: 20px;
    box-sizing: border-box;
    display: flex;

    Img{
        padding-right : 20px;
    }
    div{
        width : 100%;
        text-align: right;
    }

    @media (min-width: 750px) {
    }
    @media (max-width :750px) and (min-width: 450px){
    }
    @media (max-width :450px){
        Img{
            padding-right: 10px;
        }
    }

`;

// 게시물의 댓글이 달리는 conponent입니다.
const MyComment = styled.div `
    width: 100%;
    border-bottom :  1px solid rgba(0, 0, 0, .1);
    padding : 10px;
    padding-left: 20px;
    box-sizing: border-box;
    li{
        list-style: none;
        margin: 10px 0;

        span{
            margin-right: 20px;
        }
        div {

            float: right;
            /* display: flex; */
            /* justify-content: end; */
            margin : 0;
            padding : 0;
            margin-right: 20px;
        }
    }

    @media (max-width :750px) and (min-width: 450px){
    }
    @media (max-width :450px){
        padding : 0;
        padding-left: 20px;
        padding-bottom: 10px;
        p{
            font-size: 5px;
        }
        ul > li{
            font-size : 13px;
        }
    }

`;

// 게시물의 댓글을 입력하는 conponent입니다.
const InputComment = styled.div `
    width : 100%;
    height : 50px;
    padding : 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;

    img{
        padding-left: 5px;
        padding-right: 30px;
    }
    div{
        width : 70%;
        padding : 5px;
        input{
            display: flex;
            padding : 0;
            width: 100%;
            border : none;
            outline: none;
            font-size: 1rem;
            font-weight: bold;
            
            &::placeholder {

                color : black;
            }
        }
    }

    #div1{
        width: 10%;
        text-align: right;
        button{
            border: 0;
            color : #0095F6;
            font-weight: bold;


            &:active{
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            }
        }
    }

    @media (max-width :750px) and (min-width: 450px){
    }
    @media (max-width :450px){
        height : 30px;
        img{
            width: 15px;
        }
        div > input{
            font-size : 13px;
        }
    }
`;

// Img를 관리하는 conponent입니다.
const Img = styled.img `
    width :20px;
    height : 20px;

    @media (max-width :450px){
        width: 15px;
        height : 15px;
    }
`;

// click 여부에 대한 데이터를 저장하는 변수입니다.
let click = 1;

// return되는 Content conponent입니다.
function Content() {

    // 1. App.js에서 제공한 Context를 가져옵니다.
    const {userInfo} = useContext(UserInfoContext);
    const [newData] = useState(userInfo);

    // state를 관리하는 부분입니다. const [newData, setNewData] = useState(props.myData);
    const [heartnum, setHeartnum] = useState(1069);
    const [isActive, setIsActive] = useState(true);
    const [comment, setComment] = useState(""); // 댓글 내용을 저장할 상태
    const [comments, setComments] = useState([]); // 댓글 목록을 저장할 상태

    // hander를 관리하는 부분입니다. click 여부를 판단하고 좋아요 개수를 변경해주는 핸들러입니다.
    const compareClick = () => {
        click = click * -1;
        if (click === -1) {

            increaseData();
            setIsActive(false);
        } else {
            decreaseData();
            setIsActive(true)
        }

    };

    // 좋아요 개수를 증가시켜주는 핸들러입니다.
    const increaseData = () => {
        setHeartnum(heartnum + 1);
    };

    // 좋아요 개수를 감소시켜주는 핸들러입니다.
    const decreaseData = () => {
        setHeartnum(heartnum - 1);
    };

    // 댓글의 내용이 변경되는지를 판단하는 핸들러입니다.
    const handleCommentChange = (event) => {
        setComment(event.target.value); // 댓글 입력값을 상태에 저장
    };

    // 댓글이 추가되는 핸들러입니다.
    const handlePostComment = () => {
        if (comment.trim() !== "") {
            // 입력된 댓글이 비어 있지 않다면
            setComments([
                ...comments,
                comment
            ]); // 기존 댓글 목록에 새로운 댓글을 추가
            setComment(""); // 입력 필드를 초기화
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            // Enter 키를 눌렀을 때 버튼을 클릭합니다.
            e.preventDefault(); // 이벤트 기본 동작을 막아 엔터가 입력되지 않도록 합니다.
            const button = document.getElementById('myButton'); // 버튼을 ref 대신 ID로 찾습니다.
            if (button) {
                button.click(); // 버튼을 클릭합니다.
            }
        }
    };

    // 댓글별 좋아요에 대한 상태를 저장하는 state입니다.
    const [commentHearts, setCommentHearts] = useState(
        new Array(comments.length).fill(false)
    );

    // 댓글의 heart 버튼을 눌렀을 때 발생하는 핸들러입니다.
    const handleCommentHeartClick = (index) => {
        const updatedCommentHearts = [...commentHearts];
        updatedCommentHearts[index] = !updatedCommentHearts[index];
        setCommentHearts(updatedCommentHearts);
    };

    return (
        <div>
            {/* 전체 main section을 가리킵니다. (desktop 버전에만 보여집니다.)*/}
            <SectionMain>
                {/* 첫 번째 section을 가리킵니다. (사용자 프로필을 비롯한 우측 상단) */}
                <SectionFirst>
                    <SectionFristData>
                        <Link to="../MyPage">
                            {/* 사용자의 프로필 이미지*/}
                            <img src={KkiSticker} alt=""></img>
                        </Link>
                        <p>
                            {/* 사용자의 이름*/}
                            <strong>{newData.name}</strong>
                        </p>
                    </SectionFristData>
                </SectionFirst>

                {/* 두 번째 section을 가리킵니다. (피드가 보여지는 곳) */}
                <SectionSecond>
                    {/* 게시자의 프로필을 한 줄로 보여줍니다.*/}
                    <header>
                        {/* 게시자의 프로필*/}
                        <img src={KkiSticker} alt=""></img>
                        {/* 게시자의 이름 */}
                        <span>handsomeguy</span>
                        <div>
                            {/* 더보기 이미지*/}
                            <img src={More} alt=""></img>
                        </div>
                    </header>
                    {/*피드의 사진이 보여집니다.*/}
                    <body>
                        <img src={Content1} alt=""></img>
                    </body>

                    {/* 좋아요, 댓글, 전송하기 등의 액션을 담당하는 section입니다.*/}
                    <UserAction>
                        <Img
                            src={!isActive
                                ? FullHeart
                                : EmptyHeart}
                            alt=""
                            onClick={compareClick}></Img>
                        <Img src={Comment}></Img>
                        <Img src={SharePosts}></Img>
                        <div>
                            <Img src={Save}></Img>
                        </div>
                    </UserAction>

                    {/* 달린 댓글을 관리하는 section입니다.*/}
                    <MyComment>
                        {/* 좋아요 개수 */}
                        <p>좋아요 {heartnum}개</p>
                        {/* 댓글을 보여주는 ul */}
                        <div>
                            <ul>
                                {
                                    comments.map((comment, index) => (
                                        <li key={index} id="li1">
                                            <span>
                                                <strong>{newData.name}</strong>
                                            </span>
                                            {comment}
                                            <div>
                                                <Img
                                                    src={commentHearts[index]
                                                        ? FullHeart
                                                        : EmptyHeart}
                                                    alt=""
                                                    onClick={() => handleCommentHeartClick(index)}/>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </MyComment>

                    {/* 댓글을 입력하는 section입니다. */}
                    <InputComment>
                        {/* 이모지 이미지  */}
                        <img src={Emoji} alt=""></img>
                        {/* 댓글을 입력하는 input*/}
                        <div>
                            <input
                                type="text"
                                placeholder="댓글 달기..."
                                value={comment}
                                onChange={handleCommentChange}
                                onKeyPress={handleKeyPress}></input>
                        </div>
                        {/* 게시 버튼  */}
                        <div id="div1">
                            <button id="myButton" onClick={handlePostComment}>게시</button>
                        </div>
                    </InputComment>
                </SectionSecond>
            </SectionMain>
        </div>
    );

}

export default Content;