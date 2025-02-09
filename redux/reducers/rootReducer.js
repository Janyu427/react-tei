
import { combineReducers } from "redux";

import fixedReducer from "./fixedReducer";
import breadcrumbsReducer from "./breadcrumbs/rootReducer";
import headerReducer from "./header/rootReducer";
import innerPageTitleReducer from "./innerPageTitle/rootReducer";
import mobileMenuReducer from "./mobileMenu/rootReducer";
import productCategoryReducer from "./productCategory/rootReducer";

const app = combineReducers({
    fixed: fixedReducer,
    breadcrumbs: breadcrumbsReducer,
    header: headerReducer,
    mobileMenu: mobileMenuReducer,
    innerPageTitle: innerPageTitleReducer,
    productCategory: productCategoryReducer
});

export default app;