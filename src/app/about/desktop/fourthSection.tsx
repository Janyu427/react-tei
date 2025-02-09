
import Image from "next/image";

import api from "@/assets/script/api";

interface contentItem {
    title: string, 
    list: string
};

const App = async () => {
    const about = await api.about.getFetch();

    let sectionContent = null;
    
    for (let i = 0; i < about.about.length; i ++) {
        const item = about.about[i];

        if (item.key == "fourthSection") {
            sectionContent = item;

            break;
        }
    };

    return (
        <div className="charge relative mb-[100px] max-[768px]:mb-[60px]">
            <div className="image_box w-[95%] mr-auto pb-[100px] bg-[#f5f5f5]">
                <Image className="image w-[100%] h-[565px] object-cover" src={sectionContent.imgUrl} width={1530} height={564} alt={sectionContent.title} />
            </div>
            <div className="text_box absolute right-0 bottom-0 w-[90%] max-w-[768px] p-[60px] bg-[#fff]">
                <h2 className="relative pb-[15px] mb-[20px] before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-[20px] 
                            before:h-[1px] before:bg-[#999]">{sectionContent.title}</h2>
                <p className="intro pb-[30px]">{sectionContent.text}</p>
                <div className="list_box">
                    {
                        sectionContent.content.map((item: contentItem, index: number) => {
                            return (
                                <li className="list flex pb-[20px]" key={index}>
                                    <h3 className="title text-[#121212] mr-[10px]">{item.title}</h3>
                                    <p className="text mr-[40px] mr-[10px]">{item.list}</p>
                                </li>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default App;