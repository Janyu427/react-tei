
"use client"

import React from 'react';
import Link from "next/link";
import Image from "next/image";

import logotypeWhite from "@/public/logotype.svg";
import logoIcon from "@/public/logo_icon.svg";
import facebook from "@/public/facebook-f.svg";
import instagram from "@/public/instagram.svg";
import youtube from "@/public/youtube.svg";
import line from "@/public/line.svg";

import { useEffect } from "react";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

interface Props {
    banner: bannerItem [],
    menu: menuItem [],
};

interface menuItem {
    title: string,
    titleTag: string,
    link: string
};

interface bannerItem {
    title: string,
    test: string,
    bgSrc: string
};

const App = (props: Props) => {
    useEffect(() => {
        const setSwiper = () => {
            register();
        };
    
        setSwiper();
    }, [props.banner]);

    return (
        <Swiper className="swiper" 
                modules={[ EffectFade, Autoplay ]} 
                effect="fade" 
                autoplay={{
                    delay: 8000,
                    disableOnInteraction: true,
                }}
        >
            <div className="absolute w-[90%] flex justify-between items-center top-[30px] left-[5%] z-10">
                <Link className="max-w-[250px]" href="" title="程翊室內設計">
                    <Image className="image w-[100%]" src={logotypeWhite} width={320} height={90} alt="程翊室內設計" priority={true} />
                </Link>
                <div>
                    <ul className="flex">
                        {
                            props.menu.map((item: menuItem, index: number) => {
                                return (
                                    <li className="list" key={index}>
                                        <Link className="text-[18px] text-[#fff] px-[15px] hover:text-[#999]" href={item.link} title={item.titleTag}>{item.title}</Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
                <div className="flex items-center max-[992px]:hidden">
                    <a className="flex items-center justify-center w-[38px] h-[38px] rounded-[100%] mr-[25px]
                                border border-[#fff] text-[14px] text-[#fff]" href="https://www.facebook.com/tei168/" title="Facebook" target="_blank" rel="noopener noreferrer">
                        <Image className="w-[9px]" src={facebook} alt='Facebook' priority={true} />
                    </a>
                    <a className="flex items-center justify-center w-[38px] h-[38px] rounded-[100%] mr-[25px]
                                border border-[#fff] text-[14px] text-[#fff]" href="https://www.youtube.com/channel/UCcLLMp92Nek_ChHzFnAE2wg" title="Youtube" target="_blank" rel="noopener noreferrer">
                        <Image className="w-[15px]" src={youtube} alt='Youtube' priority={true} />
                    </a>
                    <a className="flex items-center justify-center w-[38px] h-[38px] rounded-[100%] mr-[25px]
                                border border-[#fff] text-[14px] text-[#fff]" href="https://www.instagram.com/tei_idesign/" title="Instagram" target="_blank" rel="noopener noreferrer">
                        <Image className="w-[13px]" src={instagram} alt='Instagram' priority={true} />
                    </a>
                    <a className="flex items-center justify-center w-[38px] h-[38px] rounded-[100%] mr-[25px]
                                border border-[#fff] text-[14px] text-[#fff]" href="http://line.me/ti/p/~tei1688" title="Line" target="_blank" rel="noopener noreferrer">
                        <Image className="w-[15px]" src={line} alt='Line' priority={true} />
                    </a>
                </div>
            </div>

            {
                props.banner.map((item: bannerItem, index: number) => {
                    return (
                        <SwiperSlide className="relative" key={index}>
                            <div className="swiper-image relative h-[100vh] after:content-[''] after:absolute after:top-0 after:left-0 after:w-[100%] after:h-[100%] after:bg-black after:bg-opacity-30">
                                <Image src={item.bgSrc} fill sizes="100%" alt="banner" />
                            </div>
                        </SwiperSlide>
                    );
                })
            }
            
            <div className="absolute bottom-0 left-[6%] z-10">
                <p className="relative text-[#fff] text-[12px] font-500 pb-[85px] mb-0 vertical_text 
                            before:content-[''] before:absolute before:left-[50%] before:bottom-0 before:w-[1px] before:h-[60px] before:bg-[#fff] before:translate-x-[-50%]">SCROLL</p>
            </div>
            <div className="absolute right-[5%] bottom-[50px] z-10">
                <Image className="image" src={logoIcon} width={80} height={78} alt="" priority={true} />
            </div>
        </Swiper>
    );
};

export default App;