import {createContext, useContext, useMemo, useState} from 'react';
import MyMediaQuery from './MyMediaQuery';
import ContextApi from './ContextApi';

const MyContext = createContext("");

// function getData() {     var data = prompt("데이터를 입력해주세요");     return data; }
function CounterProiver({children}) {
    // const counterState = useState(1); return <MyContext.Provider
    // value={counterState}>{children}</MyContext.Provider>
    const [counter, setCounter] = useState(1);

    const actions = useMemo(() => ({
        increase() {
            setCounter((prev) => prev + 1);
        },

        decrease() {
            setCounter((prev) => prev - 1);
        }
    }), []);

    const value = useMemo(() => [
        counter, actions
    ], [counter, actions]);

    return <MyContext.Provider value={value}>{children}</MyContext.Provider>
}
function App() {
    return (
        // <div>
        //     <MyContext.Provider value="변경된 값">
        //         <GrandParent/>
        //     </MyContext.Provider>
        //     <CounterProiver>
        //         <Exercise1/>

        //     </CounterProiver>
      // </div>
        //   <MyMediaQuery></MyMediaQuery>
        <ContextApi></ContextApi>
    )
}

const Exercise1 = () => {
    return (<div>
        <MyValue/>
        <MyButton/>
    </div>)
}
function MyValue() {
    const [counter] = useContext(MyContext);
    return <h1>{counter}</h1>;
}

function MyButton() {
    // const [, setCounter] = useContext(MyContext);
    // const increase = () => setCounter((prev) => prev + 100);
    // const decrease = () => setCounter((prev) => prev - 100);
    // return (
    //     <div>
    //         <button onClick={increase}>+</button>
    //         <button onClick={decrease}>-</button>
    //     </div>
    // )
    const [, myActions] = useContext(MyContext);
    return (
        <div>
            <button onClick={myActions.increase}>+</button>
            <button onClick={myActions.decrease}>-</button>
        </div>
    )
}

function GrandParent() {
    return <Parent/>
}
function Parent() {
    return <Child/>
}
function Child() {
    return <GrandChile/>
}
function GrandChile() {
    return <Message/>
}
function Message() {
    const value = useContext(MyContext);
    return <div>Received: {value}</div>;
}

export default App;
