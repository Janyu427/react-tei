
"use client"

import { Provider } from "react-redux";

import store from "@/redux/store";

import Loading from "../../src/app/components/loading"

// import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const App = ({ children }: any) => {
    return (
        <>
            {/* <ProgressBar
                    height="3px"
                    color="#7c7c7c"
                    options={{ showSpinner: false }}
                    shallowRouting
                /> */}

            <Provider store={store}>
                <Loading />
                {children}
            </Provider>
        </>
    );
};

export default App;