import React from 'react';
import { useMediaQuery } from 'react-responsive';

// const 변수명 = useMediaQuery({
//     query: "(최소:or최대-width : px)"
// });

// // exmaple
// const isPc = useMediaQuery({
//     query: "(min-width : 1024px) and (max-width : 1920px)"
// });

const MyuseMediaQuery = () => {
    const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width : 1224px)"
    });
    const isTabletorMobile = useMediaQuery({
    query: "(max-width : 1224px)"
    });
    
    return (
        <div>
            {isDesktopOrLaptop && (
                <p>You are a desktop or laptop</p>
            )}
            {isTabletorMobile && (
                <p>You are a table or mobile phone</p>
            )}
        </div>
    );
}

export default MyuseMediaQuery;