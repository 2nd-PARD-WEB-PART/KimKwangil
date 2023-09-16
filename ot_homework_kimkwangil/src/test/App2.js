import './App2.css';

function App2() {
    return (
        <form className = "form-container">
            <div className = "div-sentence">
                <p>Name: </p>
                <input type = "text"></input>
            </div>
            <div>
                <p>Email:</p>
                <input type = "text"></input>
            </div>
            <div>
                <p>Message:</p>
                <p><textarea cols="50" rows="10"></textarea></p>
            </div>
            <div>
                <button type = "submit">submit</button>
            </div>
        </form>
    );
}


export default App2;