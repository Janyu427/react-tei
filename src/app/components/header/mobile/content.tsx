
"use client"

import Link from "next/link";
import Image from "next/image";

import Aside from "./aside";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

import clsx from "clsx";

export interface Props {
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
    }
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
    const dispatch = useDispatch();
    const pathName = usePathname();
    const headerRef = useRef<HTMLDivElement>(null);

    const [openMenu, setOpenMenu] = useState(false);

    const click = () => {
        setOpenMenu(true);
    };
    
    const isFixed = useSelector((state: { fixed: boolean }) => {
        return state.fixed
    });

    useEffect (() => {
        if(headerRef.current) {
            const headerHeight = headerRef.current.clientHeight;

            dispatch({
                type: "header/getHeight",
                value: headerHeight
            });
        }
    }, [headerRef, dispatch]);
        
    return (
        <>
            <header className={clsx(
                "flex w-[100%] h-[80px] bg-[#f5f5f5] py-[10px] z-[10]",
                {
                    "relative": !isFixed && pathName == "/",
                    "fixed top-0": isFixed || pathName != "/"
                }
            )} ref={headerRef}>
                <div className="w-[90%] max-w-[1140px] mx-auto flex justify-between items-center">
                        <Link className="logo" href="/" title="程翊室內裝修" >
                            <Image className="image" src={props.companyInfo.logo.logoNormal} alt={props.companyInfo.logo.alt} width={226} height={50} priority/>
                        </Link>
                        
                        <div className="flex items-center justify-center absolute top-0 right-0 w-[80px] h-[80px] 
                                        bg-[#c4c4c4]" onClick={click}>
                            <div className="item_box">
                                <div className="item w-[28px] h-[1px] bg-[#fff] rounded-[5px] my-[8px] mr-0 ml-auto"></div>
                                <div className="item w-[23px] h-[1px] bg-[#fff] rounded-[5px] my-[8px] mr-0 ml-auto"></div>
                                <div className="item w-[30px] h-[1px] bg-[#fff] rounded-[5px] my-[8px] mr-0 ml-auto"></div>
                            </div>
                        </div>
                    </div>
            </header>       

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
    )
};

export default App;