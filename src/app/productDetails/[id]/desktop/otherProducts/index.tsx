
import Content from "./content";

import api from "@/assets/script/api";

interface Props {
    id: string
};

const App = async (props: Props) => {
    const productLists = await api.product.getCategory.getFetch();

    return (
        <Content id={props.id} productLists={productLists} />
    );
}

export default App;