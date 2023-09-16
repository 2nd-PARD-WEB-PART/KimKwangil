import {useState} from 'react';
import './App4.css';

function App4() {

    // state를 위한 변수 선언
    const [title, setData] = useState(""); // useState()의 파라미터값은 data의 초기값을 설정해준다.

    // event 발생 변수
    const changeHandler = (event) => {
        setData(event.target.value);
    }

    // 경고창 출력
    const changeTitle = (event) => {
        event.preventDefault();
        document.title = title;
    }

    return (
        <form className="div1" onSubmit={changeTitle}>
            <input
                type="text"
                placeholder='아무거나 입력하세요'
                value={title}
                onChange={(e) => setData(e.target.value)}></input>
            <input
                type="text"
                placeholder='아무거나 입력하세요'
                value={title}
                onChange={changeHandler}></input>
            <button type="submit">submit</button>
        </form>
    );
}

export default App4;