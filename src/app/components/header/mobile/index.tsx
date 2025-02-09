
import api from "@/assets/script/api";

import Content from "./content";

const App = async () => {
    const companyInfo = await api.companyInfo.getFetch();

    return (
       <Content companyInfo={companyInfo} />
    );
};

export default App;