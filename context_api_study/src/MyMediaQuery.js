import styled from 'styled-components';


const Wrapper = styled.div`
    background-color: #fff;
    color :#000;
    font-size : 14px;

    @media (min-width : 768px){
        font-size : 16px;
        color : red;
    }

    @media (min-width : 1000px) {
        font-size : 18px;  
        color : blue;      
    }
`;

function MyMediaQuery() {
    
    return (
        <Wrapper>
            <h1>hello world</h1>
            <p>This is a paragraph.</p>
        </Wrapper>
    );

}

export default MyMediaQuery;