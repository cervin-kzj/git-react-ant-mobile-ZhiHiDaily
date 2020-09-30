import { createStore, applyMiddleware, combineReducers } from "redux"
import ReduxThunk from "redux-thunk";
import { routerMiddleware } from "react-router-redux";
import { reducerNewsDetail } from "./modules/detail";
import { reducerComment } from "./modules/comments";
import { reducerLatest } from "./modules/latest";

let createHistory = require("history").createHashHistory;
let history = createHistory();
let routerWare = routerMiddleware(history);

const reducer = combineReducers({
    detail: reducerNewsDetail,
    comment: reducerComment,
    latest: reducerLatest
});

export const store = createStore(reducer, applyMiddleware(ReduxThunk,routerWare));