import {createContext, useContext} from "react";
import styled from "styled-components";

const MyContext = createContext("초기값2");

const Mydiv = styled.div `
    margin: 10px;
    padding : 10px;
    box-sizing: border-box;
    background-color: burlywood;
    border-radius: 15px;


    h1{color : brown}
    #first {
        margin-bottom: 20px;
    }
`;

const Mydiv2 = styled.div `
    padding : 10px;
    box-sizing: border-box;
    background-color: white;
    border-radius : 15px;
`;

function ContextApi() {

    return (
        <Mydiv>
            <h1>MyContext 연습을 위한 페이지입니다.</h1>
            <Mydiv2 id = "first">
                <h2>1️⃣Provider을 사용한 경우</h2>
                <MyContext.Provider value="초기값">
                    {/* Provider : Context의 값을 설정할 때 */}
                    <p>MyContext.Privoider을 이용하여 value값을 "초기값"이라는 이름으로 설정하였습니다.</p>
                    <p>value =
                        <Message></Message>
                    </p>
                </MyContext.Provider>
            </Mydiv2>
            <Mydiv2>
                <h2>2️⃣Provider을 사용하지 않은 경우</h2>
                <div>
                    <p>createContext의 초기값 이용하여 value값을 "초기값2"이라는 이름으로 설정하였습니다.</p>
                    <p>value =
                        <Message></Message>
                    </p>
                </div>
            </Mydiv2>
        </Mydiv>
    );
}

function Message() {
    const value = useContext(MyContext); // useContext : Context값을 읽어들일 때
    return <span>{value}</span>
}
export default ContextApi;