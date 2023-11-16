import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App';
import {BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import Media from './mediaQuery/Media';
import Media2 from './mediaQuery/Media2';
import Media3 from './mediaQuery/Media3';
import MyuseMediaQuery from './mediaQuery/useMediaQuery'
import MediaQuery from './mediaQuery/MediaQuery'

import Login from './kako/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        {/* <Media /> */}
        {/* <Media2 /> */}
        {/* <Media3 /> */}
        {/* <MyuseMediaQuery/> */}
        {/* <MediaQuery/> */}
        <Login></Login>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function to
// log results (for example: reportWebVitals(console.log)) or send to an
// analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
