
import HeaderDesktop from "../../components/header/desktop";
import HeaderMobile from "../../components/header/mobile";
import InnerPageTitleDesktop from "../../components/innerPageTitle/desktop";
import InnerPageTitleMobile from "../../components/innerPageTitle/mobile";
import BreadcrumbsDesktop from "../../components/breadcrumbs/desktop";
import BreadcrumbsMobile from "../../components/breadcrumbs/mobile";
import Footer from "../../components/footer";

import { headers } from 'next/headers';

const App = async ({ children }: { children: React.ReactNode }) => {
    const headersList = await headers();
    const userAgent = headersList.get("user-agent") || "";
    const isMobile = /mobile/i.test(userAgent);

    return (
        <>
            {
                (() => {
                    if (isMobile) {
                        return (
                            <>
                                <HeaderMobile />
                                <InnerPageTitleMobile />
                                <BreadcrumbsMobile />
                            </>
                        );
                    }
                    else {
                        return (
                            <>
                                <HeaderDesktop />
                                <InnerPageTitleDesktop />
                                <BreadcrumbsDesktop />
                            </>
                        );
                    }
                })()
            }
            
            {children}
            <Footer />
        </>
    );
};

export default App;