
import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = false;

const mode = createAction("fixed");

const app = createReducer(initialState, (builder) => {
    builder.addCase(mode, (state, action) => {
        return action.value;
    }).addDefaultCase((state, action) => {
        return state;
    });
});

export default app;