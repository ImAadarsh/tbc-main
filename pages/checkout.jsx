import Style from "./checkout.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function checkout() {

    const router = useRouter();

    return (
        <>
            <div className={Style.checkout}>
                <div className={Style.left_side}>
                    <div onClick={() => {
                        router.back();
                    }} className={Style.back_container}>
                        <img src="/back.svg" alt="back" />
                    </div>
                    <div className={Style.checkout_details}>
                        <div className={Style.checkout_summary}>
                            <div className={Style.checkout_summary_title}>
                                <h2>
                                    Checkout Summary<span> (2 items)</span>
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
                                        <h2>QTY</h2>
                                        <h2>AMOUNT</h2>
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
                        </div>
                        <div className={Style.checkout_delivery}>
                            <h2>Delivery Address</h2>
                            <div className={Style.checkout_delivery_address}>
                                <div className={Style.checkout_delivery_address_field}>
									<label htmlFor="name">Phone Number <span>*</span></label>
									<input placeholder="89xxxxxx" type="text" name="name" id="name" />
                                </div>
								<div className={Style.checkout_delivery_address_field}>
									<label htmlFor="name">Email <span>*</span></label>
									<input placeholder="jhondeo@mail.com" type="text" name="name" id="name" />
                                </div>
								<div className={Style.checkout_delivery_address_field}>
									<label htmlFor="name">Address <span>*</span></label>
									<input placeholder="185 wellstreet" type="text" name="name" id="name" />
                                </div>
								<div className={Style.checkout_delivery_address_field}>
									<label htmlFor="name">City <span>*</span></label>
									<input placeholder="Boston" type="text" name="name" id="name" />
                                </div>
								<div className={Style.checkout_delivery_address_field}>
									<label htmlFor="name">State <span>*</span></label>
									<input placeholder="New York" type="text" name="name" id="name" />
                                </div>
								<div className={Style.checkout_delivery_address_field}>
									<label htmlFor="name">Zip Code <span>*</span></label>
									<input placeholder="3468" type="text" name="name" id="name" />
                                </div>
                            </div>
                        </div>
						<div className={Style.checkout_delivery}>
                            <h2>Delivery Address</h2>
                            <div className={Style.checkout_delivery_address}>
                                <div className={Style.checkout_delivery_address_field2}>
								<div className={Style.wraper}>
									<input type="checkbox" name="first" id="first" />
								</div>
									<label htmlFor="first">Leave at the door</label>
                                </div>
								<div className={Style.checkout_delivery_address_field2}>
									<div className={Style.wraper}>
										<input type="checkbox" name="scond" id="second" />
									</div>
									<label htmlFor="second">Hand it over to me</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Style.right_side}>
                    <div className={``}></div>
                </div>
            </div>
        </>
    );
}
