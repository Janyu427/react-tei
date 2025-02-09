
"use client"

import { useState, useRef, useEffect, useTransition } from "react";

import emailjs from "@emailjs/browser";
import clsx from "clsx";

interface Props {
    contact: {
        sectionTitle: string,
        sectionText: string,
        sectionBg: string,
        formContent: contentItem []
    }
};

interface contentItem {
    title: string,
    must: boolean,
    fieldType: string
};

const App = (props: Props) => {
    const form = useRef<HTMLFormElement | null>(null);

    const [ccName, setCcName] = useState<string>("");
    const [ccEmail, setCcEmail] = useState<string>("");
    const [ccNumber, setCcNumber] = useState<string>("");
    const [ccInfo, setCcInfo] = useState<string>("");
    const [ccNameError, setCcNameError] = useState<string>("");
    const [ccEmailError, setCcEmailError] = useState<string>("");
    const [ccNumberError, setCcNumberError] = useState<string>("");
    const [ccInfoError, setCcInfoError] = useState<string>("");

    const [isPending, startTransition] = useTransition();

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let pass = true;

        if (!ccName || !ccName.match(/^[A-Za-z\u4e00-\u9fa5 ]+$/)) {
            setCcNameError("請輸入姓名");
            pass = false;
        }

        if (!ccEmail || !ccEmail.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
            setCcEmailError("請輸入Email");
            pass = false;
        }

        if (!ccNumber || !ccNumber.match(/^[0-9]+$/)) {
            setCcNumberError("請輸入電話");
            pass = false;
        }

        if (!ccInfo) {
            setCcInfoError("請輸入聯絡事項");
            pass = false;
        }

        if (!pass) {
            return;
        }

        // emailjs.sendForm("serviceGmail", "template_mdq69qa", form.current, {
        //     publicKey: "C86kchXppbWz4zPNZ",}).then(() => {
        //         console.log("SUCCESS!");
        //         form.current.reset();

        //         setCcName("");
        //         setCcEmail("");
        //         setCcNumber("");
        //         setCcInfo("");
        //     },
        //     (error) => {
        //         console.log("FAILED...", error.text);
        //     },
        // );
        
        if (form.current) {
            const formElement = form.current;
        
            startTransition(async () => {
                await emailjs.sendForm("serviceGmail", "template_mdq69qa", formElement, {
                    publicKey: "C86kchXppbWz4zPNZ",}).then(() => {
                        formElement.reset();
            
                        setCcName("");
                        setCcEmail("");
                        setCcNumber("");
                        setCcInfo("");
                    }).catch((err) => {
                        throw err;
                    });
            });
        }
    };

    useEffect(() => {
        setCcNameError("");
    }, [ccName]);

    useEffect(() => {
        setCcEmailError("");
    }, [ccEmail]);

    useEffect(() => {
        setCcNumberError("");
    }, [ccNumber]);

    useEffect(() => {
        setCcInfoError("");
    }, [ccInfo]);

    return (
        <div>
            <div className="relative py-[100px] before:content-[''] 
                        before:absolute before:w-[90%] before:h-[100%] before:top-0 before:right-0 
                        before:bg-no-repeat before:bg-center before:bg-cover before:bg-contactSection">
                <div className="relative w-[90%] max-w-[1140px] mx-auto">
                    <div className="pb-[60px] ">
                        <h2 className="relative text-center mb-[20px] pb-[15px] before:content-[''] 
                                    before:absolute before:left-[50%] before:bottom-0 before:w-[20px] before:h-[1px] 
                                    before:bg-[#999] before:translate-x-[-50%]">{props.contact.sectionTitle}</h2>
                        <p className="text-center">{props.contact.sectionText}</p>
                    </div>
                    <div className="max-w-[70vw] px-[30px] py-[60px] bg-[#fff] mx-auto">
                        <form className="mx-auto" ref={form} onSubmit={sendEmail}>
                            <div className="flex mb-[30px] items-start justify-between">
                                <label className="flex items-center">
                                    <p className="text-[#231916]">姓名</p>
                                    <span className="text-[#666] text-[12px] ml-[5px]">(※)</span>   
                                </label>

                                <div className="w-[70%]">
                                    <input type="text" className={clsx(
                                        "w-[100%] h-[30px] text-[13px] p-[5px] bg-[#fff] rounded-[3px] border border-[#cfcfcf] focus:outline-none",
                                        {
                                            "border-[#e00005] focus:border-[#b90004]": ccNameError,
                                            "focus:border-[#999]": !ccNameError
                                        }
                                    )}  onChange={(event) => setCcName(event.target.value)} name="user_name" />

                                    {
                                        (() => {
                                            if (!ccName || !ccName.match(/^[A-Za-z\u4e00-\u9fa5 ]+$/)) {
                                                return (
                                                    <div className="text-[13px] text-[#e00005] ml-[10px]">{ccNameError}</div>
                                                );
                                            }
                                        })()
                                    }
                                </div>
                            </div>

                            <div className="flex mb-[30px] items-start justify-between">
                                <label className="flex items-center">
                                    <p className="text-[#231916]">E-mail</p>
                                    <span className="text-[#666] text-[12px] ml-[5px]">(※)</span>   
                                </label>
                                <div className="w-[70%]">
                                    <input type="email" className={clsx(
                                        "w-[100%] h-[30px] text-[13px] p-[5px] bg-[#fff] rounded-[3px] border border-[#cfcfcf] focus:outline-none",
                                        {
                                            "border-[#e00005] focus:border-[#b90004]": ccEmailError,
                                            "focus:border-[#999]": !ccEmailError
                                        }
                                    )}  onChange={(event) => setCcEmail(event.target.value)} name="user_email" />

                                    {
                                        (() => {
                                            if (!ccEmail || !ccEmail.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
                                                return (
                                                    <div className="text-[13px] text-[#e00005] ml-[10px]">{ccEmailError}</div>
                                                );
                                            }
                                        })()
                                    }
                                </div>
                            </div>

                            <div className="flex mb-[30px] items-start justify-between">
                                <label className="flex items-center">
                                    <p className="text-[#231916]">地址</p>
                                </label>
                                <input type="text" className="w-[70%] h-[30px] text-[13px] p-[5px] 
                                                            bg-[#fff] rounded-[3px] border border-[#cfcfcf]
                                                            focus:outline-none focus:border-[#999]" name="user_address" />
                            </div>

                            <div className="flex mb-[30px] items-start justify-between">
                                <label className="flex items-center">
                                    <p className="text-[#231916]">電話</p>
                                    <span className="text-[#666] text-[12px] ml-[5px]">(※)</span>   
                                </label>
                                <div className="w-[70%]">
                                    <input type="text" className={clsx(
                                        "w-[100%] h-[30px] text-[13px] p-[5px] bg-[#fff] rounded-[3px] border border-[#cfcfcf] focus:outline-none",
                                        {
                                            "border-[#e00005] focus:border-[#b90004]": ccNumberError,
                                            "focus:border-[#999]": !ccNumberError
                                        }
                                    )}  onChange={(event) => setCcNumber(event.target.value)} name="user_phone" />

                                    {
                                        (() => {
                                            if (!ccNumber || ccNumber.match(/[^0-9]/)) {
                                                return (
                                                    <div className="text-[13px] text-[#e00005] ml-[10px]">{ccNumberError}</div>
                                                );
                                            }
                                        })()
                                    }
                                </div>
                            </div>
                            <div className="flex mb-[30px] items-start justify-between">
                                <label className="flex items-center">
                                    <p className="text-[#231916]">聯絡事項</p>
                                    <span className="text-[#666] text-[12px] ml-[5px]">(※)</span>   
                                </label>

                                <div className="w-[70%]">
                                    <textarea className={clsx(
                                        "w-[100%] p-[5px] rounded-[3px] border border-[#cfcfcf] focus:outline-none",
                                        {
                                            "border-[#e00005] focus:border-[#b90004]": ccInfoError,
                                            "focus:border-[#999]": !ccInfoError
                                        }
                                    )} onChange={(event) => setCcInfo(event.target.value)}  name="message" rows={9}></textarea>

                                    {
                                        (() => {
                                            if (!ccInfo) {
                                                return (
                                                    <div className="text-[13px] text-[#e00005] ml-[10px]">{ccInfoError}</div>
                                                );
                                            }
                                        })()
                                    }
                                </div>
                            </div>
                            
                            <div>
                                <button className={clsx(
                                    "relative text-left text-[13px] p-[10px] w-[250px]", 
                                    "border-b border-[#cfcfcf] cursor-pointer hover:text-[#999]", 
                                    "before:content-['>'] before:absolute before:top-[50%] before:right-[10px]", 
                                    "before:text-[#231916] before:translate-y-[-50%] hover:before:text-[#cfcfcf]",
                                    {
                                        "text-[#231916]": !isPending,
                                        "text-[#cfcfcf] before:text-[#cfcfcf]": isPending
                                    }
                                )} type="submit" value="Send" disabled={isPending}>{isPending ? "寄出中..." : "確認送出"}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;