
import api from "@/assets/script/api";

import Content from "./content";

const App = async () => {
    let menu = await api.menu.getFetch();
    let socialMedia = await api.socialMedia.getFetch();

    menu = menu.result;
    socialMedia = socialMedia.result;

    return (
       <Content menu={menu} socialMedia={socialMedia} />
    );
};

export default App;