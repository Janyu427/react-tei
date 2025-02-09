
import { configureStore } from "@reduxjs/toolkit";

import reducers from "./reducers/rootReducer";

const store = configureStore({
    reducer: reducers
});

export default store;