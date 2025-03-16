
"use client"

import { Provider } from "react-redux";

import store from "@/redux/store";

const App = ({ children }: any) => {
    return (
        <>
            <Provider store={store}>
                {children}
            </Provider>
        </>
    );
};

export default App;
