
import api from "@/assets/script/api";

import Content from "./content";

const App = async () => {
    const header = await api.companyInfo.getFetch();

    return (
       <Content header={header} />
    );
};

export default App;