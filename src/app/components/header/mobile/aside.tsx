
"use client"

import Link from "next/link"; 
import Image from "next/image";
import clsx from "clsx";

import logo from "@/public/logo.svg";
import facebook from "@/public/facebook-f.svg";
import instagram from "@/public/instagram.svg";
import youtube from "@/public/youtube.svg";
import line from "@/public/line.svg";

import { usePathname } from "next/navigation";

interface Props {
    setOpenMenu: (value: boolean) => void,
    menu: menuItem [],
    contactInfo: infoItem [],
};

interface infoItem {
    key: string,
    title: string,
    titleTag: string,
    text: string,
    link: string
};

interface menuItem {
    key: string,
    title: string,
    titleTag: string,
    link: string
};

const App = (props: Props) => {
    const pathname = usePathname();

    return (
        <>
            {
                (() => {
                    if (props.menu && props.contactInfo) {
                        return (
                            <div className="fixed w-[100vw] h-[100vh] top-0 left-0 bg-[#fff] z-[99]">
                                <div className="absolute w-[80px] h-[80px] top-0 right-0 p-[10px] bg-[#c4c4c4] cursor-pointer" onClick={() => {props.setOpenMenu(false)}}>
                                    <div className="item w-[30px] h-[1px] bg-[#fff] -rotate-45 translate-x-[15px] translate-y-[33px] rounded-[5px]"></div>
                                    <div className="item w-[30px] h-[1px] bg-[#fff] rotate-45 translate-x-[15px] translate-y-[33px] rounded-[5px]"></div>
                                </div>
                                <div className="w-[90%] max-w-[1140px] mx-auto container pt-[100px] px-5%">
                                    <Link className="logo_box block mb-[60px]" href="/" title="Janyu" target="_self">
                                        <Image className="image w-[100%] max-w-[270px]" src={logo} width="270" height="60" alt="程翊室內裝修"/>
                                    </Link>
        
                                    <ul className="relative p-[15px] mb-[30px] 
                                                before:content[''] before:absolute before:bottom-0 before:left-[15px] before:w-[40px] 
                                                before:h-[1px] before:bg-[#dcdcdc]">
                                        {
                                            props.menu.map((item: menuItem, index: number) => {
                                                return (
                                                    <li className="px-0 py-[15px]" key={index}>
                                                        <Link className={clsx(
                                                            "relative hover:text-[#231916]",
                                                                {
                                                                "text-[#231916]": item.link == pathname,
                                                                "text-[#666]": item.link != pathname
                                                                }
                                                        )} href={item.link} title={item.title} target="_self">{item.title}</Link>
                                                    </li>
                                                );
                                            })  
                                        }
                                        
                                    </ul>
                                    <div className="relative px-[15px] pb-[30px] mb-[30px]
                                                before:content[''] before:absolute before:bottom-0 before:left-[15px] before:w-[40px] 
                                                before:h-[1px] before:bg-[#dcdcdc]">
                                                    
                                        <div className="mb-[5px]">
                                            {
                                                props.contactInfo.map((item: infoItem, index: number) => (
                                                    item.key == "address" ? (
                                                        <a className="text-[#231916] font-medium" href={item.link} title={item.titleTag} key={index} target="_blank">{item.text}</a>
                                                    ) : null
                                                ))
                                            }
                                        </div>
        
                                        <div className="flex items-center flex-wrap">
                                            {
                                                props.contactInfo.map((item: infoItem, index: number) => (
                                                    item.key != "address" ? (
                                                        <div className={clsx(
                                                            "mr-[20px]",
                                                            {
                                                                "mr-0": index == props.contactInfo.length - 1
                                                            }
                                                        )} key={index}>
                                                            <span>{item.title}</span>
                                                            <a className="text-[#231916]" href={item.link} title={item.titleTag} target="_blank">{item.text}</a>
                                                        </div>
                                                    ) : null
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className="flex items-center px-[15px]">
                                        <a className="flex items-center justify-center w-[38px] h-[38px] rounded-[100%] mr-[25px]
                                                    border border-[#666] max-[992px]:mr-[15px]" href="https://www.facebook.com/tei168/" title="Facebook" target="_blank" rel="noopener noreferrer">
                                            <Image className="invert-[42%] sepia-[7%] saturate-0 hue-rotate-[170deg] brightness-[92%] contrast-[90%] w-[9px]" src={facebook} alt='Facebook' />
                                        </a>
                                        <a className="flex items-center justify-center w-[38px] h-[38px] rounded-[100%] mr-[25px]
                                                    border border-[#666] max-[992px]:mr-[15px]" href="https://www.youtube.com/channel/UCcLLMp92Nek_ChHzFnAE2wg" title="Youtube" target="_blank" rel="noopener noreferrer">
                                            <Image className="invert-[42%] sepia-[7%] saturate-0 hue-rotate-[170deg] brightness-[92%] contrast-[90%] w-[15px]" src={youtube} alt='Youtube' />
                                        </a>
                                        <a className="flex items-center justify-center w-[38px] h-[38px] rounded-[100%] mr-[25px]
                                                    border border-[#666] max-[992px]:mr-[15px]" href="https://www.instagram.com/tei_idesign/" title="Instagram" target="_blank" rel="noopener noreferrer">
                                            <Image className="invert-[42%] sepia-[7%] saturate-0 hue-rotate-[170deg] brightness-[92%] contrast-[90%] w-[13px]" src={instagram} alt='Instagram' />
                                        </a>
                                        <a className="flex items-center justify-center w-[38px] h-[38px] rounded-[100%] mr-[25px]
                                                    border border-[#666] max-[992px]:mr-[15px]" href="http://line.me/ti/p/~tei1688" title="Line" target="_blank" rel="noopener noreferrer">
                                            <Image className="invert-[42%] sepia-[7%] saturate-0 hue-rotate-[170deg] brightness-[92%] contrast-[90%] w-[15px]" src={line} alt='Line' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })()
            }
        </>
    );
};

export default App;