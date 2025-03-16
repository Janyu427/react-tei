
import { headers } from "next/headers";

import api from "@/assets/script/api";

import Content from "./content";

const App = async () => {
    const headersList = await headers();

    let productName = "";

    const pathname = headersList.get("x-current-path")?.split("/")[1];

    const innerPageTitle = await api.innerPageTitle.getFetch(pathname);

    const pageName = innerPageTitle.title;

    if (pathname == "productDetails") {
        const id = headersList.get("x-current-path")?.split("/")[2];
        
        const productDetails = await api.productDetails.getFetch(id);

        productName = productDetails.title;
    }

    return (
        <Content pageName={pageName} productName={productName} />
    );
};

export default App;
