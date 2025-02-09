
import Content from "./content";

import api from "@/assets/script/api";

const App = async () => {
    const contact = await api.contact.getFetch();

    return (
        <Content contact={contact} />
    );
};

export default App;