
"use client";

import { useState, useEffect } from "react";

import Poster from "../../../../components/poster/mobile";

interface Props {
    id: string,
    productLists: {
        product: productItem []
    };
};

interface productItem {
    key: string,
    title: string,
    items: item []
};

export interface item {
    name: string,
    titleTag: string,
    itemNumber: string,
    link: string,
    bgSrc: string,
};

const App = (props: Props) => {
    const [otherProducts, setOtherProducts] = useState<item []>([]);
    
    useEffect(() => {
        if (!props.productLists) {
            return;
        }

        const allItems: item [] = [];
        const otherItems: item [] = [];

        props.productLists.product.map((item: productItem) => {
            allItems.push(...item.items)
        });

        allItems.map((_item: item) => {
            if (_item.itemNumber != props.id) {
                otherItems.push(_item);
            }
        });

        setOtherProducts(otherItems);
    }, [props.productLists, props.id]);

    return (
        <div className="py-[60px]">
            <div className="w-[90%] max-w-[1140px] mx-auto">
                <h2 className="relative w-fit text-[18px] text-[#231916] text-center mx-auto mb-[20px] pb-[15px] 
                                before:content-[''] before:absolute before:left-[50%] before:bottom-0 before:translate-x-[-50%] before:w-[20px] 
                                before:h-[1px] before:bg-[#999]">其他作品</h2>
                <div className="flex flex-wrap">
                    {
                        otherProducts.map((item: item, index: number) => {
                            return (
                                <Poster item={item} key={index}></Poster>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default App;