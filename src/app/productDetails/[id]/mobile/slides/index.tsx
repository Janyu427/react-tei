
import Content from "./content";

import api from "@/assets/script/api";

interface Props {
    id: string
};

const App = async (props: Props) => {
    const productDetails = await api.product.getDetails.getFetch();

    let detailsContent = null;

    for (let i = 0; i < productDetails.productDetails.length; i ++) {
        const item = productDetails.productDetails[i];

        if (item.productId == props.id) {
            detailsContent = item;
        }
    };

    return (
        <Content detailsContent={detailsContent} />
    );
};

export default App;