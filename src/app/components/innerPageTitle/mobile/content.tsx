
"use client"

import Image from "next/image";

import { useDispatch } from "react-redux";
import { useEffect, useRef } from "react";

interface Props {
    innerPageTitle: {
        title: string,
        enTitle: string,
        titleImgUrl: string
    };
};

const App = (props: Props) => {
    const divRef = useRef<HTMLDivElement | null>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!divRef.current) {
            return;
        }

        const divHeight = divRef.current.clientHeight;
            
        dispatch({
            type: "innerPageTitle/getHeight",
            value: divHeight
        });
    }, [divRef, dispatch]);

    return (
        <div className="pt-[100px] pb-[60px]" ref={divRef}>
            <div className="flex justify-between items-end mx-auto w-[90%] max-w-[1140px]">
                {
                    (() => {
                        if (props.innerPageTitle) {
                            return (
                                <>
                                    <div className="flex items-end">
                                        <div className="vertical_text text-[#231916] text-[20px] mr-[20px] tracking-[5px]">{props.innerPageTitle.title}</div>
                                        <p className="relative text-[#666] pl-[45px] mb-[15px] before:content-[''] 
                                                    before:absolute before:top-[50%] before:left-0 before:w-[30px] before:h-[1px] 
                                                    before:translate-y-[-50%] before:bg-[#999]">{props.innerPageTitle.enTitle}</p>
                                    </div>

                                    <Image className="image max-w-[150px] w-auto h-[100%]" src={props.innerPageTitle.titleImgUrl} width={184} height={70} alt=""/>
                                </>
                            );
                        }
                    })()
                }
            </div>
        </div>
    );
};

export default App;