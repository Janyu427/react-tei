
import Image from "next/image";
import clsx from "clsx";

import api from "@/assets/script/api";

interface contentItem {
    title: string,
    list: string
};

interface listItem {
    imgUrl: string, 
    name: string, 
    position: string, 
    content: contentItem []
};

const App = async () => {
    const about = await api.about.getFetch();

    let sectionContent = null;
    
    for (let i = 0; i < about.result.length; i ++) {
        const item = about.result[i];

        if (item.key == "secondSection") {
            sectionContent = item;

            break;
        }
    };

    return (
        <div className="team_section bg-[#f5f5f5] pt-[60px] pb-[200px]">
            <div className="w-[90%] max-w-[1140px] mx-auto">
                <h2 className="section_title relative mx-auto mb-[60px] pb-[15px] text-center w-fit
                                before:content-[''] before:absolute before:left-[50%] before:bottom-0 before:translate-x-[-50%] before:w-[20px] 
                                before:h-[1px] before:bg-[#999]">{sectionContent.title}</h2>
                    {
                    sectionContent.list.map((_item: listItem, _index: number) => {
                        return (
                            <div className={clsx(
                                "item flex justify-between pb-[50px] border-b border-dashed border-[#dcdcdc]",
                                {
                                    "flex-row-reverse": _index % 2 != 0,
                                    "border-none": _index == sectionContent.list.length - 1,
                                    "mb-[60px]": _index != sectionContent.list.length - 1
                                }
                            )} key={_index}>
                                <div className="image_box w-[40%]">
                                    <Image className="image w-[100%]" src={_item.imgUrl} alt="" width="435" height="436"/>
                                </div>

                                <div className="text_box w-[50%]">
                                    <div className="title_box pb-[30px]">
                                        <h3 className="subtitle m-0 pb-[10px]">{_item.name}</h3>

                                        <p className="position relative text-[14px] text-[#666] m-0 pl-[45px] 
                                                    before:content[''] before:absolute before:top-[50%] before:left-0 before:w-[30px] 
                                                    before:h-[1px] before:bg-[#999] before:translate-y-[-50%]">{_item.position}</p>
                                    </div>

                                    <div className="content list_box">
                                        {
                                            _item.content.map((listItem: contentItem, listIndex: number) => {
                                                return (
                                                    <div className="list flex pb-[20px]" key={listIndex}>
                                                        <h4 className="title text-[15px] text-[#121212] mr-[40px]">{listItem.title}</h4>
                                                        <p className="text m-0">{listItem.list}</p>
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default App;