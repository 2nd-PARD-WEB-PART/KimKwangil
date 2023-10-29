import {createContext, useContext, useState, useMemo} from "react";

const CounterContext = createContext();

function CounterProvider({children}) {
    const counterState = useState(1);
    // state의 초기값을 1로 설정 이를 CounterContext.Provider의 value prop으로 전달합니다.
    return <CounterContext.Provider value={counterState}>{children}</CounterContext.Provider>
}

function CounterProvider2({children}) {
    const [counter, setCounter] = useState(1);
    // 리렌저디링 시마다 함수를 새로 만드는 게 아니라 재사용할 수 있도록 useMemo 사용
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
    ]);
    // 이 코드는 React의 useMemo 훅을 사용하여 value 값을 최적화하고 성능을 향상시키는 목적으로 작성되었다. 이를 통해 매 렌더링
    // 시마다 동일한 계산을 반복하지 않고, 이전 결과를 재사용하여 성능을 향상시킬 수 있습니다.
    return <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
}

function ContextApiCounter() {
    // CounterProvider 컴포넌트를 렌더링
    return (
        // <CounterProvider>     <b>         <p>하나의 state만 있는 경우 state 변수, set 함수를 통째로
        // value에 할당</p>     </b>     <div>         <Value/>         <Buttons/> </div>
        // </CounterProvider>
        <CounterProvider2>
            <b>
                <p>하나의 state만 있는 경우 state 변수, set 함수를 통째로 value에 할당</p>
            </b>
            <div>
                <Value/>
                <Buttons2/>
            </div>
        </CounterProvider2>
    );
}

function Value() {
    // useContext를 사용하여 CounterContext에서 현재 카운터 값을 가져와서 표시한다.
    const [counter] = useContext(CounterContext);
    return <h1>{counter}</h1>;
}
function Buttons() {
    const [counter, setCounter] = useContext(CounterContext);
    // useContext를 사용하여 현재 카운터 값과 카운터 값을 업데이트할 수 있는 setCounter 함수를 가져온다.
    const increase = () => {

        //함수형 업데이트를 사용 함수명( (e) => e - 1 ) 와 같은 방식
        setCounter((prev) => prev + 2)
    };
    const decrease = () => {
        // if (counter <= 0) {     alert("[경고] zero error \n더 이상 삭제할 수 없습니다. (0 이상만
        // 가능)"); } else
        setCounter((prev) => prev - 1)
    };
    return (
        <div>
            <button onClick={increase}>+</button>
            <button onClick={decrease} disabled={counter <= 0}>-</button>
            {/* disabled을 사용하여 사용 불가의 조건을 걸고, 불가능하게 하는 기능 사용. */}
        </div>
    );
}

function Buttons2() {
    const [counter, actions] = useContext(CounterContext);

    return (
        <div>
            <button onClick={actions.increase}>+</button>
            <button onClick={actions.decrease} disabled={counter <= 0}>-</button>
        </div>
    )
}
export default ContextApiCounter;