
import { combineReducers } from "redux";

import componentReducer from "./componentReducer";
import isOpenReducer from "./isOpenReducer";

const app = combineReducers({
    component: componentReducer,
    isOpen: isOpenReducer
});

export default app;
