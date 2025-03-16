
import api from "@/assets/script/api";

import Content from "./content";

const App = async () => {
    let banner = await api.banner.getFetch();
    let menu = await api.menu.getFetch();

    banner = banner.result;
    menu = menu.result;

    return (
       <Content banner={banner} menu={menu} />
    );
};

export default App;