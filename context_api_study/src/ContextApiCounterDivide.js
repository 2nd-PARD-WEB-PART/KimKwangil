import {createContext, useContext, useState, useMemo} from "react";

const CounterValueContext = createContext();
const CounterActionsContext = createContext();

function ContexProviderDivider({ children }) {
    // counter
    const [counter, setCounter] = useState(1);
    
    // actions
    // 리렌저디링 시마다 함수를 새로 만드는 게 아니라 재사용할 수 있도록 useMemo 사용
    const actions = useMemo(() => ({
        increase() {
            setCounter((prev) => prev + 1);
        },
        decrease() {
            setCounter((prev) => prev - 1);
        }
    }), []);


    return (
        // 동작 안에 state가 있다고 생각하고 감싼다.
        <CounterActionsContext.Provider value={actions}>
            <CounterValueContext.Provider value={counter}>
                {children}
            </CounterValueContext.Provider>
        </CounterActionsContext.Provider>
    )
}

function ContextApiCounterDivide() {
    return (
        <ContexProviderDivider>
            <b>
                <p>하나의 state만 있는 경우 state 변수, set 함수를 통째로 value에 할당</p>
            </b>
            <div>
                <Value/>
                <Buttons/>
            </div>
        </ContexProviderDivider>
    );
}

function Value() {
    // useContext를 사용하여 CounterContext에서 현재 카운터 값을 가져와서 표시한다.
    // state를 선언하여 값을 읽어온다.
    const counter = useContext(CounterValueContext);
    return <h1>{counter}</h1>;
}

function Buttons() {
    // state를 선언하여 해당 Context의 action을 읽어온다.
    const actions = useContext(CounterActionsContext);
    return (
        <div>
            <button onClick={actions.increase}>+</button>
            <button onClick={actions.decrease}>-</button>
        </div>
    );
}

export default ContextApiCounterDivide;