import React from "react";
import "./App2Answer.css";

function App2Answer() {
    return (
        <form className="form-container">
            <label className="form-label">Name:</label>
            <input className="form-input" type="type" name="name"/>

            <label className="form-label">Email:</label>
            <input className="form-input" type="email" name="eamil"/>

            <label className="form-label">Message:</label>
            <textarea className="form-textarea" name="message"></textarea>

            <button className="form-submit-button" type="submit">Submit</button>

            <Hello name = "kimkwangil"></Hello>
        </form>

    );
}

function Hello(props) {
    return <div>안녕하세요 {props.name}님</div>;
}


export default App2Answer;