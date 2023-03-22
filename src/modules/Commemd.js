// 액션 타입
const GET_COMMENDS = 'GET_COMMENDS';
const GET_COMMENDS_SUCCESS = 'GET_COMMENDS_SUCCESS';
const GET_COMMENDS_ERROR = 'GET_COMMENDS_ERROR';

// 초기값
const initialState = {
    commends: {
        loading: false,
        data: null,
        error: null
    }
}

// 미들웨어
export const getCommends = callback => async dispatch => {
    dispatch({ type: GET_COMMENDS })
    try {
        const response = await callback();
        const data = response.data;
        dispatch({ type: GET_COMMENDS_SUCCESS, data: data })
    }
    catch(e) {
        dispatch({ type: GET_COMMENDS_ERROR, error: e })
    }
}

// 리듀서 함수
export default function commendsData(state=initialState, action) {
    switch(action.type) {
        case GET_COMMENDS:
            return {
                ...state,
                commends: {
                    loading: true,
                    data: null,
                    error: null
                }  
            };
        case GET_COMMENDS_SUCCESS:
            return {
                ...state,
                commends: {
                    loading: false,
                    data: action.data,
                    error: null
                } 
            };
        case GET_COMMENDS_ERROR:
            return {
                ...state,
                commends: {
                    loading: false,
                    data: null,
                    error: action.error
                }
            };
        default: 
            return state;
    }
}