
import Desktop from "./desktop";
import Mobile from "./mobile";

import api from "@/assets/script/api";
import structuredData from "@/assets/script/structuredData";

import { headers } from "next/headers";

type Params = Promise<{ id: string }>;

export const generateStaticParams = async () => {
    const productLists = await api.product.getFetch();

    const paths = [];

    for (let i = 0; i < productLists.result.length; i ++) {
        for (let j = 0; j < productLists.result[i].items.length; j ++) {
            const path = productLists.result[i].items[j].itemNumber;

            paths.push(
                { id: path }
            );
        }
    };

    return paths;
};

export const generateMetadata = async ({ params }: { params: Params }) => {
    const { id } = await params

    const productDetails = await api.productDetails.getFetch(id);

    const productName = productDetails.title;

    return {
        title: `${productName}｜${process.env.NEXT_PUBLIC_SITE_NAME}`,
        description: `${productName}｜室內裝修YOCICO總監常說:「做設計要先感動自己，才能感動別人」，服務的20年以來，秉持這樣的精神，一路上和許多屋主們成為知心朋友。 YOCICO和程翊夥伴們相信，唯有設身處地為屋主著想，才能量身打造出獨一無二的客製化設計。`,
        keywords: "作品展示",
        openGraph: {
            title: process.env.NEXT_PUBLIC_SITE_NAME,
            description: `${productName}｜室內裝修YOCICO總監常說:「做設計要先感動自己，才能感動別人」，服務的20年以來，秉持這樣的精神，一路上和許多屋主們成為知心朋友。 YOCICO和程翊夥伴們相信，唯有設身處地為屋主著想，才能量身打造出獨一無二的客製化設計。`,
            url: `${process.env.NEXT_PUBLIC_SITE_BASE}/productDetails/${id}`,
        },
        alternates: {
            canonical: `${process.env.NEXT_PUBLIC_SITE_BASE}/productDetails/${id}`
        }
    };
};

const App = async ({ params }: { params: Params }) => {
    const headersList = await headers();
    const userAgent = headersList.get("user-agent") || "";
    const isMobile = /mobile/i.test(userAgent);

    let product = await api.product.getFetch();

    product = product.result;

    const { id } = await params;

    const path = headersList.get("x-current-path")?.split("/")[1];

    const innerPageTitle = await api.innerPageTitle.getFetch(path);

    const pageName = innerPageTitle.title;

    const productDetails = await api.productDetails.getFetch(id);

    const productName = productDetails.title;

    return (
        <>
            {
                (() => {
                    if (isMobile) {
                        return (
                            <Mobile id={id} />
                        );
                    }
                    else {
                        return (
                            <Desktop id={id} />
                        );
                    }
                })()
            }

            <structuredData.BreadcrumbList id={id} path={path} pageName={pageName} productName={productName} />
            <structuredData.ProductList productLists={product} />
        </>
    );
};

export default App;
