
import api from "@/assets/script/api";

import Content from "./content";

const App = async () => {
    let product = await api.product.getFetch();

    product = [
        ...product.result, 
        { 
            key: "categoryAll", 
            title: "所有", 
            items: [] 
        }
    ];

    return (
       <Content product={product} />
    );
};

export default App;