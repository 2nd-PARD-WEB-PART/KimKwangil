import axios from "axios";

import React, {useEffect, useState, createContext} from 'react';
import {Route, Routes} from 'react-router-dom';
import MyPage from './MyPage';
import Home from './Home';
import EditProfile from './EditProfile';
import Layout from './Layout';
import Content from './Home';

// Context 생성
export const UserInfoContext = createContext();
// export 키워드를 추가하여 다른 파일에서도 해당 context를 사용할 수 있도록 한다.

function App() {
    const [data, setData] = useState();
    useEffect(() => {
        axios
            .get("http://3.35.236.83/pard/search/김광일")
            .then((response) => {
                console.log("response: " + JSON.stringify(response.data.data));
                setData(response.data.data);
                setUserInfo((prevUserInfo) => ({
                    
                    name: response.data.data.name,
                    age: response.data.data.age,
                    part: response.data.data.part,
                    imgURL: response.data.data.imgURL
                }));
            })
            .catch((error) => console.log("error: " + error));
    }, []);
    // 초기 유저 정보
    const initialUserInfo = {
        name: "",
        age: "",
        part: "",
        imgURL : ""
        // name: "Pang._.il", introduction: "안녕하세요. 웹파트장입니다. 반갑습니다!", website:
        // "https://www.naver.com", email: "pangil@naver.com", gender: "Male"
    };

    // App 컴포넌트의 상태로 유저 정보를 관리
    const [userInfo, setUserInfo] = useState(initialUserInfo);

    // 유저 정보를 수정하는 함수
    const updateUserInfo = (newUserInfo) => {
        setUserInfo(newUserInfo);
    };

    return (
        // 2. Provider로 상태를 제공
        <UserInfoContext.Provider
            value={{
                userInfo,
                updateUserInfo
            }}>
            <Routes>
                <Route path="/" element={<Layout />}>

                    {/* 각 element에 있어서 props로 값을 넘겨주지 않아도 된다. */}
                    <Route index="index" element={<Home />}/>
                    <Route path="/MyPage" element={<MyPage />}/>
                    <Route path="/EditProfile" element={<EditProfile />}/>
                    <Route path="/Content" element={<Content />}/>
                </Route>
            </Routes>
        </UserInfoContext.Provider>
    );
}

export default App;
