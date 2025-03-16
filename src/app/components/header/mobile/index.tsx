
import api from "@/assets/script/api";

import Content from "./content";

const App = async () => {
    let menu = await api.menu.getFetch();
    let socialMedia = await api.socialMedia.getFetch();
    let contactInfo = await api.contactInfo.getFetch();

    menu = menu.result;
    socialMedia = socialMedia.result;
    contactInfo = contactInfo.result;

    return (
       <Content menu={menu} socialMedia={socialMedia} contactInfo={contactInfo} />
    );
};

export default App;