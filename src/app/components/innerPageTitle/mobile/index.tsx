
import { headers } from "next/headers";

import api from "@/assets/script/api";

import Content from "./content";

interface item {
    key: string,
    title: string,
    enTitle: string,
    titleImgUrl: string
};

const App = async () => {
    const headersList = await headers();

    let data = null;

    const pathname = headersList.get("x-current-path")?.split("/")[1];

    const innerPageTitle = await api.innerPageTitle.getFetch();

    for (let i = 0; i < innerPageTitle.InnerBannerPageTitle.length; i ++) {
        const item: item = innerPageTitle.InnerBannerPageTitle[i];

        if (item.key == pathname) {
            data = {
                title: item.title,
                enTitle: item.enTitle,
                titleImgUrl: item.titleImgUrl
            };
        }
    }

    return (
        (() => {
            if (data) {
                return (
                    <Content data={data} />
                )
            }
        })()
    );
};

export default App;