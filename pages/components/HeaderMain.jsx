import { useEffect, useState } from "react";
import Style from "./HeaderMain.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Header() {
    const [ selectRoute, setSelectRoute ] = useState("")
    const router = useRouter();

    useEffect(() => {
        setSelectRoute(router.pathname);
    }, [ router.pathname ]);

    useEffect(() => {
        if(document.querySelector("body").clientWidth <= 1000) {
            const alert_bar = document.querySelector("#aleart_line_text");
            alert_bar.innerHTML = "<b>TBC10 to get 10$ off | BOSTON20 for 20% off<b>";
        }
    }, []);

    return (
        <>
            <div id="aleart_line" className={Style.aleart_line}>
                <p></p>
                <p id="aleart_line_text">
                    Use <b>TBC10 to get 10$</b> off on your first order | Use{" "}
                    <b>BOSTON20 for 20% off</b> to first time customers | Offers
                    cannot be combined | Apply during checkout
                </p>
                <div
                    onClick={(e) => {
                        document.querySelector("#aleart_line").style.display =
                            "none";
                    }}
                    className={Style.alert_line_cross}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.29289 1.29289C1.68342 0.902369 2.31658 0.902369 2.70711 1.29289L8 6.58579L13.2929 1.29289C13.6834 0.902369 14.3166 0.902369 14.7071 1.29289C15.0976 1.68342 15.0976 2.31658 14.7071 2.70711L9.41421 8L14.7071 13.2929C15.0976 13.6834 15.0976 14.3166 14.7071 14.7071C14.3166 15.0976 13.6834 15.0976 13.2929 14.7071L8 9.41421L2.70711 14.7071C2.31658 15.0976 1.68342 15.0976 1.29289 14.7071C0.902369 14.3166 0.902369 13.6834 1.29289 13.2929L6.58579 8L1.29289 2.70711C0.902369 2.31658 0.902369 1.68342 1.29289 1.29289Z"
                            fill="#545454"
                        />
                    </svg>
                </div>
            </div>
            <header className={Style.header}>
                <div className={Style.left}>
                    <img
                        onClick={() => {
                            router.push("/")
                        }}
                        src="/logo_widht_high.svg"
                        alt="logo"
                        className={Style.logo}
                    />
                </div>
                <div className={Style.mid}>
                    <ul>
                        <li>
                            <Link style={{ 
                                background: selectRoute.includes("/browse") ? "rgba(50, 224, 251, 0.15)" : "none", 
                                padding: selectRoute.includes("/browse") ? "0.5rem 1rem" : "none",
                                borderRadius: selectRoute.includes("/browse") ? "12px" : "none"
                            }}
                                href={"/browse"}
                            >Browse Cravings</Link>
                        </li>
                        <li>
                            <Link style={{ 
                                background: selectRoute.includes("/how-it-works") ? "rgba(50, 224, 251, 0.15)" : "none", 
                                padding: selectRoute.includes("/how-it-works") ? "0.5rem 1rem" : "none",
                                borderRadius: selectRoute.includes("/how-it-works") ? "12px" : "none"
                            }} href={"/how-it-works"}>How it works</Link>
                        </li>
                        <li>
                            <Link style={{ 
                                background: selectRoute.includes("/faq") ? "rgba(50, 224, 251, 0.15)" : "none", 
                                padding: selectRoute.includes("/faq") ? "0.5rem 1rem" : "none",
                                borderRadius: selectRoute.includes("/faq") ? "12px" : "none"
                            }} href={"/faq"}>FAQ</Link>
                        </li>
                    </ul>
                </div>
                <div className={Style.right}>
                    <button className="button_main">
                        <p>Cart</p>
                        <div className="button_logo">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0 0V1.6H1.6L4.48 7.672L3.392 9.632C3.272 9.856 3.2 10.12 3.2 10.4C3.2 11.2837 3.91634 12 4.8 12H14.4V10.4H5.136C5.02554 10.4 4.936 10.3105 4.936 10.2C4.936 10.16 4.944 10.128 4.96 10.104L5.68 8.8H11.64C12.24 8.8 12.768 8.464 13.04 7.976L15.904 2.8C15.96 2.672 16 2.536 16 2.4C16 1.95817 15.6418 1.6 15.2 1.6H3.368L2.616 0H0ZM12.8 12.8C11.912 12.8 11.2 13.512 11.2 14.4C11.2 15.2837 11.9163 16 12.8 16C13.6837 16 14.4 15.2837 14.4 14.4C14.4 13.512 13.68 12.8 12.8 12.8ZM3.2 14.4C3.2 13.512 3.912 12.8 4.8 12.8C5.68 12.8 6.4 13.512 6.4 14.4C6.4 15.2837 5.68366 16 4.8 16C3.91634 16 3.2 15.2837 3.2 14.4Z"
                                    fill="black"
                                />
                            </svg>
                        </div>
                        <span>1</span>
                    </button>
                </div>
                <div onClick={(e) => {
                    document.querySelector("#crausla_bar").style.display = "flex";
                }} className={Style.hamebargar}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                    >
                        <rect
                            x="0.8125"
                            y="15"
                            width="24"
                            height="2.5"
                            fill="#545454"
                        />
                        <rect
                            x="0.8125"
                            y="7"
                            width="24"
                            height="2.5"
                            fill="#545454"
                        />
                    </svg>
                </div>
                <div id="crausla_bar" className={Style.crausal_bar}>
                    <div className={Style.top_bar}>
                        <img
                            src="/logo_widht_high.svg"
                            alt="logo"
                            className={Style.logo}
                        />
                        <div onClick={(e) => {
                            document.querySelector("#crausla_bar").style.display = "none";
                        }} className={Style.top_cross}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="49"
                                height="48"
                                viewBox="0 0 49 48"
                                fill="none"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M15.6891 15.3766C16.1912 14.8745 17.0052 14.8745 17.5074 15.3766L24.3125 22.1817L31.1176 15.3766C31.6198 14.8745 32.4338 14.8745 32.9359 15.3766C33.438 15.8787 33.438 16.6927 32.9359 17.1949L26.1308 24L32.9359 30.8051C33.438 31.3073 33.438 32.1213 32.9359 32.6234C32.4338 33.1255 31.6198 33.1255 31.1176 32.6234L24.3125 25.8183L17.5074 32.6234C17.0052 33.1255 16.1912 33.1255 15.6891 32.6234C15.187 32.1213 15.187 31.3073 15.6891 30.8051L22.4942 24L15.6891 17.1949C15.187 16.6927 15.187 15.8787 15.6891 15.3766Z"
                                    fill="#545454"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className={Style.mid_bar}>
                        <div className={Style.mid_top_bar}>
                            <ul>
                                <li>
                                    <Link href={"/"}>Browse Cravings</Link>
                                </li>
                                <li>
                                    <Link href={"/"}>How it works</Link>
                                </li>
                                <li>
                                    <Link href={"/"}>FAQ</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={Style.mid_down_bar}>
                            <div className="logo_show">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="46"
                                    height="45"
                                    viewBox="0 0 46 45"
                                    fill="none"
                                >
                                    <path
                                        d="M23 45C35.4264 45 45.5 34.9264 45.5 22.5C45.5 10.0736 35.4264 0 23 0C10.5736 0 0.5 10.0736 0.5 22.5C0.5 34.9264 10.5736 45 23 45Z"
                                        fill="#32E0FB"
                                        fillOpacity="0.1"
                                    />
                                    <path
                                        d="M21.199 29.393L21.1786 23.0961H18.5V20.3974H21.1786V18.5983C21.1786 16.1702 22.671 15 24.8209 15C25.8507 15 26.7358 15.0772 26.9937 15.1118V17.6493L25.5026 17.65C24.3334 17.65 24.107 18.2097 24.107 19.0312V20.3974H27.4286L26.5357 23.0961H24.107V29.393H21.199Z"
                                        fill="black"
                                    />
                                </svg>
                            </div>
                            <div className="logo_show">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="46"
                                    height="45"
                                    viewBox="0 0 46 45"
                                    fill="none"
                                >
                                    <path
                                        d="M23 45C35.4264 45 45.5 34.9264 45.5 22.5C45.5 10.0736 35.4264 0 23 0C10.5736 0 0.5 10.0736 0.5 22.5C0.5 34.9264 10.5736 45 23 45Z"
                                        fill="#32E0FB"
                                        fillOpacity="0.1"
                                    />
                                    <path
                                        d="M26.3679 19.9422C26.7987 19.9422 27.1479 19.593 27.1479 19.1622C27.1479 18.7314 26.7987 18.3822 26.3679 18.3822C25.9371 18.3822 25.5879 18.7314 25.5879 19.1622C25.5879 19.593 25.9371 19.9422 26.3679 19.9422Z"
                                        fill="black"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M19.75 22.5C19.75 24.2924 21.2076 25.75 23 25.75C24.7924 25.75 26.25 24.2924 26.25 22.5C26.25 20.7076 24.7924 19.25 23 19.25C21.2076 19.25 19.75 20.7076 19.75 22.5ZM21.375 22.5C21.375 21.6038 22.1038 20.875 23 20.875C23.8962 20.875 24.625 21.6038 24.625 22.5C24.625 23.3962 23.8962 24.125 23 24.125C22.1038 24.125 21.375 23.3962 21.375 22.5Z"
                                        fill="black"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M19.75 29H26.25C27.9205 29 29.5 27.4205 29.5 25.75V19.25C29.5 17.5795 27.9205 16 26.25 16H19.75C18.0795 16 16.5 17.5795 16.5 19.25V25.75C16.5 27.4205 18.0795 29 19.75 29ZM18.125 19.25C18.125 18.4903 18.9903 17.625 19.75 17.625H26.25C27.0097 17.625 27.875 18.4903 27.875 19.25V25.75C27.875 26.5097 27.0097 27.375 26.25 27.375H19.75C18.9757 27.375 18.125 26.5243 18.125 25.75V19.25Z"
                                        fill="black"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="low_bar"></div>
                </div>
            </header>
        </>
    );
}
