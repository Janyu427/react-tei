
"use client"

import { useState, useEffect } from "react";

interface Props {
    videoLists: {
        video: videoItem []
    };
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

        for (let i = 0; i < props.videoLists.video.length; i ++) {
            const item = props.videoLists.video[i];

            if (item.key == "1") {
                setFirstVideo(item);
            }
            else {
                items.push(item);
            }
        };

        setOtherVideos(items);
    }, [props.videoLists.video]);

    // const getFirstVideo = () => {
    //     for (let i = 0; i < props.videoLists.video.length; i ++) {
    //         const item = props.videoLists.video[i];

    //         if (item.key == "1") {
    //             return item;
    //         }
    //     };
    // };

    // const getOtherVideos = () => {
    //     let items: any[] = [];

    //     for (let i = 0; i < props.videoLists.video.length; i ++) {
    //         const item = props.videoLists.video[i];

    //         if (item.key != "1") {
    //             items.push(item);
    //         }
    //     };

    //     return items;
    // };

    // const firstVideo = getFirstVideo();
    // const otherVideos = getOtherVideos();

    return (
        <div className="relative before:content-[''] before:absolute before:top-[100px] before:left-0 
                    before:w-[100%] before:h-[100%] before:bg-[#f5f5f5] after:content-[''] after:absolute 
                    after:bottom-0 after:left-0 after:w-[100%] after:h-[100px] after:bg-[#fff]">
            <div className="relative mb-[60px]">
                <div className="flex flex-col items-start mx-auto w-[90%] max-w-[1140px]">
                    {
                        (() => {
                            if (firstVideo) {
                                return (
                                    <>
                                        <div className="relative w-[100%] before:content-[''] before:block before:pb-[56%]">
                                            <iframe className="absolute top-0 left-0 w-[100%] h-[100%]" src={firstVideo.videoUrl} title="YouTube video player"  
                                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" loading="lazy"></iframe>
                                        </div>
                                        <div className="p-[60px] px-[15px] py-[30px]">
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
            <div className="relative bg-[#fff] py-[60px]">
                <div className="flex flex-wrap mx-auto w-[90%] pr-0">
                    {
                        (() => {
                            if (otherVideos) {
                                return (
                                    otherVideos.map((item: videoItem, index: number) => {
                                        return (
                                            <div className="w-[100%] mb-[30px] mr-0" key={index}>
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