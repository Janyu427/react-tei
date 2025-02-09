
import api from "@/assets/script/api";

import Content from "./content";

const App = async () => {
    const videoLists = await api.videoSection.getFetch();

    return (
        <Content videoLists={videoLists} />
    );
};

export default App;