
import type { item } from "../../../productDetails/[id]/desktop/otherProducts/content";

import Link from "next/link";
import Image from "next/image";

import defaultImg from "@/public/default.jpg";

interface Props {
    item: item
};

const App = (props: Props) => {
    return(
        <Link className="relative group w-[25%]
                    before:content-[''] before:absolute before:top-0 before:left-0 before:w-[100%] before:h-[100%] before:bg-[#000] before:bg-opacity-50
                    before:opacity-0 before:z-[1] hover:before:opacity-100 " 
                href={`/productDetails/${props.item.itemNumber}`} title={props.item.titleTag}>
            <div className="relative before:content-[''] before:block before:pb-[100%]">
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
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 z-[1] group-hover:opacity-100">
                    <h3 className="text-[#fff] text-[18px] px-[10px] py-[45px]
                                    before:content-[''] before:absolute 
                                    before:top-0 before:left-[50%] before:w-[1px] before:h-[30px] before:translate-x-[-50%]
                                    before:bg-[#fff] after:content-[''] after:absolute 
                                    after:top-0 after:left-[50%] after:w-[1px] after:h-[30px] after:translate-x-[-50%]
                                    after:bg-[#fff]">{props.item.name}</h3>
                </div>
            </div>
        </Link>               
    );
};

export default App;