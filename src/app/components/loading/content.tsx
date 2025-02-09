
"use client"

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const App = () => {
    return (
        <ProgressBar height="3px" color="#7c7c7c" options={{ showSpinner: false }} shallowRouting />
    );
};

export default App;