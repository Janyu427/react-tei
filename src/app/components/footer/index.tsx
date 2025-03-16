
import Top from "./top";
import Bottom from "./bottom";
import GoTop from "./goTop";

import api from "@/assets/script/api";


const App = async () => {
    let contactInfo = await api.contactInfo.getFetch();

    contactInfo = contactInfo.result;

    return (
        <footer className="flex justify-center bg-[#f5f5f5] pt-[40px] pb-[35px]">
            <div className="relative w-[90%] max-w-[1140px] mx-auto">
                <Top contactInfo={contactInfo} />
                <Bottom />
                <GoTop />
            </div>
        </footer>
    );
};

export default App;