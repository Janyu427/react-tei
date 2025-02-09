
const viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#333",
};

const metadata = {
    title: process.env.NEXT_PUBLIC_SITE_NAME,
    description:
        "程翊室內裝修YOCICO總監常說:「做設計要先感動自己，才能感動別人」，服務的20年以來，秉持這樣的精神，一路上和許多屋主們成為知心朋友。 YOCICO和程翊夥伴們相信，唯有設身處地為屋主著想，才能量身打造出獨一無二的客製化設計。",
    author: process.env.NEXT_PUBLIC_SITE_NAME,
    keywords: "程翊室內裝修",
    version: process.env.NEXT_PUBLIC_VERSION,
    environment: process.env.NEXT_PUBLIC_ENV,
    openGraph: {
        title: process.env.NEXT_PUBLIC_SITE_NAME,
        description:
            "程翊室內裝修YOCICO總監常說:「做設計要先感動自己，才能感動別人」，服務的20年以來，秉持這樣的精神，一路上和許多屋主們成為知心朋友。",
        url: process.env.NEXT_PUBLIC_SITE_BASE,
        type: "website",
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_IMAGE_LOADER_BASE}/about1`,
            },
        ],
        siteName: process.env.NEXT_PUBLIC_SITE_NAME,
    },
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
            {
                url: `${process.env.NEXT_PUBLIC_IMAGE_LOADER_BASE}/icon-64.png`,
                sizes: "64x64",
                type: "image/png",
            },
            {
                url: `${process.env.NEXT_PUBLIC_IMAGE_LOADER_BASE}/icon-128.png`,
                sizes: "128x128",
                type: "image/png",
            },
            {
                url: `${process.env.NEXT_PUBLIC_IMAGE_LOADER_BASE}/icon-256.png`,
                sizes: "256x256",
                type: "image/png",
            },
        ],
        appleTouchIcon: [
            {
                url: `${process.env.NEXT_PUBLIC_IMAGE_LOADER_BASE}/icon-64.png`,
                sizes: "64x64",
                type: "image/png",
            },
            {
                url: `${process.env.NEXT_PUBLIC_IMAGE_LOADER_BASE}/icon-128.png`,
                sizes: "128x128",
                type: "image/png",
            },
            {
                url: `${process.env.NEXT_PUBLIC_IMAGE_LOADER_BASE}/icon-256.png`,
                sizes: "256x256",
                type: "image/png",
            },
        ],
    },
};

const app = {
    viewport: viewport,
    metadata: metadata
};

export default app;