import {Routes, Route, BrowserRouter} from "react-router-dom";

import Main from "./Main";
import S1_index from "./seminar_1/index";
import S2_index from "./seminar_2/index";
import Button from "./seminar_1/Button"
import Form from "./seminar_1/Form"
import DefaultProps from "./seminar_1/DefaultProps"
import Event from "./seminar_1/Event"
function App() {
    return (
        <BrowserRouter>
            <Routes>x
                {/* 웹 서비스 소개 페이지 */}
                <Route path="/" element={<Main />}/> {/* <SignIn /> */}
                <Route path="/seminar_1" element={<S1_index />}/> {/* <LogIn /> */}
                <Route path="/seminar_2" element={<S2_index />}/> {/* <LogIn /> */}
                <Route path="/seminar_1/Button" element={<Button />}/> {/* <LogIn /> */}
                <Route path="/seminar_1/Form" element={<Form />}/> {/* <LogIn /> */}
                <Route path="/seminar_1/DefaultProps" element={<DefaultProps />}/> {/* <LogIn /> */}
                <Route path="/seminar_1/Event" element={<Event />}/> {/* <LogIn /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
