import styled from 'styled-components';
import useMediaQuery from 'react-responsive';

const Wrapper = styled.div `
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

function MyMediaQuery(){

    const isDesktopOrLaptop = useMediaQuery({query: '(min-device-width : 1224px)'});

    const isTrabletOrMobile = useMediaQuery({query: '(max-width : 1224px)'});

    return (
        // <Wrapper>
        //     <h1>hello world</h1>
        //     <p>This is a paragraph.</p>
        // </Wrapper>

        <div>
            {isDesktopOrLaptop && (
                <p>You are a desktop or laptop</p>
            )}
            {isTrabletOrMobile && (
                <p>You are a tablet or mobile phone</p>
            )}
        </div>
    );

}

export default MyMediaQuery;