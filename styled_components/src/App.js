import logo from './logo.svg';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #ffcc33;
  width : 100px;
  height : 50px;
  font-size : 15px;
`;

function App() {
  return (
    <div>
      <Button>안녕하세요</Button>
    </div>
  );
}



export default App;
