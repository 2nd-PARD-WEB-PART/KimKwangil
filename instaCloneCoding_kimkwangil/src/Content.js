import styled from "styled-components";
import KKI_Sticker from './img/KKI_Sticker.png';
import Content1 from './img/content1.png';
import More from './img/Icons/More.png';

const SectionMain = styled.div `
    width: 935px;
    height : 880px;
    margin: 0 auto;
    /* background: var(--Dark-white, #FAFAFA); */
    *{
        padding : 0;
        margin: 0;
    }
`;
const SectionFirst = styled.div `
    height : 100px;
    text-align: right;
`;

const SectionFristData = styled.div `
    padding-top: 20px;
    text-align: left;
    display: inline-block;
    width : 35%;
    height : 100%;
    img{
        width :  15%;
        float : left;
        margin-right: 30px;
    }
    p{
        padding-top: 10px;
    }
`;

const SectionSecondData = styled.div `
    width: 60vh;
    height : 80vh;
    
    border: 1px solid rgba(0, 0, 0, .1);


    header{
        height: 7%;
        display: flex;
        align-items: center;
        
        img{
            width: 8%;
            border-radius: 50%;
            margin-right: 5%;
            margin-left : 2%;
        }
        span{
            font-weight: bold;
        }

        div {
            text-align: right;
            width : 100%;
        }
        div > img{
            width : 20px;
        }
    }
    body{
        height : 70%;

        img{
            width: 100%;
            height: 100%;
        }

    }

`;

function Content() {
    return (
        <SectionMain>
            <SectionFirst>
                <SectionFristData>
                    <img src={KKI_Sticker}></img>
                    <p>
                        <strong>pard_web</strong>
                    </p>
                </SectionFristData>

            </SectionFirst>
            <SectionSecondData>
                <header>
                    <img src={KKI_Sticker}></img>
                    <span>handsomeguy</span>
                    <div>
                        <img src={More}></img>
                    </div>
                </header>
                <body>
                    <img src={Content1}></img>
                </body>
            </SectionSecondData>
        </SectionMain>
    );

}

export default Content;
