
import api from "@/assets/script/api";

interface Props {
    id: string;
};

const generateMetadata = async (props: Props) => {
    const id = props.id;
    
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

export default generateMetadata;