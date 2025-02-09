
import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = null;

const mode = createAction("mobileMenu/component");

const app = createReducer(initialState, (builder) => {
    builder.addCase(mode, (state, action) => {
        return action.value;
    }).addDefaultCase((state, action) => {
        return state;
    });
});

export default app;