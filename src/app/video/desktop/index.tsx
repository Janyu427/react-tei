
import api from "@/assets/script/api";

import Content from "./content";

const App = async () => {
    let videoLists = await api.video.getFetch();

    videoLists = videoLists.result;

    return (
        <Content videoLists={videoLists} />
    );
};

export default App;