import {combineReducers} from "redux";

import { reducerError } from "../store/reducerError";

import { reducerEditor } from "../store/reducerEditor";

export const rootReducer = combineReducers({
    reducerError,
    reducerEditor,
});