import Style from "./checkout.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function checkout() {
    const router = useRouter();

    return (
        <>
            <div className={Style.checkout}>
                <div className={Style.left_side}>
                    <div
                        onClick={() => {
                            router.back();
                        }}
                        className={Style.back_container}
                    >
                        <img style={{cursor: "pointer"}} src="/back.svg" alt="back" />
                    </div>
                    <div className={Style.checkout_details}>
                        <div className={Style.checkout_summary}>
                            <div className={Style.checkout_summary_title}>
                                <h2>
                                    Summary<span> (2 items)</span>
                                </h2>
                                <Link
                                    href={"/browse"}
                                    className={Style.cart_addMore}
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
                                    Add more items
                                </Link>
                            </div>
                            <div className={Style.checkout_summary_items}>
                                <div className={Style.cart_items}>
                                    <div className={Style.cart_items_head}>
                                        <h2>ITEMS</h2>
                                        <h2 className={Style.qty}>QTY</h2>
                                        <h2 className={Style.amt}>AMOUNT</h2>
                                    </div>
                                    <div className={Style.cart_item}>
                                        <div className={Style.cart_item_img}>
                                            <img
                                                src="/dish_item.svg"
                                                alt="cart_item"
                                            />
                                            <h2>Pizza</h2>
                                        </div>
                                        <div
                                            className={Style.cart_item_controls}
                                        >
                                            <h4>2</h4>
                                        </div>
                                        <div
                                            className={Style.cart_item_controls}
                                        >
                                            <h4>$100.00</h4>
                                            <div
                                                className={
                                                    Style.cart_item_controls_right
                                                }
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M6.58579 0.585786C6.96086 0.210714 7.46957 0 8 0H12C12.5304 0 13.0391 0.210714 13.4142 0.585786C13.7893 0.960859 14 1.46957 14 2V4H16.9883C16.9953 3.99993 17.0024 3.99993 17.0095 4H18C18.5523 4 19 4.44772 19 5C19 5.55228 18.5523 6 18 6H17.9201L16.9997 17.0458C16.9878 17.8249 16.6731 18.5695 16.1213 19.1213C15.5587 19.6839 14.7957 20 14 20H6C5.20435 20 4.44129 19.6839 3.87868 19.1213C3.32687 18.5695 3.01223 17.8249 3.00035 17.0458L2.07987 6H2C1.44772 6 1 5.55228 1 5C1 4.44772 1.44772 4 2 4H2.99054C2.9976 3.99993 3.00466 3.99993 3.0117 4H6V2C6 1.46957 6.21071 0.960859 6.58579 0.585786ZM4.0868 6L4.99655 16.917C4.99885 16.9446 5 16.9723 5 17C5 17.2652 5.10536 17.5196 5.29289 17.7071C5.48043 17.8946 5.73478 18 6 18H14C14.2652 18 14.5196 17.8946 14.7071 17.7071C14.8946 17.5196 15 17.2652 15 17C15 16.9723 15.0012 16.9446 15.0035 16.917L15.9132 6H4.0868ZM12 4H8V2H12V4ZM8 8C8.55228 8 9 8.44772 9 9V15C9 15.5523 8.55228 16 8 16C7.44772 16 7 15.5523 7 15V9C7 8.44772 7.44772 8 8 8ZM12 8C12.5523 8 13 8.44772 13 9V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V9C11 8.44772 11.4477 8 12 8Z"
                                                        fill="#FF0000"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={Style.cart_item}>
                                        <div className={Style.cart_item_img}>
                                            <img
                                                src="/dish_item.svg"
                                                alt="cart_item"
                                            />
                                            <h2>Pizza</h2>
                                        </div>
                                        <div
                                            className={Style.cart_item_controls}
                                        >
                                            <h4>2</h4>
                                        </div>
                                        <div
                                            className={Style.cart_item_controls}
                                        >
                                            <h4>$100.00</h4>
                                            <div
                                                className={
                                                    Style.cart_item_controls_right
                                                }
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M6.58579 0.585786C6.96086 0.210714 7.46957 0 8 0H12C12.5304 0 13.0391 0.210714 13.4142 0.585786C13.7893 0.960859 14 1.46957 14 2V4H16.9883C16.9953 3.99993 17.0024 3.99993 17.0095 4H18C18.5523 4 19 4.44772 19 5C19 5.55228 18.5523 6 18 6H17.9201L16.9997 17.0458C16.9878 17.8249 16.6731 18.5695 16.1213 19.1213C15.5587 19.6839 14.7957 20 14 20H6C5.20435 20 4.44129 19.6839 3.87868 19.1213C3.32687 18.5695 3.01223 17.8249 3.00035 17.0458L2.07987 6H2C1.44772 6 1 5.55228 1 5C1 4.44772 1.44772 4 2 4H2.99054C2.9976 3.99993 3.00466 3.99993 3.0117 4H6V2C6 1.46957 6.21071 0.960859 6.58579 0.585786ZM4.0868 6L4.99655 16.917C4.99885 16.9446 5 16.9723 5 17C5 17.2652 5.10536 17.5196 5.29289 17.7071C5.48043 17.8946 5.73478 18 6 18H14C14.2652 18 14.5196 17.8946 14.7071 17.7071C14.8946 17.5196 15 17.2652 15 17C15 16.9723 15.0012 16.9446 15.0035 16.917L15.9132 6H4.0868ZM12 4H8V2H12V4ZM8 8C8.55228 8 9 8.44772 9 9V15C9 15.5523 8.55228 16 8 16C7.44772 16 7 15.5523 7 15V9C7 8.44772 7.44772 8 8 8ZM12 8C12.5523 8 13 8.44772 13 9V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V9C11 8.44772 11.4477 8 12 8Z"
                                                        fill="#FF0000"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={Style.cart_item}>
                                        <div className={Style.cart_item_img}>
                                            <img
                                                src="/dish_item.svg"
                                                alt="cart_item"
                                            />
                                            <h2>Pizza</h2>
                                        </div>
                                        <div
                                            className={Style.cart_item_controls}
                                        >
                                            <h4>2</h4>
                                        </div>
                                        <div
                                            className={Style.cart_item_controls}
                                        >
                                            <h4>$100.00</h4>
                                            <div
                                                className={
                                                    Style.cart_item_controls_right
                                                }
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M6.58579 0.585786C6.96086 0.210714 7.46957 0 8 0H12C12.5304 0 13.0391 0.210714 13.4142 0.585786C13.7893 0.960859 14 1.46957 14 2V4H16.9883C16.9953 3.99993 17.0024 3.99993 17.0095 4H18C18.5523 4 19 4.44772 19 5C19 5.55228 18.5523 6 18 6H17.9201L16.9997 17.0458C16.9878 17.8249 16.6731 18.5695 16.1213 19.1213C15.5587 19.6839 14.7957 20 14 20H6C5.20435 20 4.44129 19.6839 3.87868 19.1213C3.32687 18.5695 3.01223 17.8249 3.00035 17.0458L2.07987 6H2C1.44772 6 1 5.55228 1 5C1 4.44772 1.44772 4 2 4H2.99054C2.9976 3.99993 3.00466 3.99993 3.0117 4H6V2C6 1.46957 6.21071 0.960859 6.58579 0.585786ZM4.0868 6L4.99655 16.917C4.99885 16.9446 5 16.9723 5 17C5 17.2652 5.10536 17.5196 5.29289 17.7071C5.48043 17.8946 5.73478 18 6 18H14C14.2652 18 14.5196 17.8946 14.7071 17.7071C14.8946 17.5196 15 17.2652 15 17C15 16.9723 15.0012 16.9446 15.0035 16.917L15.9132 6H4.0868ZM12 4H8V2H12V4ZM8 8C8.55228 8 9 8.44772 9 9V15C9 15.5523 8.55228 16 8 16C7.44772 16 7 15.5523 7 15V9C7 8.44772 7.44772 8 8 8ZM12 8C12.5523 8 13 8.44772 13 9V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V9C11 8.44772 11.4477 8 12 8Z"
                                                        fill="#FF0000"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link

                                    href={"/browse"}
                                    className={`${Style.cart_addMore} ${Style.card_addBottomMore}`}
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
                                    Add more items
                                </Link>
                        </div>
                        <div className={Style.checkout_delivery}>
                            <h2>Delivery Address</h2>
                            <div className={Style.checkout_delivery_address}>
                                <div
                                    className={
                                        Style.checkout_delivery_address_field
                                    }
                                >
                                    <label htmlFor="name">
                                        Phone Number <span>*</span>
                                    </label>
                                    <input
                                        // placeholder="89xxxxxx"
                                        type="text"
                                        name="name"
                                        id="name"
                                    />
                                </div>
                                <div
                                    className={
                                        Style.checkout_delivery_address_field
                                    }
                                >
                                    <label htmlFor="name">
                                        Email <span>*</span>
                                    </label>
                                    <input
                                        // placeholder="jhondeo@mail.com"
                                        type="text"
                                        name="name"
                                        id="name"
                                    />
                                </div>
                                <div
                                    className={
                                        Style.checkout_delivery_address_field
                                    }
                                >
                                    <label htmlFor="name">
                                        Address <span>*</span>
                                    </label>
                                    <input
                                        // placeholder="185 wellstreet"
                                        type="text"
                                        name="name"
                                        id="name"
                                    />
                                </div>
                                <div
                                    className={
                                        Style.checkout_delivery_address_field
                                    }
                                >
                                    <label htmlFor="name">
                                        City <span>*</span>
                                    </label>
                                    <input
                                        // placeholder="Boston"
                                        type="text"
                                        name="name"
                                        id="name"
                                    />
                                </div>
                                <div
                                    className={
                                        Style.checkout_delivery_address_field
                                    }
                                >
                                    <label htmlFor="name">
                                        State <span>*</span>
                                    </label>
                                    <input
                                        // placeholder="New York"
                                        type="text"
                                        name="name"
                                        id="name"
                                    />
                                </div>
                                <div
                                    className={
                                        Style.checkout_delivery_address_field
                                    }
                                >
                                    <label htmlFor="name">
                                        Zip Code <span>*</span>
                                    </label>
                                    <input
                                        // placeholder="3468"
                                        type="text"
                                        name="name"
                                        id="name"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={Style.checkout_delivery}>
                            <h2>Delivery Address</h2>
                            <div className={Style.checkout_delivery_address}>
                                <div
                                    className={
                                        Style.checkout_delivery_address_field2
                                    }
                                >
                                    <div className={Style.wraper}>
                                        <input
                                            type="checkbox"
                                            name="first"
                                            id="first"
                                        />
                                    </div>
                                    <label htmlFor="first">
                                        Leave at the door
                                    </label>
                                </div>
                                <div
                                    className={
                                        Style.checkout_delivery_address_field2
                                    }
                                >
                                    <div className={Style.wraper}>
                                        <input
                                            type="checkbox"
                                            name="scond"
                                            id="second"
                                        />
                                    </div>
                                    <label htmlFor="second">
                                        Hand it over to me
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className={Style.checkout_delivery}>
                            <h2>Delivery Preference</h2>
                            <div className={Style.checkout_delivery_address}>
                                <div
                                    className={
                                        Style.checkout_delivery_address_field2
                                    }
                                >
                                    <div className={Style.wraper}>
                                        <input
                                            type="checkbox"
                                            name="first"
                                            id="first"
                                        />
                                    </div>
                                    <label htmlFor="first">
                                        Schedule for later
                                    </label>
                                </div>
                                <div
                                    className={
                                        Style.checkout_delivery_address_field2
                                    }
                                >
                                    <div className={Style.wraper}>
                                        <input
                                            type="checkbox"
                                            name="scond"
                                            id="second"
                                        />
                                    </div>
                                    <label htmlFor="second">
                                        Deliver it asap
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className={Style.checkout_delivery_address_time}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10C18 11.0506 17.7931 12.0909 17.391 13.0615C16.989 14.0321 16.3997 14.914 15.6569 15.6569C14.914 16.3997 14.0321 16.989 13.0615 17.391C12.0909 17.7931 11.0506 18 10 18C8.94943 18 7.90914 17.7931 6.93853 17.391C5.96793 16.989 5.08601 16.3997 4.34315 15.6569C3.60028 14.914 3.011 14.0321 2.60896 13.0615C2.20693 12.0909 2 11.0506 2 10C2 7.87827 2.84285 5.84344 4.34315 4.34315ZM10 3.6C8.30261 3.6 6.67475 4.27428 5.47452 5.47452C4.27428 6.67475 3.6 8.30261 3.6 10C3.6 10.8405 3.76554 11.6727 4.08717 12.4492C4.4088 13.2257 4.88022 13.9312 5.47452 14.5255C6.06881 15.1198 6.77434 15.5912 7.55083 15.9128C8.32731 16.2345 9.15954 16.4 10 16.4C10.8405 16.4 11.6727 16.2345 12.4492 15.9128C13.2257 15.5912 13.9312 15.1198 14.5255 14.5255C15.1198 13.9312 15.5912 13.2257 15.9128 12.4492C16.2345 11.6727 16.4 10.8405 16.4 10C16.4 8.30261 15.7257 6.67475 14.5255 5.47452C13.3253 4.27428 11.6974 3.6 10 3.6ZM10 5.2C10.4418 5.2 10.8 5.55817 10.8 6V9.66863L12.9657 11.8343C13.2781 12.1467 13.2781 12.6533 12.9657 12.9657C12.6533 13.2781 12.1467 13.2781 11.8343 12.9657L9.43431 10.5657C9.28429 10.4157 9.2 10.2122 9.2 10V6C9.2 5.55817 9.55817 5.2 10 5.2Z"
                                    fill="#545454"
                                />
                            </svg>
                            <h4>10:00 PM</h4>
                        </div>
                    </div>
                </div>
                <div className={Style.right_side}>
                    <div className={Style.card_details}>
                        <h2>My cards</h2>
                        <div className={Style.card_details_top}>
                            <div
                                className={
                                    Style.checkout_delivery_address_field
                                }
                            >
                                <label htmlFor="name">
                                    Credit Card Number <span>*</span>
                                </label>
                                <input
                                    // placeholder="3409 1203 xxxx xxxx"
                                    type="text"
                                    name="name"
                                    id="name"
                                />
                            </div>
                        </div>
                        <div className={Style.card_details_bottom}>
                            <div
                                className={
                                    Style.checkout_delivery_address_field
                                }
                            >
                                <label htmlFor="name">
                                    Expiration Data <span>*</span>
                                </label>
                                <input
                                    // placeholder="11/xx"
                                    type="text"
                                    name="name"
                                    id="name"
                                />
                            </div>
                            <div
                                className={
                                    Style.checkout_delivery_address_field
                                }
                            >
                                <label htmlFor="name">
                                    CVV <span>*</span>
                                </label>
                                <input
                                    // placeholder="xxx"
                                    type="text"
                                    name="name"
                                    id="name"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={Style.promo_code_details}>
                        <h2>Promo Code</h2>
                        <div className={Style.promo_code_details_input}>
                            <input placeholder="Enter promo code" type="text" name="promo" id="promo" />
                            <button>Apply</button>
                        </div>
                    </div>
                    <div className={Style.order_details}>
                        <h4>Sub-total</h4>
                        <h3>$20.00</h3>
                    </div>
                    <div className={Style.order_details}>
                        <h4>Shipping</h4>
                        <h3>$3.00</h3>
                    </div>
                    <div className={`${Style.order_details} ${Style.order_tip}`}>
                        <div className={Style.tip_text}>
                            <h4>Tip</h4>
                        </div>
                        <div className={`${Style.tip_column} ${Style.order_tip_select}`}>
                            <h4>$ 2</h4>
                        </div>
                        <div className={Style.tip_column}>
                            <h4>$ 4</h4>
                        </div>
                        <div className={Style.tip_column}>
                            <h4>$ <input placeholder="Custom" type="number" /></h4>
                        </div>
                    </div>
                    <div className={Style.Float_order_button}>
                        <div className={Style.order_details}>
                            <h3>Total</h3>
                            <h2>$25.00</h2>
                        </div>
                        <p style={{textAlign: "center", color: "rgba(84, 84, 84, 0.32)"}}>*By placing your order, you agree to the Boston cravings Terms and conditions and Privacy Policy</p>
                        <button className={`button_main ${Style.order_button}`}>Place order</button>
                    </div>
                </div>
            </div>
        </>
    );
}
