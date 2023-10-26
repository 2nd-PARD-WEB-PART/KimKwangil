import React from "react";
import {useState} from "react";
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

const SectionMain = styled.div `
    width: 935px;
    height : 880px;
    margin: 0 auto;
    /* background: var(--Dark-white, #FAFAFA); */
    *{
        padding : 0;
        margin: 0;
    }
`;
const SectionFirst = styled.div `
    height : 100px;
    text-align: right;
`;

const SectionFristData = styled.div `
    padding-top: 20px;
    text-align: left;
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
`;

const Img = styled.img `
    width :20px;
    height : 20px;

`;

const SectionSecondData = styled.div `
    width: 70vh;
    /* height : 80vh; */
    
    border: 1px solid rgba(0, 0, 0, .1);


    header{
        height: 7%;
        display: flex;
        align-items: center;
        
        img{
            width: 8%;
            border-radius: 50%;
            margin-right: 5%;
            margin-left : 2%;
            margin-bottom: 5px;
            box-sizing: border-box;
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

`;

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
`;

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
            display: flex;
            justify-content: end;
            margin : 0;
            padding : 0;
        }
    }

`;

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
    

`;
let click = 1;
let click2 = 1;

function Content(props) {
    const [newData, setNewData] = useState(props.myData);
    const [heartnum, setHeartnum] = useState(1069);
    const [isActive, setIsActive] = useState(true);
    const [isActive2, setIsActive2] = useState(true);
    const [comment, setComment] = useState(""); // 댓글 내용을 저장할 상태
    const [comments, setComments] = useState([]); // 댓글 목록을 저장할 상태

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

    const compareClick2 = () => {
        click2 = click2 * -1;
        if (click2 === -1) {

            setIsActive2(false);
        } else {

            setIsActive2(true)
        }

    };

    const increaseData = () => {
        setHeartnum(heartnum + 1);
    };

    const decreaseData = () => {
        setHeartnum(heartnum - 1);
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value); // 댓글 입력값을 상태에 저장
    };

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

    const [commentHearts, setCommentHearts] = useState(new Array(comments.length).fill(false));

    const handleCommentHeartClick = (index) => {
        const updatedCommentHearts = [...commentHearts];
        updatedCommentHearts[index] = !updatedCommentHearts[index];
        setCommentHearts(updatedCommentHearts);
    };

    return (
        <SectionMain>
            <SectionFirst>
                <SectionFristData>
                    <Link to="../MyPage">
                        <img src={KkiSticker} alt=""></img>
                    </Link>
                    <p>
                        <strong>{newData.name}</strong>
                    </p>
                </SectionFristData>

            </SectionFirst>
            <SectionSecondData>
                <header>
                    <img src={KkiSticker} alt=""></img>
                    <span>handsomeguy</span>
                    <div>
                        <img src={More} alt=""></img>
                    </div>
                </header>
                <body>
                    <img src={Content1} alt=""></img>
                </body>
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
                <MyComment>
                    <p>좋아요 {heartnum}개</p>
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
                                            {/* <Img
                                                src={!isActive2
                                                    ? FullHeart
                                                    : EmptyHeart}
                                                alt=""
                                                onClick={compareClick2}></Img> */}
                                        <Img
                                            src={commentHearts[index] ? FullHeart : EmptyHeart}
                                            alt=""
                                            onClick={() => handleCommentHeartClick(index)}
                                        />
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </MyComment>
                <InputComment>
                    <img src={Emoji} alt=""></img>
                    <div>
                        <input
                            type="text"
                            placeholder="댓글 달기..."
                            value={comment}
                            onChange={handleCommentChange}
                            onKeyPress={handleKeyPress}></input>

                    </div>
                    <div id="div1">
                        <button id="myButton" onClick={handlePostComment}>게시</button>
                    </div>
                </InputComment>
            </SectionSecondData>

        </SectionMain>
    );

}

export default Content;
