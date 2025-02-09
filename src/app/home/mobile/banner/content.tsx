
"use client"

import React from 'react';
import Link from "next/link";
import Image from "next/image";

import Aside from "../../../components/header/mobile/aside";

import { useEffect, useState } from "react";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

interface Props {
    banner: {
        banner: bannerItem []
    },
    companyInfo: {
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
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    useEffect(() => {
        const setSwiper = () => {
            register();
        };
    
        setSwiper();
    }, [props.banner]);

    return(
        <>
            <Swiper className="swiper" 
                    modules={[ EffectFade, Autoplay ]} 
                    effect="fade" 
                    autoplay={{
                        delay: 8000,
                        disableOnInteraction: true,
                    }}
            >
                <div className="absolute w-[90%] flex justify-between items-center top-[30px] left-[5%] z-10">
                    <Link className="max-w-[320px] max-[1200px]:max-w-[200px]" href="" title="程翊室內設計">
                        <Image className="image w-[100%]" src={props.companyInfo.logo.logotypeWhite} width={320} height={90} alt={props.companyInfo.logo.alt} priority={true} />
                    </Link>
                    <div className="burger hidden max-[992px]:block" onClick={() => setOpenMenu(true)}>
                        <div className="w-[28px] h-[1px] bg-[#fff] rounded-[5px] my-[8px] mr-0 ml-auto"></div>
                        <div className="w-[23px] h-[1px] bg-[#fff] rounded-[5px] my-[8px] mr-0 ml-auto"></div>
                        <div className="w-[30px] h-[1px] bg-[#fff] rounded-[5px] my-[8px] mr-0"></div>
                    </div>
                </div>

                {
                    props.banner.banner.map((item: bannerItem, index: number) => {
                        return (
                            <SwiperSlide className="relative" key={index}>
                                <div className="swiper-image relative h-[100vh] after:content-[''] after:absolute after:top-0 after:left-0 after:w-[100%] after:h-[100%] after:bg-black after:bg-opacity-30">
                                    <Image className="object-cover" src={item.bgSrc} fill sizes="100%" alt="banner" priority={index == 0} />
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
                    <Image className="image" src={props.companyInfo.logo.icon} width={80} height={78} alt="" priority={true} />
                </div>
            </Swiper>

            {
                (() => {
                    if (openMenu) {
                        return (
                            <Aside companyInfo={props.companyInfo} setOpenMenu={setOpenMenu} />
                        );
                    }
                })()
            }
        </>
    );
};

export default App;