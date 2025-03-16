
import api from "@/assets/script/api";

import Content from "./content";

const App = async () => {
    let banner = await api.banner.getFetch();
    let menu = await api.menu.getFetch();
    let contactInfo = await api.contactInfo.getFetch();

    banner = banner.result;
    menu = menu.result;
    contactInfo = contactInfo.result;

    return (
       <Content banner={banner} menu={menu} contactInfo={contactInfo} />
    );
};

export default App;