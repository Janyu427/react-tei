
"use client";

import Image from "next/image";

import { useEffect, useState } from "react";

import clsx from "clsx";

interface Props {
    detailContent: detailContentItem[]
};

interface detailContentItem {
    key: string,
    title: string,  
    list: contentItem []
};

interface contentItem {
    imgSrc: string,
    text: string
};

const App = (props: Props) => {
    const [activeTab, setActiveTab] = useState<string>("content1");
    const [content, setContent] = useState<contentItem []>([]);

    const handleClickTab = (tab: string) => {
        setActiveTab(tab);
    };

    useEffect (() => {
        if (!props.detailContent) {
            return;
        }

        for (let i = 0; i < props.detailContent.length; i ++) {
            const item = props.detailContent[i];

            if (item.key == activeTab) {
                setContent(item.list);

                break;
            }
        };
    }, [props.detailContent, activeTab]);
    
    return (
        <div className="pt-[60px]">
            <div className="w-[90%] max-w-[1140px] mx-auto">
                <ul className="flex border-b border-[#dcdcdc]">
                    {
                        (() => {
                            if (props.detailContent) {
                                return (
                                    props.detailContent.map((item: detailContentItem, index: number) => {
                                        return (
                                            <li className={clsx(
                                                "text-[18px] pr-[30px] pb-[20px] cursor-pointer hover:text-[#231916]",
                                                {
                                                    "text-[#231916]": item.key == activeTab,
                                                    "text-[#999]": item.key != activeTab
                                                }
                                            )} onClick={() => handleClickTab(item.key)} key={index}>{item.title}</li>
                                        );
                                    })
                                );
                            }
                        })()
                    }
                </ul>
                <div className="flex flex-wrap px-[15px] py-[30px] border-b border-[#ddd]">
                    {
                        (() => {
                            if (content) {
                                return (
                                    content.map((item: contentItem, index: number) => {
                                        return (
                                            <div className={clsx(
                                                "flex w-[100%] pb-[20px]",
                                                {
                                                    "mb-[20px]": index != content.length - 1,
                                                    "mb-0": index == content.length - 1,
                                                    "border-b-none": index == content.length - 1,
                                                    "border-b border-[#ddd]": index != content.length - 1,
                                                    "flex-row-reverse": index % 2 != 0
                                                }
                                            )} key={index}>
                                                <div className="w-[50%]">
                                                    <Image className="image" src={item.imgSrc} width={555} height={370} alt="" />
                                                </div>
                                                <div className="w-[50%]">
                                                    <div className="pt-[10px] pl-[20px] pb-[10px] text-justify">{item.text}</div>
                                                </div>
                                            </div>
                                        );
                                    })
                                );
                            }
                        })()
                    }
                </div>
            </div>
        </div>
    );
};

export default App;