
import Image from "next/image";

import api from "@/assets/script/api";

const App = async () => {
    const about = await api.about.getFetch();

    let sectionContent = null;
    
    for (let i = 0; i < about.result.length; i ++) {
        const item = about.result[i];

        if (item.key == "firstSection") {
            sectionContent = item;

            break;
        }
    };

    return (
        <div className=" pb-[100px]">
            <div className="w-[95%] ml-auto pb-[60px]">
                <Image className="w-[100%]" src={sectionContent.imgUrl} width={1530} height={564} alt={sectionContent.title} />
            </div>
            <div className="max-w-[800px] mx-auto my-0">
                <div className="w-[90%] mx-auto">
                    <h2 className="relative w-fit text-[18px] text-[#231916] text-center mx-auto mb-[20px] pb-[15px] 
                                before:content-[''] before:absolute before:left-[50%] before:bottom-0 before:translate-x-[-50%] before:w-[20px] 
                                before:h-[1px] before:bg-[#999]">{sectionContent.title}</h2>
                    <p className="text intro">{sectionContent.text}</p>
                </div>
            </div>
        </div>
    );
}

export default App;