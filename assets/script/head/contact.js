
const metadata = {
    title: `聯絡我們｜${process.env.NEXT_PUBLIC_SITE_NAME}`,
    description: "聯絡我們｜室內裝修YOCICO總監常說:「做設計要先感動自己，才能感動別人」，服務的20年以來，秉持這樣的精神，一路上和許多屋主們成為知心朋友。 YOCICO和程翊夥伴們相信，唯有設身處地為屋主著想，才能量身打造出獨一無二的客製化設計。",
    keywords: "聯絡我們",
    openGraph: {
        title: process.env.NEXT_PUBLIC_SITE_NAME,
        description: "聯絡我們｜程翊室內裝修YOCICO總監常說:「做設計要先感動自己，才能感動別人」，服務的20年以來，秉持這樣的精神，一路上和許多屋主們成為知心朋友。 YOCICO和程翊夥伴們相信，唯有設身處地為屋主著想，才能量身打造出獨一無二的客製化設計。",
        url: `${process.env.NEXT_PUBLIC_SITE_BASE}/contact`,
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_SITE_BASE}/contact`
    }
};

const app = {
    metadata: metadata
};

export default app;