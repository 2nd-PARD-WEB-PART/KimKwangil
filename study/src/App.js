import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("리액트는 재밌어!");
  }, [count]);

  return (
    <div>
      <p>입력하신 버튼 횟수는 {count} 입니다.</p>
      <button onClick = {() => setCount(count+1)}>Click</button>

    </div>
  );
}

export default App;
