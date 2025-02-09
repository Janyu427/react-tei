
"use client"

import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePathname } from "next/navigation";

import clsx from "clsx";

import Poster from "../../poster/mobile";

interface Props {
    product: productItem []
};

interface productItem {
    key: string,
    title: string,
    items: item []
};

interface item {
    name: string,
    titleTag: string,
    itemNumber: string,
    link: string,
    bgSrc: string
};

const App = (props: Props) => {
    const [activeId, setActiveId] = useState<string>("categoryAll");
    const [categoryBoxHeight, setCategoryBoxHeight] = useState<number>(0);
    const categoryBoxRef = useRef<HTMLDivElement | null>(null);

    const dispatch = useDispatch();
    const path = usePathname();

    const isFixedSelector = useSelector((
        state: { 
            fixed: boolean 
        }) => {
        return state.fixed;
    });

    const breadcrumbsHeightSelector = useSelector((
        state: { 
            breadcrumbs: { 
                getHeight: number 
            } 
        }) => {
        return state.breadcrumbs.getHeight;
    });

    const innerPageTitleHeightSelector = useSelector((
        state: { 
            innerPageTitle: { 
                getHeight: number 
            } 
        }) => {
        return state.innerPageTitle.getHeight;
    });

    const headerHeightSelector = useSelector((
        state: { 
            header: { 
                getHeight: number 
            } 
        }) => {
        return state.header.getHeight;
    });

    const getFixedMargin = () => {
        if (isFixedSelector) {
            if (path == "/") {
                const headerPlusCategoryHeight = headerHeightSelector + categoryBoxHeight;

                return `${headerPlusCategoryHeight}px`;
            }
            else {
                return `${categoryBoxHeight}px`;
            }
        }
        else {
            return 0;
        }
    };

    const getAllProducts = () => {
        const allProducts = [];

        for (let i = 0; i < props.product.length; i ++) {
            const item = props.product[i];

            allProducts.push(...item.items);
        }

        return allProducts;
    };

    const getCategoryproducts = () => {
        let categoryProducts: item [] = [];

        for (let i = 0; i < props.product.length; i ++) {
            const item = props.product[i];

            if (item.key == activeId) {
                categoryProducts = item.items;   
            }
        }

        return categoryProducts;
    };

    const allProducts = getAllProducts();
    const categoryProducts = getCategoryproducts();

    useEffect(() => {
        if (!categoryBoxRef.current) {
            return;
        }

        setCategoryBoxHeight(categoryBoxRef.current.clientHeight);

        dispatch({
            type: "productCategory/getHeight",
            value: categoryBoxHeight
        });
    }, [categoryBoxHeight, dispatch]);

    useEffect(() => {
        const exe = () => {
            let totalHeight;

            if (path != "/") {
                totalHeight = innerPageTitleHeightSelector + breadcrumbsHeightSelector - headerHeightSelector;
            }
            else {
                totalHeight = window.innerHeight;
            }

            if (window.scrollY > totalHeight) {
                dispatch({
                    type: "fixed",
                    value: true
                });
            }
            else {
                dispatch({
                    type: "fixed",
                    value: false
                });
            }
        };

        window.addEventListener("scroll", exe);

        return () => window.removeEventListener("scroll", exe);
    }, [innerPageTitleHeightSelector, breadcrumbsHeightSelector, headerHeightSelector, path, dispatch]);

    return (
        <>
            <div className={clsx(
                "w-[100%] py-[30px] bg-[#fff] z-10",
                {
                    "fixed top-[80px]": isFixedSelector
                } 
            )} ref={categoryBoxRef}>
                <ul className="flex w-fit mx-auto">
                    {
                        props.product.map((item: productItem, index: number) => {
                            return (
                                <li className={clsx(
                                    "relative text-[18px] px-[30px]",
                                    "cursor-pointer hover:text-[#231916] before:content-[''] before:absolute before:top-[50%]",
                                    "before:right-0 before:w-[1px] before:h-[20px] before:translate-y-[-50%]",
                                    "before:bg-[#dcdcdc] text-[#231916]",
                                    {
                                        "before:hidden": index == props.product.length - 1,
                                        "text-[#999]": activeId != item.key,
                                        "text-[#231916]": activeId == item.key
                                    }
                                )} key={item.key} onClick={() => setActiveId(item.key)}>{item.title}</li>
                            );
                        })
                    }
                </ul>
            </div>
            
            <div style={{marginTop: getFixedMargin()}}>
                <div className="flex flex-wrap">
                    {
                        (() => {
                            if (activeId == "categoryAll") {
                                if (allProducts.length) {
                                    return (
                                        allProducts.map((item: item, index: number) => {
                                            return(
                                                <Poster item={item} key={index} />
                                            );
                                        })
                                    );
                                }
                            }
                            else {
                                if (categoryProducts.length) {
                                    return (
                                        categoryProducts.map((item: item, index: number) => {
                                            return (
                                                <Poster item={item} key={index} />
                                            );
                                        })
                                    );
                                }
                            }
                        })()
                    }  
                </div>
            </div>
        </>
    );
};

export default App;