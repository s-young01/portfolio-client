import { Cookies } from "react-cookie";

const cookies = new Cookies();

// 쿠키 생성
export const setCookie = (name, value, options) => {
    return cookies.set(name, value, {...options});
}

// 쿠키 가져오기
export const getCookie = (name) => {
    return cookies.get(name);
}

// 쿠키 삭제
export const removeCookie = (name) => {
    return cookies.remove(name);
}