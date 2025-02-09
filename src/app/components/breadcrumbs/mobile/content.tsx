
"use client"

import Link from "next/link";

import { useDispatch } from "react-redux";
import { useEffect, useRef } from "react";

interface Props {
    pageName: string,
    productName: string
};

const App = (props: Props) => {
    const divRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (divRef.current) {
            const divHeight = divRef.current.clientHeight;

            dispatch({
                type: "breadcrumbs/getHeight",
                value: divHeight
            });
        }
    }, [divRef, dispatch]);

    return (
        <div className="w-[90%] max-w-[1140px] mx-auto text-[13px] pb-[60px]" ref={divRef}>
            <ul className="flex w-fit ml-auto max-w-[480px]:mr-auto">
                <li>
                    <Link className="text-[#666]" title="首頁" href="/">首頁</Link>
                </li>

                {
                    (() => {
                        if (props.productName) {
                            return (
                                <>
                                    <span className="text-[#666] mx-[20px]">{">"}</span>
                                    <li>
                                        <Link className="text-[#666]" title={props.pageName} href="/product">{props.pageName}</Link>
                                    </li>  
                                    <span className="text-[#666] mx-[20px]">{">"}</span>
                                    <li className="text-[#231916]">{props.productName}</li> 
                                </>
                            );
                        }
                        else {
                            return (
                                <>
                                    <span className="text-[#666] mx-[20px]">{">"}</span>
                                    <li className="text-[#231916]">{props.pageName}</li> 
                                </>
                            );
                        }
                    })()
                }
            </ul>
        </div>        
    );
};

export default App;