
import clsx from "clsx";

import api from "@/assets/script/api";

interface contentItem {
    title: string,
    list: string []
};

const App = async () => {
    const about = await api.about.getFetch();

    let sectionContent = null;
    
    for (let i = 0; i < about.about.length; i ++) {
        const item = about.about[i];

        if (item.key == "thirdSection") {
            sectionContent = item;

            break;
        }
    };

    return (
        <div className="process_section relative w-[90%] bg-[#fff] mt-[-60px] mx-auto pt-[60px] pb-[100px]">
            <div className="container max-w-[1140px] flex flex-col items-center mx-auto">
                <div className="title_box w-[100%] pb-[30px]">
                    <h2 className="relative pb-[15px] mb-[20px] before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-[20px] 
                                before:h-[1px] before:bg-[#999]">{sectionContent.title}</h2>
                    <p className="en_text text-[20px] text-[#999] m-0">{sectionContent.enTitle}</p>
                </div>
                <div className="content_box w-[100%]">
                    <ul className="list_box">
                        {
                            sectionContent.content.map((_item: contentItem, _index: number) => {
                                return (
                                    <li className={clsx(
                                        "list relative pb-[30px] pl-[50px] before:content-[''] ",
                                        "before:absolute before:top-[20px] before:left-0 before:w-[14px]",
                                        "before:h-[14px] before:border before:border-[#dcdcdc] before:rounded-[100%]",
                                        "after:content-[''] after:absolute after:top-[34px] after:left-[7px] after:w-[1px]", 
                                        "after:h-[calc(100%-14px)] after:bg-[#dcdcdc]",
                                        {
                                            "after:hidden": _index == sectionContent.content.length - 1
                                        }
                                    )} key={_index}>
                                        <p className="step_count">{_item.title}</p>
                                        {
                                            _item.list.map((listItem: string, listIndex: number) => {
                                                return (
                                                    <h3 className="text" key={listIndex}>{listItem}</h3>
                                                );
                                            })
                                        }
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;