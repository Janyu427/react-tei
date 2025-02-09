
import { combineReducers } from "@reduxjs/toolkit";

import getHeightReducer from "./getHeight";

const app = combineReducers({
    getHeight: getHeightReducer
});

export default app;