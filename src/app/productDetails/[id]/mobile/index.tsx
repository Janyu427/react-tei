
import OtherProducts from "./otherProducts/index";
import Slides from "./slides/index";
import TabContent from "./tabContent/index";

interface Props {
    id: string
};

const App = (props: Props) => {
    return (
        <>
            <Slides id={props.id} />
            <TabContent id={props.id} />
            <OtherProducts id={props.id} />
        </>
    );
};

export default App;