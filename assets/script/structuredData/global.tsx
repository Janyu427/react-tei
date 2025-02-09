
import Script from "next/script";

const App = () => {
    return (
        <Script id="Website" type="application/ld+json">
            {
                JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "url": "https://www.tei.com.tw/",
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://query.example.com/search?q={search_term_string}"
                        },
                        "query-input": "required name=search_term_string"
                    }
                })
            }
        </Script>
    );
};

export default App;