import { combineReducers } from "redux";
import commendsData from "./Commemd";
import postData from "./Data";
import loginCheck from "./LoginCheck";
import searchData from "./Search";

const rootReducer = combineReducers({
    postData,
    loginCheck,
    commendsData,
    searchData
});

export default rootReducer;