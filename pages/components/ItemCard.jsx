import { useEffect, useState } from "react";
import Style from "./ItemCard.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
var Carousel = require("react-responsive-carousel").Carousel;

export default function ItemCard(props) {
    const [hide, setHide] = useState(false);

    useEffect(() => {
        document.getElementById(`popup_container_${props.id}`).style.display =
            hide ? "flex" : "none";
    }, [ hide ]);

    return (
        <>
            <div className={Style.categories_mid_item}>
                <div
                    onClick={() => {
                        setHide(true);
                    }}
                    className={Style.categories_mid_item_top}
                >
                    <img src={props.image} alt="dish_item" />
                </div>
                <div className={Style.categories_mid_item_mid}>
                    <div className={Style.categories_mid_mid_left}>
                        <div className={Style.categories_mid_mid_left_top}>
                            <h4>{props.name}</h4>
                        </div>
                        <div className={Style.categories_mid_mid_left_bottom}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="16"
                                viewBox="0 0 20 16"
                                fill="none"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M10 3.72727C10 3.32561 10.3256 3 10.7273 3H12.1818C12.4573 3 12.7091 3.15564 12.8323 3.40203L15.1774 8.09219C15.9176 8.11419 16.6228 8.41782 17.1479 8.94296C17.6935 9.48852 18 10.2285 18 11C18 11.7715 17.6935 12.5115 17.1479 13.057C16.6024 13.6026 15.8624 13.9091 15.0909 13.9091C14.3194 13.9091 13.5794 13.6026 13.0339 13.057C12.4883 12.5115 12.1818 11.7715 12.1818 11C12.1818 10.2285 12.4883 9.48852 13.0339 8.94296C13.2386 8.7382 13.4708 8.56711 13.7217 8.43327L13.3159 7.6217L10.8779 10.0597C10.7415 10.1961 10.5565 10.2727 10.3636 10.2727H7.72581C7.78665 10.5083 7.81818 10.7525 7.81818 11C7.81818 11.7715 7.51169 12.5115 6.96613 13.057C6.42057 13.6026 5.68063 13.9091 4.90909 13.9091C4.13755 13.9091 3.39761 13.6026 2.85205 13.057C2.30649 12.5115 2 11.7715 2 11C2 10.2285 2.30649 9.48852 2.85205 8.94296C3.39761 8.3974 4.13755 8.09091 4.90909 8.09091C5.52211 8.09091 6.11518 8.2844 6.60666 8.63755L7.88057 7.36364H5.63636C5.2347 7.36364 4.90909 7.03803 4.90909 6.63636C4.90909 6.2347 5.2347 5.90909 5.63636 5.90909H12.4596L11.7323 4.45455H10.7273C10.3256 4.45455 10 4.12893 10 3.72727ZM11.5169 7.36364H9.93761L8.48306 8.81818H10.0624L11.5169 7.36364ZM4.90909 9.54545C4.52332 9.54545 4.15335 9.6987 3.88057 9.97148C3.60779 10.2443 3.45455 10.6142 3.45455 11C3.45455 11.3858 3.60779 11.7557 3.88057 12.0285C4.15335 12.3013 4.52332 12.4545 4.90909 12.4545C5.29486 12.4545 5.66483 12.3013 5.93761 12.0285C6.21039 11.7557 6.36364 11.3858 6.36364 11C6.36364 10.6142 6.21039 10.2443 5.93761 9.97148C5.66483 9.6987 5.29486 9.54545 4.90909 9.54545ZM15.0909 9.54545C14.7051 9.54545 14.3352 9.6987 14.0624 9.97148C13.7896 10.2443 13.6364 10.6142 13.6364 11C13.6364 11.3858 13.7896 11.7557 14.0624 12.0285C14.3352 12.3013 14.7051 12.4545 15.0909 12.4545C15.4767 12.4545 15.8466 12.3013 16.1194 12.0285C16.3922 11.7557 16.5455 11.3858 16.5455 11C16.5455 10.6142 16.3922 10.2443 16.1194 9.97148C15.8466 9.6987 15.4767 9.54545 15.0909 9.54545Z"
                                    fill="#545454"
                                />
                            </svg>
                            {props.time}
                        </div>
                    </div>
                    <div className={Style.categories_mid_mid_right}>
                        <h4>{props.price}</h4>
                    </div>
                </div>
                <div className={Style.categories_mid_item_bottom}>
                    <div className={Style.categories_mid_item_bottom_controler}>
                        <div
                            onClick={() => {
                                props.itemIncDec(-1);
                            }}
                            className={`${
                                Style.categories_mid_item_bottom_controler_left
                            } ${
                                props.itemCount > 1 &&
                                Style.categories_mid_item_bottom_controler_right
                            }`}
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
                                    d="M0 8C0 7.44772 0.447715 7 1 7H15C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9H1C0.447715 9 0 8.55228 0 8Z"
                                    fill="#545454"
                                    fillOpacity="0.32"
                                />
                            </svg>
                        </div>
                        <div
                            className={
                                Style.categories_mid_item_bottom_controler_mid
                            }
                        >
                            <h4>{props.itemCount}</h4>
                        </div>
                        <div
                            onClick={() => {
                                props.itemIncDec(1);
                            }}
                            className={
                                Style.categories_mid_item_bottom_controler_right
                            }
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
                                    d="M8 0C8.55228 0 9 0.447715 9 1V7H15C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9H9V15C9 15.5523 8.55228 16 8 16C7.44772 16 7 15.5523 7 15V9H1C0.447715 9 0 8.55228 0 8C0 7.44772 0.447715 7 1 7H7V1C7 0.447715 7.44772 0 8 0Z"
                                    fill="#545454"
                                />
                            </svg>
                        </div>
                    </div>
                    <button
                        onClick={props.addCardButton}
                        className={`button_main ${Style.categories_mid_item_bottom_add}`}
                    >
                        Add
                    </button>
                </div>
                <div
                    id={`popup_container_${props.id}`}
                    className={Style.categories_select_container}
                >
                    <div className={Style.categories_select_card}>
                        <div className={Style.categories_select_card_head}>
                            <div
                                className={
                                    Style.categories_select_card_cross_icon
                                }
                                onClick={() => {
                                    setHide(false);
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                >
                                    <path
                                        d="M6.22222 8L0 1.77778L1.77778 0L8 6.22222L14.2222 0L16 1.77778L9.77778 8L16 14.2222L14.2222 16L8 9.77778L1.77778 16L0 14.2222L6.22222 8Z"
                                        fill="black"
                                    />
                                </svg>
                            </div>
                            <Carousel showArrows={false} showThumbs={false}>
                                <img src={props.image} alt="dish_item" />
                                <img src={props.image} alt="dish_item" />
                            </Carousel>
                        </div>
                        <div
                            className={
                                Style.categories_select_card_popup_card_body
                            }
                        >
                            <div className={Style.categories_mid_item_mid}>
                                <div className={Style.categories_mid_mid_left}>
                                    <div
                                        className={
                                            Style.categories_mid_mid_left_top
                                        }
                                    >
                                        <h4>{props.name}</h4>
                                    </div>
                                    <div
                                        className={
                                            Style.categories_mid_mid_left_bottom
                                        }
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="16"
                                            viewBox="0 0 20 16"
                                            fill="none"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M10 3.72727C10 3.32561 10.3256 3 10.7273 3H12.1818C12.4573 3 12.7091 3.15564 12.8323 3.40203L15.1774 8.09219C15.9176 8.11419 16.6228 8.41782 17.1479 8.94296C17.6935 9.48852 18 10.2285 18 11C18 11.7715 17.6935 12.5115 17.1479 13.057C16.6024 13.6026 15.8624 13.9091 15.0909 13.9091C14.3194 13.9091 13.5794 13.6026 13.0339 13.057C12.4883 12.5115 12.1818 11.7715 12.1818 11C12.1818 10.2285 12.4883 9.48852 13.0339 8.94296C13.2386 8.7382 13.4708 8.56711 13.7217 8.43327L13.3159 7.6217L10.8779 10.0597C10.7415 10.1961 10.5565 10.2727 10.3636 10.2727H7.72581C7.78665 10.5083 7.81818 10.7525 7.81818 11C7.81818 11.7715 7.51169 12.5115 6.96613 13.057C6.42057 13.6026 5.68063 13.9091 4.90909 13.9091C4.13755 13.9091 3.39761 13.6026 2.85205 13.057C2.30649 12.5115 2 11.7715 2 11C2 10.2285 2.30649 9.48852 2.85205 8.94296C3.39761 8.3974 4.13755 8.09091 4.90909 8.09091C5.52211 8.09091 6.11518 8.2844 6.60666 8.63755L7.88057 7.36364H5.63636C5.2347 7.36364 4.90909 7.03803 4.90909 6.63636C4.90909 6.2347 5.2347 5.90909 5.63636 5.90909H12.4596L11.7323 4.45455H10.7273C10.3256 4.45455 10 4.12893 10 3.72727ZM11.5169 7.36364H9.93761L8.48306 8.81818H10.0624L11.5169 7.36364ZM4.90909 9.54545C4.52332 9.54545 4.15335 9.6987 3.88057 9.97148C3.60779 10.2443 3.45455 10.6142 3.45455 11C3.45455 11.3858 3.60779 11.7557 3.88057 12.0285C4.15335 12.3013 4.52332 12.4545 4.90909 12.4545C5.29486 12.4545 5.66483 12.3013 5.93761 12.0285C6.21039 11.7557 6.36364 11.3858 6.36364 11C6.36364 10.6142 6.21039 10.2443 5.93761 9.97148C5.66483 9.6987 5.29486 9.54545 4.90909 9.54545ZM15.0909 9.54545C14.7051 9.54545 14.3352 9.6987 14.0624 9.97148C13.7896 10.2443 13.6364 10.6142 13.6364 11C13.6364 11.3858 13.7896 11.7557 14.0624 12.0285C14.3352 12.3013 14.7051 12.4545 15.0909 12.4545C15.4767 12.4545 15.8466 12.3013 16.1194 12.0285C16.3922 11.7557 16.5455 11.3858 16.5455 11C16.5455 10.6142 16.3922 10.2443 16.1194 9.97148C15.8466 9.6987 15.4767 9.54545 15.0909 9.54545Z"
                                                fill="#545454"
                                            />
                                        </svg>
                                        {props.time}
                                    </div>
                                </div>
                                <div className={Style.categories_mid_mid_right}>
                                    <h4>{props.price}</h4>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut corporis eligendi, numquam eos nisi accusamus sit veniam blanditiis nemo.
                            </p>
                            <div className={Style.categories_select_card_popup_card_body_list}>
                                <ul>
                                    <li>caleor</li>
                                    <li>caleor</li>
                                    <li>caleor</li>
                                    <li>caleor</li>
                                    <li>caleor</li>
                                </ul>
                            </div>
                            <div className={Style.categories_mid_item_bottom}>
                                <div
                                    className={
                                        Style.categories_mid_item_bottom_controler
                                    }
                                >
                                    <div
                                        onClick={() => {
                                            props.itemIncDec(-1);
                                        }}
                                        className={`${
                                            Style.categories_mid_item_bottom_controler_left
                                        } ${
                                            props.itemCount > 1 &&
                                            Style.categories_mid_item_bottom_controler_right
                                        }`}
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
                                                d="M0 8C0 7.44772 0.447715 7 1 7H15C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9H1C0.447715 9 0 8.55228 0 8Z"
                                                fill="#545454"
                                                fillOpacity="0.32"
                                            />
                                        </svg>
                                    </div>
                                    <div
                                        className={
                                            Style.categories_mid_item_bottom_controler_mid
                                        }
                                    >
                                        <h4>{props.itemCount}</h4>
                                    </div>
                                    <div
                                        onClick={() => {
                                            props.itemIncDec(1);
                                        }}
                                        className={
                                            Style.categories_mid_item_bottom_controler_right
                                        }
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
                                                d="M8 0C8.55228 0 9 0.447715 9 1V7H15C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9H9V15C9 15.5523 8.55228 16 8 16C7.44772 16 7 15.5523 7 15V9H1C0.447715 9 0 8.55228 0 8C0 7.44772 0.447715 7 1 7H7V1C7 0.447715 7.44772 0 8 0Z"
                                                fill="#545454"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <button
                                    onClick={props.addCardButton}
                                    className={`button_main ${Style.categories_mid_item_bottom_add}`}
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
