import { combineReducers } from "redux";
import commendsData from "./Commemd";
import postData from "./Data";
import loginCheck from "./LoginCheck";

const rootReducer = combineReducers({
    postData,
    loginCheck,
    commendsData
});

export default rootReducer;