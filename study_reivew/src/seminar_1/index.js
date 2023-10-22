import {Link} from "react-router-dom";

function Index() {
    return (
        <div>
            <p>세미나1 index 페이지입니다.</p>
            <Link to="../seminar_1/Button">실습 - 버튼</Link>
            <br></br>
            <Link to="../seminar_1/Form">실습 - Form</Link>
            <br/>
            <Link to="../seminar_1/DefaultProps">실습 - DefaultProps</Link>

            
        </div>
    );

}

export default Index;