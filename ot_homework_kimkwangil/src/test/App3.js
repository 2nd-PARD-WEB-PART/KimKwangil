import {useState} from 'react';
import './App3.css';

function App3() {

    // state를 위한 변수 선언
    const [data, setData] = useState("A"); // useState()의 파라미터값은 data의 초기값을 설정해준다.

    // event 발생 변수
    const changeHandler = (event) => {
        setData(event.target.value);
    }

    // 경고창 출력
    const openAlert = () => {
        alert(data);
    }

    return (
        <div className="div1">
            <input type="text" placeholder='아무거나 입력하세요' value={data} onChange={changeHandler}></input>
            <button type="button" onClick={openAlert}>Display Alert</button>
        </div>
    );
}

export default App3;