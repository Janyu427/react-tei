
import Content from "./content";

import api from "@/assets/script/api";

interface Props {
    id: string
};

const App = async (props: Props) => {
    const productDetails = await api.productDetails.getFetch(props.id);

    const detailContent = productDetails.detailContent;

    return (
        <Content detailContent={detailContent} />
    );
};

export default App;