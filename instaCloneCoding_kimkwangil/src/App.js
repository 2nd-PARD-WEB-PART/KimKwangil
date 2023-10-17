import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MyPage from './MyPage';
import Profile from './Profile';
import EditProfile from './EditProfile';
import Layout from './Layout';
import Content from './Hoem';

function App() {
    // 초기 유저 정보
    const initialUserInfo = {
        name: "Pang._.il",
        introduction: "안녕하세요. 웹파트장입니다. 반갑습니다!",
        website: "https://www.naver.com",
        email: "pangil@naver.com",
        gender: "Male"
    };

    // App 컴포넌트의 상태로 유저 정보를 관리
    const [userInfo, setUserInfo] = useState(initialUserInfo);

    // 유저 정보를 수정하는 함수
    const updateUserInfo = (newUserInfo) => {
        setUserInfo(newUserInfo);
    };

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index="index" element={<MyPage myData={userInfo} />} />
                <Route path="/Profile" element={<Profile myData={userInfo} />} />
                <Route path="/EditProfile" element={<EditProfile myData={userInfo} onUserDataChange={updateUserInfo} />} />
                <Route path="/Content" element={<Content myData={userInfo} />} />
            </Route>
        </Routes>
    );
}

export default App;
