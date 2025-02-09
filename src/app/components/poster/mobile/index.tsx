
import type { item } from "../../../productDetails/[id]/mobile/otherProducts/content";

import Link from "next/link";
import Image from "next/image";

import defaultImg from "@/public/default.jpg";

interface Props {
    item: item
};

const App = (props: Props) => {
    return (
        <Link className="relative group w-[50%] bg-cover bg-no-repeat bg-center
                        after:content-[''] after:block after:pb-[100%]" 
                    href={`/productDetails/${props.item.itemNumber}`} title={props.item.titleTag}>

            {
                (() => {
                    if (props.item.bgSrc) {
                        return (
                            <Image className="object-cover" src={props.item.bgSrc} fill sizes="100%" alt={props.item.titleTag} />
                        );
                    }
                    else {
                        return (
                            <Image src={defaultImg} fill sizes="100%" alt={props.item.titleTag} />
                        );
                    }
                })()
            }               
            <div className="w-[100%] text_box absolute top-auto bottom-0 left-0 opacity-100 bg-[#fff] z-[1] bg-opacity-80">
                <h3 className="text-[#231916] text-[14px] text-center px-[10px] py-[20px]">{props.item.name}</h3>
            </div>
        </Link>
    );
};

export default App;