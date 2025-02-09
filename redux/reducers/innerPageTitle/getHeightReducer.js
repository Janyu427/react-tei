
import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = 0;

const mode = createAction("innerPageTitle/getHeight");

const app = createReducer(initialState, (builder) => {
    builder.addCase(mode, (state, action) => {
        return action.value;
    }).addDefaultCase((state, action) => {
        return state;
    });
});

export default app;