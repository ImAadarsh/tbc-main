import { useEffect, useState } from "react";
import Style from "./Header.module.css";
import { useRouter } from "next/router";

export default function Header() {

    const [ userData, setUserData ] = useState({});
    const router = useRouter();

    const logout = () => {
        localStorage.removeItem("token");
        router.push("/ambassadors");
    }

    useEffect(() => {
        setUserData(JSON.parse(localStorage.getItem('data')));
    }, []);

    return (
        <>
            <header className={Style.header}>
                <div className={Style.left}>
                    <img src="/Logo_Full.svg" alt="logo" className={Style.logo}/>
                </div>
                <div className={Style.right}>
                    <div onClick={(e) => {
                        if(document.querySelector('#logout_btn').style.display == '' || document.querySelector('#logout_btn').style.display == 'none') {
                            document.querySelector('#logout_btn').style.display = 'inline-flex';
                        }else {
                            document.querySelector('#logout_btn').style.display = 'none';
                        }
                    }} className={Style.login_section}>
                        <img src="/user_image.svg" alt="img" className={Style.login_image} />
                        <div className={Style.login_dorpdown}>
                            <h3>{userData.name}</h3>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <g clipPath="url(#clip0_53_3686)">
                                    <path
                                        d="M6 9L12 15L18 9"
                                        stroke="black"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_53_3686">
                                        <rect
                                            width="24"
                                            height="24"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div onClick={() => {
                        logout();
                    }} id="logout_btn" className={Style.popup_button}>
                        <img src="/logout.svg" alt="logout" />
                        <h4>Logout</h4>
                    </div>
                </div>
            </header>
        </>
    );
}
