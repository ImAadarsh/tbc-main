import Style from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Footer() {
    const [selectRoute, setSelectRoute] = useState("");
    const router = useRouter();

    useEffect(() => {
        setSelectRoute(router.pathname);
    }, [router.pathname]);

    useEffect(() => {
        if(document.querySelector("body").clientWidth <= 1000) {
            if(selectRoute.includes("/browse") && document.querySelector("#foot_bar")) {
                document.querySelector("#foot_bar").style.display = "none";
                document.querySelector("#space").style = "height: 5rem !important; width: auto; display: flex;";
            }else {
                document.querySelector("#foot_bar").style.display = "grid";
                document.querySelector("#space").style = "height: 0 !important; width: 0; display: none;";
            }
        }
    }, [ selectRoute ]);

    return (
        <>
            <span id="space"></span>
            <footer id="foot_bar" className={Style.footer}>
                <div className={Style.footer_top}>
                    <div className={Style.footer_top_sections}>
                        <Image
                            src={"/logo_widht_high.svg"}
                            width={260}
                            height={50}
                            alt={"logo"}
                        />
                        <div className={Style.emial_field}>
                            <input
                                placeholder="Enter your email"
                                type="email"
                                name="email"
                                id="email"
                            />
                            <button>
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
                                        d="M14.4724 1.5283C14.6552 1.71107 14.7158 1.98302 14.628 2.22614L10.2944 14.2261C10.2881 14.2435 10.2811 14.2606 10.2734 14.2774C10.191 14.4573 10.0587 14.6097 9.89213 14.7166C9.72561 14.8235 9.5319 14.8803 9.33403 14.8803C9.13616 14.8803 8.94246 14.8235 8.77594 14.7166C8.61338 14.6123 8.4834 14.4646 8.40062 14.2902L6.17073 9.82993L1.71013 7.59976C1.53583 7.51698 1.38811 7.38701 1.28379 7.22446C1.17693 7.05793 1.12012 6.86423 1.12012 6.66636C1.12012 6.46849 1.17693 6.27479 1.28379 6.10826C1.39066 5.94174 1.54309 5.8094 1.72297 5.72697C1.73977 5.71927 1.75689 5.71227 1.77427 5.70599L13.7746 1.37266C14.0177 1.28487 14.2896 1.34552 14.4724 1.5283ZM7.4788 9.46468L9.28883 13.0852L12.3586 4.58493L7.4788 9.46468ZM11.4159 3.64198L2.91523 6.71159L6.536 8.52186L11.4159 3.64198Z"
                                        fill="black"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className={Style.footer_top_sections}>
                        <ul>
                            <li>
                                <a href={"/browse"}>Browse Cravings</a>
                            </li>
                            <li>
                                <a href={"/ambassadors"}>Ambassador login</a>
                            </li>
                            <li>
                                <a href={"/how-it-works"}>How it works</a>
                            </li>
                        </ul>
                    </div>
                    <div className={Style.footer_top_sections}>
                        <ul>
                            <li>
                                <Link href={"/contact"}>Contact us</Link>
                            </li>
                            <li>
                                <Link href={"/faq"}>FAQ’s</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={Style.footer_top_sections}>
                        <ul>
                            <li>
                                <Link href={"/terms"}>Terms</Link>
                            </li>
                            <li>
                                <Link href={"/privacy"}>Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href={"/accessibility"}>Accessibility statement</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={Style.footer_bottom}>
                    <div className={Style.footer_bottom_left}>
                        <h2>Get 20% off your first order</h2>
                        <div className={Style.social}>
                            <Link href={"/"}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="45"
                                    height="45"
                                    viewBox="0 0 45 45"
                                    fill="none"
                                >
                                    <path
                                        d="M22.5 45C34.9264 45 45 34.9264 45 22.5C45 10.0736 34.9264 0 22.5 0C10.0736 0 0 10.0736 0 22.5C0 34.9264 10.0736 45 22.5 45Z"
                                        fill="#32E0FB"
                                        fillOpacity="0.1"
                                    />
                                    <path
                                        d="M20.699 29.393L20.6786 23.0961H18V20.3974H20.6786V18.5983C20.6786 16.1702 22.171 15 24.3209 15C25.3507 15 26.2358 15.0772 26.4937 15.1118V17.6493L25.0026 17.65C23.8334 17.65 23.607 18.2097 23.607 19.0312V20.3974H26.9286L26.0357 23.0961H23.607V29.393H20.699Z"
                                        fill="black"
                                    />
                                </svg>
                            </Link>
                            <Link href={"/"}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="45"
                                    height="45"
                                    viewBox="0 0 45 45"
                                    fill="none"
                                >
                                    <path
                                        d="M22.5 45C34.9264 45 45 34.9264 45 22.5C45 10.0736 34.9264 0 22.5 0C10.0736 0 0 10.0736 0 22.5C0 34.9264 10.0736 45 22.5 45Z"
                                        fill="#32E0FB"
                                        fillOpacity="0.1"
                                    />
                                    <path
                                        d="M25.8679 19.9418C26.2987 19.9418 26.6479 19.5926 26.6479 19.1618C26.6479 18.7311 26.2987 18.3818 25.8679 18.3818C25.4371 18.3818 25.0879 18.7311 25.0879 19.1618C25.0879 19.5926 25.4371 19.9418 25.8679 19.9418Z"
                                        fill="black"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M19.25 22.5C19.25 24.2924 20.7076 25.75 22.5 25.75C24.2924 25.75 25.75 24.2924 25.75 22.5C25.75 20.7076 24.2924 19.25 22.5 19.25C20.7076 19.25 19.25 20.7076 19.25 22.5ZM20.875 22.5C20.875 21.6038 21.6038 20.875 22.5 20.875C23.3962 20.875 24.125 21.6038 24.125 22.5C24.125 23.3962 23.3962 24.125 22.5 24.125C21.6038 24.125 20.875 23.3962 20.875 22.5Z"
                                        fill="black"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M19.25 29H25.75C27.4205 29 29 27.4205 29 25.75V19.25C29 17.5795 27.4205 16 25.75 16H19.25C17.5795 16 16 17.5795 16 19.25V25.75C16 27.4205 17.5795 29 19.25 29ZM17.625 19.25C17.625 18.4903 18.4903 17.625 19.25 17.625H25.75C26.5097 17.625 27.375 18.4903 27.375 19.25V25.75C27.375 26.5097 26.5097 27.375 25.75 27.375H19.25C18.4757 27.375 17.625 26.5243 17.625 25.75V19.25Z"
                                        fill="black"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className={Style.footer_bottom_right}>
                        <h3>© Copyright 2023 - TBC</h3>
                    </div>
                </div>
            </footer>
        </>
    );
}
