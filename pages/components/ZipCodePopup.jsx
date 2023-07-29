import Style from "./ZipCodePopup.module.css";
import { useEffect } from "react";
import disableScroll from 'disable-scroll';

export default function ZipCodePopup(props) {
    useEffect(() => {
        if (props.show) {
            document.getElementById(`ZipCodePopup_${props.id}`).style.display =
                "flex";
        } else {
            document.getElementById(`ZipCodePopup_${props.id}`).style.display =
                "none";
        }

        if (props.show) {
            disableScroll.on()
        } else {
            disableScroll.off();
        }
    }, [props.show]);

    return (
        <div
            id={`ZipCodePopup_${props.id}`}
            className={Style.ZipCodePopup_Section}
        >
            <div className={Style.ZipCodePopup}>
                <div className={Style.ZipCodePopup_card_head}>
                    <div
                        onClick={() => {
                            props.setFunc(false);
                        }}
                        className={Style.ZipCodePopup_cross_icon}
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
                <div className={Style.ZipCodePopup_card_body}>
                    <h2>Enter your zipcode</h2>
                    <div className={Style.ZipCodePopup_card_body_input}>
                        <div
                            className={Style.ZipCodePopup_card_body_input_logo}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M10.8 1.26591C5.79406 1.81929 1.81929 5.79406 1.26591 10.8H0V13.2H1.26591C1.81929 18.2059 5.79406 22.1807 10.8 22.7341V24H13.2V22.7341C18.2059 22.1807 22.1807 18.2059 22.7341 13.2H24V10.8H22.7341C22.1807 5.79406 18.2059 1.81929 13.2 1.26591V0H10.8V1.26591ZM4.8 10.8H3.68507C4.21128 7.12117 7.12117 4.21128 10.8 3.68507V4.8H13.2V3.68507C16.8788 4.21128 19.7887 7.12117 20.3149 10.8H19.2V13.2H20.3149C19.7887 16.8788 16.8788 19.7887 13.2 20.3149V19.2H10.8V20.3149C7.12117 19.7887 4.21128 16.8788 3.68507 13.2H4.8V10.8ZM12 14.4C13.3255 14.4 14.4 13.3255 14.4 12C14.4 10.6745 13.3255 9.6 12 9.6C10.6745 9.6 9.6 10.6745 9.6 12C9.6 13.3255 10.6745 14.4 12 14.4ZM7.2 12C7.2 14.651 9.34903 16.8 12 16.8C14.651 16.8 16.8 14.651 16.8 12C16.8 9.34903 14.651 7.2 12 7.2C9.34903 7.2 7.2 9.34903 7.2 12Z"
                                    fill="black"
                                />
                            </svg>
                        </div>
                        <div
                            className={Style.ZipCodePopup_card_body_input_field}
                        >
                            <label htmlFor="zip">Zip Code</label>
                            <input
                                placeholder="Enter your zipcode"
                                type="text"
                                name="zipcode"
                                id="zipcode"
                            />
                        </div>
                    </div>
                    <button className={Style.button_zip}>Get Started</button>
                </div>
            </div>
        </div>
    );
}
