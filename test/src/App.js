import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Articles from './pages/Articles';
import Article from './pages/Article';
import {Route, Routes} from 'react-router-dom';
import Layout from './Layout';
import { useState } from 'react';
import MyPage from './pages/Mypage';
import Login from './pages/Login';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index="index" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/profiles/:username" element={<Profile />}/>
                <Route path="/articles" element={<Articles />}>
                    <Route path=":id" element={<Article/>}/>
                </Route>
                <Route
                    path="/mypage" element={<MyPage isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} />}/>
            </Route>
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />}/>
        </Routes>
    );
}

export default App;
