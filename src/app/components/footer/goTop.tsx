
"use client"

const App = () => {
    const onClick = () => {
        scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className="absolute top-0 right-0 cursor-pointer z-99 hover:text-[#999]" onClick={onClick}>
            <p className="relative text-[#121212] text-[12px] font-500 pt-[55px] mb-0 vertical_text before:content-['']
                before:absolute before:top-0 before:left-[50%] before:w-[1px] before:h-[40px] before:bg-[#999] before:translate-x-[-50%]">Page Top</p>
        </div>
    );
};

export default App;