import {Link} from "react-router-dom";
function Main() {
    return (
        <div>
            <p>메인 페이지입니다.</p>
            <Link to="./seminar_1">S1_index</Link>
            <br></br>
            <Link to="./seminar_2">S2_index</Link>

        </div>
    );

}

export default Main;