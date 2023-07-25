import { useEffect, useState } from "react";
import Style from "./faq.module.css";

const faqs = [ 1, 2 ]

export default function faq() {
    const [faq, setFaq] = useState(1);

    useEffect(() => {
        faqs.forEach((f) => {
            if (f === faq) {
                document.getElementById(`faqDrop_dropdown_${f}`).style.display = "block";
                document.getElementById(`faqDrop_icon_${f}`).style.transform = "rotate(0deg)";
            } else {
                document.getElementById(`faqDrop_dropdown_${f}`).style.display = "none";
                document.getElementById(`faqDrop_icon_${f}`).style.transform = "rotate(180deg)";
            }
        });
    }, [ faq ]);

    return (
        <>
            <div className={Style.faq}>
                <div className={Style.background_set}>
                    <img src="/dish_7.svg" alt="dish" />
                </div>
                <div className={Style.faq_container}>
                    <h1>Frequently asked questions</h1>
                </div>
            </div>
            <div className={Style.faq_peras}>
                <div id="faqDrop_1" className={Style.FaqOptions}>
                    <div
                        onClick={() => {
                            if(faq == 1) {
                                setFaq(0);
                            }else {
                                setFaq(1);
                            }
                        }}
                        className={Style.FaqOptions_head}
                    >
                        <h3>Frequently asked questions</h3>
                        <svg
                            id={`faqDrop_icon_1`}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M19.6653 16.6653C19.219 17.1116 18.4953 17.1116 18.049 16.6653L12 10.6162L5.95098 16.6653C5.50467 17.1116 4.78105 17.1116 4.33473 16.6653C3.88842 16.219 3.88842 15.4953 4.33473 15.049L11.1919 8.19188C11.6382 7.74556 12.3618 7.74556 12.8081 8.19188L19.6653 15.049C20.1116 15.4953 20.1116 16.219 19.6653 16.6653Z"
                                fill="#545454"
                            />
                        </svg>
                    </div>
                    <div
                        id="faqDrop_dropdown_1"
                        className={Style.FaqOptions_body}
                    >
                        <div className={Style.FaqFields}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Incidunt, illum veritatis
                                dignissimos qui reprehenderit id aspernatur
                                mollitia esse quisquam adipisci? Similique
                                provident deserunt laudantium voluptatibus
                                delectus. Optio maiores quos labore!
                            </p>
                        </div>
                    </div>
                </div>
                <div id="faqDrop_2" className={Style.FaqOptions}>
                    <div
                        onClick={() => {
                            if(faq == 2) {
                                setFaq(0);
                            }else {
                                setFaq(2);
                            }
                        }}
                        className={Style.FaqOptions_head}
                    >
                        <h3>Frequently asked questions</h3>
                        <svg
                            id={`faqDrop_icon_2`}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M19.6653 16.6653C19.219 17.1116 18.4953 17.1116 18.049 16.6653L12 10.6162L5.95098 16.6653C5.50467 17.1116 4.78105 17.1116 4.33473 16.6653C3.88842 16.219 3.88842 15.4953 4.33473 15.049L11.1919 8.19188C11.6382 7.74556 12.3618 7.74556 12.8081 8.19188L19.6653 15.049C20.1116 15.4953 20.1116 16.219 19.6653 16.6653Z"
                                fill="#545454"
                            />
                        </svg>
                    </div>
                    <div
                        id="faqDrop_dropdown_2"
                        className={Style.FaqOptions_body}
                    >
                        <div className={Style.FaqFields}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Incidunt, illum veritatis
                                dignissimos qui reprehenderit id aspernatur
                                mollitia esse quisquam adipisci? Similique
                                provident deserunt laudantium voluptatibus
                                delectus. Optio maiores quos labore!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
