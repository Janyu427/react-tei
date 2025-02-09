
"use client"

import { Noto_Serif_TC } from "next/font/google";

const NotoSerifTC = Noto_Serif_TC({ 
    subsets: ["latin"], 
    weight: ["400", "700"] 
});

const App = () => {
    return (
        <style jsx global>
            {`
                html {
                    font-family: ${NotoSerifTC.style.fontFamily};
                }
            `}
        </style>
    );
};

export default App;