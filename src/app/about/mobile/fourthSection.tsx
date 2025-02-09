
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
        <div className="charge relative mb-[60px]">
            <div className="image_box w-[100%] mr-auto pb-0 bg-[#f5f5f5]">
                <Image className="image w-[100%] h-[250px] object-cover" src={sectionContent.imgUrl} width={1530} height={564} alt={sectionContent.title} />
            </div>
            <div className="relative right-0 bottom-0 w-[90%] max-w-[768px] mx-auto py-[30px] bg-[#fff]">
                <h2 className="relative pb-[15px] mb-[20px] before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-[20px] 
                            before:h-[1px] before:bg-[#999]">{sectionContent.title}</h2>
                <p className="intro pb-[30px]">{sectionContent.text}</p>
                <div className="list_box">
                    {
                        sectionContent.content.map((_item: contentItem, _index: number) => {
                            return (
                                <li className="list flex pb-[20px]" key={_index}>
                                    <h3 className="title text-[#121212] mr-[10px] whitespace-nowrap">{_item.title}</h3>
                                    <p className="text min-w-[110px]">{_item.list}</p>
                                </li>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default App;