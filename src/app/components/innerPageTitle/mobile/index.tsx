
import { headers } from "next/headers";

import api from "@/assets/script/api";

import Content from "./content";

const App = async () => {
    const headersList = await headers();

    const pathname = headersList.get("x-current-path")?.split("/")[1];

    const innerPageTitle = await api.innerPageTitle.getFetch(pathname);

    return (
        (() => {
            if (innerPageTitle) {
                return (
                    <Content innerPageTitle={innerPageTitle} />
                )
            }
        })()
    );
};

export default App;