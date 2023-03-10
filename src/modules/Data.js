
// 액션 타입
// 데이터값 여러 개 받아올 때
const GET_DATAS = 'GET_DATAS';
const GET_DATAS_SUCCESS = 'GET_DATAS_SUCCESS';
const GET_DATAS_ERROR = 'GET_DATAS_ERROR';
// 데이터값 하나 받아올 때
const GET_DATA = 'GET_DATA';
const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
const GET_DATA_ERROR = 'GET_DATA_ERROR';

// 초기값
const initialState = {
    posts: {
        loading: false,
        data: null,
        error: null
    },
    post: {
        loading: false,
        data: null,
        error: null
    }
}

// 미들웨어
export const getDatas = callback => async dispatch => {
    dispatch({ type: GET_DATAS});
    try {
        const response = await callback();
        const data = response.data;
        dispatch({ type: GET_DATAS_SUCCESS, data: data });
    }
    catch(e) {
        dispatch({ type: GET_DATAS_ERROR });
    }
}
export const getData = callback => async dispatch => {
    dispatch({ type: GET_DATA});
    try {
        const response = await callback();
        const data = response.data[0];
        dispatch({ type: GET_DATA_SUCCESS, data: data });
    }
    catch(e) {
        dispatch({ type: GET_DATA_ERROR });
    }
}

// 리듀서 함수
export default function postData(state=initialState, action) {
    switch(action.type) {
        // 여러 개 데이터
        case GET_DATAS:
            return {
                ...state,
                posts: {
                    loading: true,
                    data: null,
                    error: false
                }
            };
        case GET_DATAS_SUCCESS:
            return {
                ...state,
                posts: {
                    loading: false,
                    data: action.data,
                    error: false
                }
            };
        case GET_DATAS_ERROR:
            return {
                ...state,
                posts: {
                    loading: false,
                    data: null,
                    error: action.error
                }
            };
        // 한 개 데이터
        case GET_DATA:
            return {
                ...state,
                post: {
                    loading: true,
                    data: null,
                    error: false
                }
            };
        case GET_DATA_SUCCESS:
            return {
                ...state,
                post: {
                    loading: false,
                    data: action.data,
                    error: false
                }
            };
        case GET_DATA_ERROR:
            return {
                ...state,
                post: {
                    loading: false,
                    data: null,
                    error: action.error
                }
            };
        default:
            return state;
    }
}