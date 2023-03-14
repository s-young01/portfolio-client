// 액션 타입
const SET_LOGIN = 'SET_LOGIN';
const SET_LOGOUT = 'SET_LOGOUT';
const SET_USERID = 'SET_USERID';

// 액션 생성 함수
export const setLogin = () => ({ type: SET_LOGIN });
export const setLogout = () => ({ type: SET_LOGOUT });
export const setId = (id) => ({ type: SET_USERID, id: id });

// 초기값
const initialState = {
    isLogin: false,
    updateId: ''
}

// 리듀서 함수
export default function loginCheck(state=initialState, action) {
    switch(action.type) {
        case SET_LOGIN:
            return {
                ...state,
                isLogin: true
            };
        case SET_LOGOUT:
            return {
                ...state,
                isLogin: false
            };
        case SET_USERID:
            return {
                ...state,
                updateId: action.id
            };
        default:
            return state;
    }
}