
import { headers } from "next/headers";

import api from "@/assets/script/api";

import Content from "./content";

const App = async () => {
    const headersList = await headers();

    let productName = "";
    let pageName = "";

    const pathname = headersList.get("x-current-path")?.split("/")[1];

    const innerPageTitle = await api.innerPageTitle.getFetch();
    const productDetails = await api.product.getDetails.getFetch();

    for (let i = 0; i < innerPageTitle.InnerBannerPageTitle.length; i ++) {
        const item = innerPageTitle.InnerBannerPageTitle[i];

        if (pathname == item.key) {
            pageName = item.title;

            break;
        }
    };

    if (pathname == "productDetails") {
        for (let i = 0; i < productDetails.productDetails.length; i ++) {
            const item = productDetails.productDetails[i];
            const id = headersList.get("x-current-path")?.split("/")[2];

            if (item.productId == id) {
                productName = item.title;

                break;
            }
        };
    }

    return (
        <Content pageName={pageName} productName={productName} />
    );
};

export default App;