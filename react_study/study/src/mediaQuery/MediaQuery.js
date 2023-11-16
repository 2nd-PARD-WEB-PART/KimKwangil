import React from 'react';
import MediaQuery from 'react-responsive';

const MyMediaQuery = () => {

    return (
        <div>
            <MediaQuery minWidth={1224}>
                <p>You are a desktop or laptop</p>
            </MediaQuery>
            <MediaQuery maxWidth={1224}>
                <p>You are a table or mobile phone</p>
            </MediaQuery>
        </div>
    );
}

export default MyMediaQuery;