
"use client"

import Script from "next/script";

interface Props {
    [propName: string]: any;
};

const App = (props: Props) => {
    const res = () => {
        let resContnet: any = {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": []
        };

        const productLists = props.productLists;
        const urls = [];

        let count = 1;

        for (let i = 0; i < productLists.length; i ++) {
            const content = productLists[i].items;

            for (let j = 0; j < content.length; j ++) {
                const product = content[j];
                const url = `${process.env.NEXT_PUBLIC_SITE_BASE}/productDetails/${product.itemNumber}`;

                if (urls.indexOf(url) == -1) {
                    urls.push(url);

                    resContnet.itemListElement.push({
                        "@type": "ListItem",
                        "position": count ++,
                        "url": url
                    })
                }
            }
        }

        resContnet = JSON.stringify(resContnet);

        return resContnet;
    };

    const resContent = res();

    return (
        <Script type="application/ld+json">
            {resContent}
        </Script>
    );
};

export default App;