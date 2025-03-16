
"use client"

import { useState, useEffect } from "react";
import clsx from "clsx";

interface Props {
    videoLists: videoItem [];
};

interface videoItem {
    key: string;
    title: string;
    text: string;
    videoUrl: string;
};

const App = (props: Props) => {
    const [firstVideo, setFirstVideo] = useState<videoItem | null>(null);
    const [otherVideos, setOtherVideos] = useState<videoItem []>([]);

    useEffect(() => {
        const items: videoItem [] = [];

        for (let i = 0; i < props.videoLists.length; i ++) {
            const item = props.videoLists[i];

            if (item.key == "1") {
                setFirstVideo(item);
            }
            else {
                items.push(item);
            }
        };

        setOtherVideos(items);
    }, [props.videoLists]);

    return (
        <div className="relative before:content-[''] before:absolute before:top-[100px] before:left-0 
                    before:w-[100%] before:h-[100%] before:bg-[#f5f5f5] after:content-[''] after:absolute 
                    after:bottom-0 after:left-0 after:w-[100%] after:h-[100px] after:bg-[#fff]">
            <div className="relative mb-[60px]">
                <div className="flex items-end mx-auto w-[90%] max-w-[1140px]">
                    {
                        (() => {
                            if (firstVideo) {
                                return (
                                    <>
                                        <div className="relative w-[60%] before:content-[''] before:block before:pb-[56%]">
                                            <iframe className="absolute top-0 left-0 w-[100%] h-[100%]" src={firstVideo.videoUrl} title="YouTube video player"  
                                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" loading="lazy"></iframe>
                                        </div>
                                        <div className="p-[60px]">
                                            <h2>{firstVideo.title}</h2>
                                            <p>{firstVideo.text}</p>
                                        </div>
                                    </>
                                );
                            }
                        })()
                    }
                </div>
            </div>
            <div className="relative bg-[#fff] py-[60px] before:content-[''] before:absolute before:top-0 
                        before:right-0 before:w-[10%] before:h-[100%] before:bg-[#f5f5f5]">
                <div className="flex flex-wrap mx-auto w-[90%] max-w-[1140px]">
                    {
                        (() => {
                            if (otherVideos) {
                                return (
                                    otherVideos.map((item: videoItem, index: number) => {
                                        return (
                                            <div className={clsx(
                                                "w-[calc((100%-60px)/3)] z-[2]",
                                                {
                                                    "mr-[30px]": ((index + 1) % 3) != 0,
                                                    "mr-0": ((index + 1) % 3 ) == 0
                                                }
                                            )} key={index}>
                                                <div className="relative before:content-[''] before:block before:pb-[56%]">
                                                    <iframe className="absolute top-0 left-0 w-[100%] h-[100%]" src={item.videoUrl} loading="lazy"></iframe>
                                                </div>
                                                <div className="px-[15px] py-[20px]">
                                                    <h2>{item.title}</h2>
                                                    <p>{item.text}</p>
                                                </div>
                                            </div>
                                        );
                                    })
                                );
                            }
                        })()
                    }
                </div>
            </div>
        </div>
    );
};

export default App;
