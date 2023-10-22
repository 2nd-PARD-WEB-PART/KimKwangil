import "./Form.css";
function Form() {
    return (
        <div id = "div1">
            <form>
                <label>Name:</label>
                <input type="text"></input>
                <br></br>
                <label>Email:</label>
                <input type="text"></input>
                <br></br>
                <label>Message:</label>
                <textarea></textarea>
                <br></br>
                <input type = "submit" value = "Submit"></input>
            </form>
        </div>
    );
}

export default Form;