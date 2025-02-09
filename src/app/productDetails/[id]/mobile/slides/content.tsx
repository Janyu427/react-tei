
"use client";

import Image from "next/image";

import clsx from "clsx";

import { useEffect, useState, useRef } from "react";

import prevArrow from "@/public/swiper_arrow_left.svg";
import nextArrow from "@/public/swiper_arrow_right.svg";

interface Props {
    detailsContent: {
        productId: string,
        title: string,
        intro: string,
        carouselImgs: string [],
        detailContent: contentItem []
    };
};

interface contentItem {
    key: string,
    title: string,
    list: listItem []
};

interface listItem {
    imgSrc: string,
    text: string
};

const App = (props: Props) => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const imgRefs = useRef<(HTMLImageElement | null) []>([]);
    
    const [activeIndex, setActiveIndex] = useState(0);
    const [scrollOffset, setScrollOffset] = useState(0);

    useEffect(() => {
        if (!props.detailsContent) {
            return;
        }

        if (!imgRefs.current) {
            return;
        }

        if (!carouselRef.current) {
            return;
        }

        const currentCarousel: HTMLDivElement = carouselRef.current;

        const exe = () => {
            let minOffset = currentCarousel.offsetWidth;
            let activeIndex = 0;

            for (let i = 0; i < imgRefs.current.length; i ++) {
                const item = imgRefs.current[i];

                if (item) {
                    const rect = item.getBoundingClientRect();
                    const offset = Math.abs(rect.left + rect.width / 2 - window.innerWidth / 2);

                    if (offset < minOffset) {
                        minOffset = offset;
                        activeIndex = i;
                    }
                }
            };
            
            setActiveIndex(activeIndex);
        }

        currentCarousel.addEventListener("scroll", exe);

        return () => {
            if (currentCarousel) {
                currentCarousel.removeEventListener("scroll", exe);
            }
        };
    }, [props.detailsContent]);

    const handlePrevClick = () => {
        if (carouselRef.current && activeIndex > 0) {
            const prevItem = imgRefs.current[activeIndex - 1];

            if (prevItem) {
                const rect = prevItem.getBoundingClientRect();
                const offsetLeft = rect.width;
                const newScrollOffset = scrollOffset - offsetLeft;

                carouselRef.current.scrollTo({
                    left: newScrollOffset,
                    behavior: 'smooth'
                });

                setScrollOffset(newScrollOffset);
            }
        }
    };
    
    const handleNextClick = () => {
        if (carouselRef.current && activeIndex < imgRefs.current.length - 1) {
            const nextItem = imgRefs.current[activeIndex + 1];

            if (nextItem) {
                const rect = nextItem.getBoundingClientRect();
                const offsetLeft = rect.width;
                const newScrollOffset = scrollOffset + offsetLeft;
                
                carouselRef.current.scrollTo({
                    left: newScrollOffset,
                    behavior: 'smooth'
                });

                setScrollOffset(newScrollOffset);
            }
        }
    };

    return (
        <>
            {
                (() => {
                    if(props.detailsContent) {
                        return (
                            <div className="bg-[#f5f5f5] pt-[60px]">
                                <div className="w-[90%] max-w-[1140px] mx-auto pb-[60px]">
                                    <div>
                                        <h2 className="relative pb-[15px] mb-[20px] before:content-[''] 
                                                    before:absolute before:left-0 before:bottom-0 before:w-[20px] before:h-[1px] 
                                                    before:bg-[#999]">{props.detailsContent.title}</h2>
                                        <p>{props.detailsContent.intro}</p>
                                    </div>
                                </div>
                                <div className="overflow-visible">
                                    <div className="flex w-[90%] max-w-[1140px] mx-auto overflow-x-scroll snap-x snap-mandatory scrollbarHide" ref={carouselRef}>
                                        {
                                            props.detailsContent.carouselImgs.map((_item: string, _index: number) => {
                                                return (
                                                    <div className={clsx(
                                                        "relative block w-[90%] min-w-[90%] snap-start pb-[66.6666%] bg-[#dcdcdc]",
                                                        {
                                                            "mr-[5%]": _index != props.detailsContent.carouselImgs.length - 1,
                                                            "mr-0": _index == props.detailsContent.carouselImgs.length - 1,
                                                            "opacity-70": activeIndex != _index,
                                                        }
                                                    )} key={_index}>
                                                        <Image src={_item} className="absolute w-auto h-[100%] left-[50%] translate-x-[-50%]" width={1140} height={760} alt="" ref={(el) => {imgRefs.current[_index] = el}} />
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="flex justify-between items-center w-[90%] max-w-[1140px] mx-auto py-[30px]">
                                    <div className={clsx(
                                        "relative w-[60px] bg-transparent",
                                        {
                                            "opacity-35": activeIndex == 0
                                        }
                                    )} onClick={handlePrevClick}>
                                        <Image src={prevArrow} width={62} height={8} alt="前一個"></Image>
                                    </div>
                                    <div className="relative w-[45px] h-[45px] before:content-[''] before:absolute 
                                                before:bottom-[22px] before:left-0 z-[1] before:w-[45px] before:h-[1px] before:bg-[#999] 
                                                before:-rotate-45">
                                        <span className="count absolute top-0 left-0 text-[#121212]">{activeIndex + 1}</span>
                                        <span className="total absolute bottom-0 right-[5px] text-[#999]">{props.detailsContent.carouselImgs.length}</span>
                                    </div>
                                    <div className={clsx(
                                        "relative w-[60px] bg-transparent test",
                                        {
                                            "opacity-35": activeIndex == props.detailsContent.carouselImgs.length - 1
                                        }
                                    )} onClick={handleNextClick}>
                                        <Image src={nextArrow} width={62} height={8} alt="下一個"></Image>
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