const REST_API_KEY = "d412d83e9744db82c7479b094824afcc";
const REDIRECT_URI =  "http://localhost:3000/";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;