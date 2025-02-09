
import { combineReducers } from "redux";

import getHeightReducer from "./getHeightReducer";

const app = combineReducers({
    getHeight: getHeightReducer,
});

export default app;