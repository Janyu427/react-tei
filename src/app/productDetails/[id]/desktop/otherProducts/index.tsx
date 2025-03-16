
import Content from "./content";

import api from "@/assets/script/api";

interface Props {
    id: string
};

const App = async (props: Props) => {
    let productLists = await api.product.getFetch();

    productLists = productLists.result;

    return (
        <Content id={props.id} productLists={productLists} />
    );
}

export default App;