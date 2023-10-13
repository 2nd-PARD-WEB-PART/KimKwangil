import {Route, Routes} from 'react-router-dom';

import MyPage from './MyPage';
import Profile from './Profile'
import EditProfile from './EditProfile';
import Layout from './Layout';
import Content from './Content';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index="index" element={<MyPage />}/>
                <Route path="/Profile" element={<Profile />}/>
                <Route path="/EditProfile" element={<EditProfile />}/>
                <Route path="/Content" element={<Content />}/>
            </Route>
        </Routes>
    );

}

export default App;
