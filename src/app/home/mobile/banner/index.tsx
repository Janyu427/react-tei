
import api from "@/assets/script/api";

import Content from "./content";

const App = async () => {
    const banner = await api.banner.getFetch();
    const companyInfo = await api.companyInfo.getFetch();

    return (
       <Content banner={banner} companyInfo={companyInfo} />
    );
};

export default App;