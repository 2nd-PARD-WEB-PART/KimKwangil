
import styled from 'styled-components';

const Button = styled.button`
  /* background-color: black; */
  background-color: ${props => props.color || 'blue'};
  width : 500px;
  height : 200px;
  font-size : 40px;
  color : white;
  &:hover{
    color : blue;
  }
    border : none;
  &:active{
    background-color: blue;
    color : white;

  }
`;

export default Button;
