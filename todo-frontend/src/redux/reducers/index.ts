import { combineReducers } from "@reduxjs/toolkit";
import taskReducer from "./taskReducers";

const rootReducer = combineReducers({
    task: taskReducer,
});

export default rootReducer;