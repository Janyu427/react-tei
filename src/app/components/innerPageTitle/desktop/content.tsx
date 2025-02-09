
"use client"

import Image from "next/image";

import { useDispatch } from "react-redux";
import { useEffect, useRef } from "react";

interface Props {
    data: {
        title: string,
        enTitle: string,
        titleImgUrl: string
    };
};

const App = (props: Props) => {
    const divRef = useRef<HTMLDivElement>(null);
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
        <div className="pt-[180px] pb-[60px]" ref={divRef}>
            <div className="flex justify-between items-end mx-auto w-[90%] max-w-[1140px]">
                {
                    (() => {
                        if (props.data) {
                            return (
                                <>
                                    <div className="flex items-end">
                                        <div className="vertical_text text-[#231916] text-[20px] mr-[60px] tracking-[5px]">{props.data.title}</div>
                                        <p className="relative text-[#666] pl-[45px] mb-[15px] before:content-[''] 
                                                    before:absolute before:top-[50%] before:left-0 before:w-[30px] before:h-[1px] 
                                                    before:translate-y-[-50%] before:bg-[#999]">{props.data.enTitle}</p>
                                    </div>

                                    <Image className="image w-auto h-[100%]" src={props.data.titleImgUrl} width={184} height={70} alt=""/>
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