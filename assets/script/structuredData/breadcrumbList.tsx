
"use client"

import Script from "next/script";

interface Props {
    [propName: string]: any;
};

const App = (props: Props) => {
    const res = () => {
        let resContnet: any = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": []
        };

        if (props.path != "productDetails") {
            resContnet.itemListElement.push({
                "@type": "ListItem",
                "position": 1,
                "name": "首頁",
                "item": `${process.env.NEXT_PUBLIC_SITE_BASE}`
            });
            resContnet.itemListElement.push({
                "@type": "ListItem",
                "position": 2,
                "name": `${props.pageName}`,
                "item": `${process.env.NEXT_PUBLIC_SITE_BASE}/${props.path}`
            });
        }
        else {
            resContnet.itemListElement.push({
                "@type": "ListItem",
                "position": 1,
                "name": "首頁",
                "item": `${process.env.NEXT_PUBLIC_SITE_BASE}`
            });
            resContnet.itemListElement.push({
                "@type": "ListItem",
                "position": 2,
                "name": `${props.pageName}`,
                "item": `${process.env.NEXT_PUBLIC_SITE_BASE}/product`
            });
            resContnet.itemListElement.push({
                "@type": "ListItem",
                "position": 3,
                "name": `${props.productName}`,
                "item": `${process.env.NEXT_PUBLIC_SITE_BASE}/${props.path}/${props.id}`
            });
        }

        resContnet = JSON.stringify(resContnet);

        return resContnet;
    };

    const resContnet = res();

    return (
        <Script type="application/ld+json">
            {resContnet}
        </Script>
    );
};

export default App;