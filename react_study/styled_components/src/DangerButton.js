
import styled from 'styled-components';

const DangerButton = styled.button`
  background-color: gray;
  width : 500px;
  height : 200px;
  font-size : 40px;
  &:hover{
    color : red;
  }
  border : none;
    &:active{
    background-color : red;
    color : white;

  }
`;

export default DangerButton;
