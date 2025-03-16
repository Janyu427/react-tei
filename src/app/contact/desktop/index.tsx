
import Content from "./content";

import api from "@/assets/script/api";

const App = async () => {
    let contact = await api.contact.getFetch();

    contact = contact.result;

    return (
        <Content contact={contact} />
    );
};

export default App;