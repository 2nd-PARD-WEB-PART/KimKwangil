import React, {useState} from 'react';

import "./Event.css";
function Event() {

    const [inputValue, setInputValue] = useState('');
    const handleInputChage = (event) => {
        setInputValue(event.target.value);
    }
    const handleButtonClick = () => {
        alert(inputValue);
    }


    return (

        <div>
            <input type="text" value={inputValue} onChange={handleInputChage}></input>
            <input type="button" value = "button" onClick={handleButtonClick}></input>
        </div>
    );
}

export default Event;