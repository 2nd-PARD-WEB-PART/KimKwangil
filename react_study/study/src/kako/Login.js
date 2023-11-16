import { KAKAO_AUTH_URL } from './OAuth';
function Login() {
    return (
        <button href={KAKAO_AUTH_URL}>카카오로 로그인하기</button>
    );
}

export default Login;