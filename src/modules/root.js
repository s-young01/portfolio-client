import { combineReducers } from "redux";
import postData from "./Data";
import loginCheck from "./LoginCheck";

const rootReducer = combineReducers({
    postData,
    loginCheck
});

export default rootReducer;