// 액션 타입
const GET_SEARCH = 'GET_SEARCH';
const GET_SEARCH_SUCCESS = 'GET_SEARCH_SUCCESS';
const GET_SEARCH_ERROR = 'GET_SEARCH_ERROR';

// 초기값
const initialState = {
    search: {
        loading: false,
        data: null,
        error: null
    }
}

// 미들웨어
export const getSearch = callback => async dispatch => {
    dispatch({ type: GET_SEARCH })
    try {
        const response = await callback();
        const data = response.data;
        dispatch({ type: GET_SEARCH_SUCCESS, data: data })
    }
    catch(e) {
        dispatch({ type: GET_SEARCH_ERROR, error: e })
    }
}

// 리듀서 함수
export default function searchData(state=initialState, action) {
    switch(action.type) {
        case GET_SEARCH:
            return {
                ...state,
                search: {
                    loading: true,
                    data: null,
                    error: null
                }
            };
        case GET_SEARCH_SUCCESS:
        return {
            ...state,
            search: {
                loading: false,
                data: action.data,
                error: null
            }
        };
        case GET_SEARCH_ERROR:
        return {
            ...state,
            search: {
                loading: false,
                data: null,
                error: action.error
            }
        };
        default:
            return state;
    }
}