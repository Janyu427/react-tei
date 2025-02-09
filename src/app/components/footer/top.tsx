
"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
    footer: {
        logo: {
            logotypeWhite: string,
            icon: string,
            logoNormal: string,
            alt: string
        }
        basicInfo: infoItem [],
        socialMediaInfo: socialMediaItem [],
        navList: navListItem []
    };
};

interface infoItem {
    key: string,
    title: string,
    titleTag: string,
    text: string,
    link: string
};

interface socialMediaItem {
    key: string,
    titleTag: string,
    link: string
};

interface navListItem {
    key: string,
    title: string,
    titleTag: string,
    link: string
};

const App = (props: Props) => {
    const [addressInfo, setAddressInfo] = useState<infoItem | null>(null);

    const [otherInfo, setOtherInfo] = useState<infoItem []>([]);

    useEffect(() => {
        if (!props.footer.basicInfo) {
            return;
        }

        const otherItems: infoItem [] = [];

        for (let i = 0; i < props.footer.basicInfo.length; i ++) {
            const item = props.footer.basicInfo[i];

            if (item.key == "address") {
                setAddressInfo(item);
            }
            else {
                otherItems.push(item);
            }
        }

        setOtherInfo(otherItems);
    }, [props.footer.basicInfo]);

    return (
        <div className="flex pt-[20px] pb-[30px] flex-wrap">
            <Link className="w-[40%] pb-[30px]" href="/">
                <Image className="max-w-[226px] w-full" src={props.footer.logo.logoNormal} width={226} height={50} alt={props.footer.logo.alt} priority={true} />
            </Link>

            <div className="py-0 pr-[15px] pb-[30px]">
                <div className="mb-[5px]">
                    {
                        (() => {
                            if (addressInfo) {
                                return (
                                    <Link className="text-[#231916]" href={addressInfo.link} target="_blank" title={addressInfo.titleTag}>{addressInfo.text}</Link>
                                );
                            }
                        })()
                    }
                </div>
                <div className="flex items-center flex-wrap">
                    {
                        (() => {
                            if (otherInfo) {
                                return (
                                    otherInfo.map((item: infoItem, index: number) => {
                                        return (
                                            <div key={index} className="mr-[20px]">
                                                <span className="text-[#231916]">{item.title}</span>
                                                <Link className="text-[#231916]" href={item.link} target="_blank" title={item.titleTag}>{item.text}</Link>
                                            </div>
                                        )
                                    })
                                )
                            }
                        })()
                    }
                </div>
            </div>
        </div>
    );
};

export default App;