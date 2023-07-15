import Style from "./dashboard.module.css";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const orders_data = [
    {
        street_address: "185 Devonshire St. Boston",
        places: "Brighton",
        date_time: "Jun 12, 2023 09:30 AM",
        order_placed: "01",
        order_value: "20.99",
    },
    {
        street_address: "185 Devonshire St. Boston",
        places: "Brighton",
        date_time: "Jun 12, 2023 09:30 AM",
        order_placed: "01",
        order_value: "20.99",
    },
    {
        street_address: "185 Devonshire St. Boston",
        places: "Brighton",
        date_time: "Jun 12, 2023 09:30 AM",
        order_placed: "01",
        order_value: "20.99",
    },
    {
        street_address: "185 Devonshire St. Boston",
        places: "Brighton",
        date_time: "Jun 12, 2023 09:30 AM",
        order_placed: "01",
        order_value: "20.99",
    },
    {
        street_address: "185 Devonshire St. Boston",
        places: "Brighton",
        date_time: "Jun 12, 2023 09:30 AM",
        order_placed: "01",
        order_value: "20.99",
    },
    {
        street_address: "185 Devonshire St. Boston",
        places: "Brighton",
        date_time: "Jun 12, 2023 09:30 AM",
        order_placed: "01",
        order_value: "20.99",
    },
    {
        street_address: "185 Devonshire St. Boston",
        places: "Brighton",
        date_time: "Jun 12, 2023 09:30 AM",
        order_placed: "01",
        order_value: "20.99",
    },
    {
        street_address: "185 Devonshire St. Boston",
        places: "Brighton",
        date_time: "Jun 12, 2023 09:30 AM",
        order_placed: "01",
        order_value: "20.99",
    },
    {
        street_address: "185 Devonshire St. Boston",
        places: "Brighton",
        date_time: "Jun 12, 2023 09:30 AM",
        order_placed: "01",
        order_value: "20.99",
    },
    {
        street_address: "185 Devonshire St. Boston",
        places: "Brighton",
        date_time: "Jun 12, 2023 09:30 AM",
        order_placed: "01",
        order_value: "20.99",
    },
    {
        street_address: "185 Devonshire St. Boston",
        places: "Brighton",
        date_time: "Jun 12, 2023 09:30 AM",
        order_placed: "01",
        order_value: "20.99",
    },
    {
        street_address: "185 Devonshire St. Boston",
        places: "Brighton",
        date_time: "Jun 12, 2023 09:30 AM",
        order_placed: "01",
        order_value: "20.99",
    },
    {
        street_address: "185 Devonshire St. Boston",
        places: "Brighton",
        date_time: "Jun 12, 2023 09:30 AM",
        order_placed: "01",
        order_value: "20.99",
    },
    {
        street_address: "185 Devonshire St. Boston",
        places: "Brighton",
        date_time: "Jun 12, 2023 09:30 AM",
        order_placed: "01",
        order_value: "20.99",
    },
];

const address_added = [];

const months = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "July",
    8: "Aug",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
};

export default function Dashboard() {
    const [card, setCard] = useState("first");
    const [orders, setOrders] = useState(orders_data);
    const [placedOrderCount, setPlacedOrderCount] = useState(
        orders_data.length,
    );
    const [accumulatedCommission, setAccumulatedCommission] = useState(400);
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
    const [addressAdded, setAddressAdded] = useState(address_added);
    const [addressAddedCount, setAddressAddedCount] = useState(
        address_added.length,
    );

    const [formSuccess, setFormSuccess] = useState(false);
    const [formError, setFormError] = useState(false);
    const [error_str, setErrorStr] = useState("");
    const [address_value, setAddressValue] = useState("");
    const [city_value, setCityValue] = useState("");
    const [state_value, setStateValue] = useState("");
    const [zip_value, setZipValue] = useState("");
    const [dish_value, setDishValue] = useState("apple_pie");
    const [stick_value, setStickValue] = useState(true);

    const [ address_suggestions, setAddressSuggestions ] = useState([]);

    const addToDatabase = async () => {
        if (
            !address_value ||
            !city_value ||
            !state_value ||
            !zip_value ||
            !dish_value
        ) {
            setFormError(true);
            setErrorStr("All fields are mendetory to fill.");
        } else {
            const res = await fetch(
                `https://api.thebostoncravings.com/addresses/`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${localStorage.getItem(
                            "token",
                        )}`,
                    },
                    body: JSON.stringify({
                        ambassadorId: `${
                            JSON.parse(localStorage.getItem("data"))._id
                        }`,
                        address: address_value,
                        city: city_value,
                        state: state_value,
                        zipCode: zip_value,
                        dishServed: dish_value,
                        stick: stick_value,
                    }),
                },
            );

            const data = await res.json();
            console.log(data);
            if (data.status) {
                setFormSuccess(true);
                setAddressValue("");
                setCityValue("");
                setStateValue("");
                setZipValue("");
                setDishValue("");
                setStickValue(false);
                setErrorStr("");
                setFormError(false);
            }
        }
    };

    useEffect(() => {
        ["first", "second", "third"].map((v) => {
            if (v == card) {
                document
                    .querySelector(`#${v}`)
                    .classList.add(Style.card_active);
            } else {
                document
                    .querySelector(`#${v}`)
                    .classList.remove(Style.card_active);
            }
        });

        Object.keys(months).map((v) => {
            if (v == currentMonth) {
                document
                    .querySelector(`#${months[v]}`)
                    .classList.add(Style.selectedMonthStyle);
            } else {
                document
                    .querySelector(`#${months[v]}`)
                    .classList.remove(Style.selectedMonthStyle);
            }
        });

        if (card == "third") {
            document.querySelector(`#dashboard_list`).style.border = "none";
        } else {
            document.querySelector(`#dashboard_list`).style.border =
                "1px solid var(--dont-use-neutral-neutral-50, #E6E6E6)";
        }
    }, [card, currentMonth]);

    const fetchAddedAddress = async () => {
        const data = await fetch(
            `https://api.thebostoncravings.com/addresses/ambassador/${
                JSON.parse(localStorage.getItem("data"))._id
            }`,
            {
                method: "GET",
                headers: {
                    authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            },
        );
        const response = await data.json();
        if(data.status && response.data) {
            setAddressAdded(response.data);
            setAddressAddedCount(response.data.length);
        }
    };

    const router = new useRouter();
    useEffect(() => {
        // if (!localStorage.getItem('token')) {
        //     router.push('/ambassadors');
        // }else {
        //     fetchAddedAddress();
        // }
    }, []);

    const addressSuggestion = async (text) => {
        if(text.length >= 4) {
            const res = await fetch(
                `https://maps.googleapis.com/maps/api/place/queryautocomplete/json?input=${text}&key=AIzaSyArEq_RndmmEKrlRyneCkWCcEO0KNSEXCM`
            );
            const data = await res.json();
            const all_suggestions = [];
            for(let i = 0; i < data.predictions.length; i++) {
                all_suggestions.push(data.predictions[i].description);
            }
            setAddressSuggestions(all_suggestions);
        }
    }

    return (
        <>
            <Header />
            <div className={Style.dashboard}>
                <div className={Style.left}>
                    <div className={Style.cards}>
                        <div
                            onClick={(e) => {
                                setCard("first");
                            }}
                            id="first"
                            style={{ background: "#FFF7CC" }}
                            className={Style.card}
                        >
                            <h3>Orders placed</h3>
                            <h1>{placedOrderCount}</h1>
                            <p>
                                order placed from the address in the month of{" "}
                                {months[currentMonth]}
                            </p>
                        </div>
                        <div
                            onClick={(e) => {
                                setCard("second");
                            }}
                            id="second"
                            style={{ background: "#E0E4FF" }}
                            className={Style.card}
                        >
                            <h3>Address added</h3>
                            <h1>{addressAddedCount}</h1>
                            <p>Address added since inception</p>
                        </div>
                        <div
                            onClick={(e) => {
                                setCard("third");
                            }}
                            id="third"
                            style={{ background: "#EBFCFF" }}
                            className={Style.card}
                        >
                            <h3>Accumulated $$$</h3>
                            <h1>${accumulatedCommission}</h1>
                            <p>
                                Commission in the month of{" "}
                                {months[currentMonth]}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={Style.right}>
                    <div className={Style.dashboard_head}>
                        <h2 id="total_count" className={Style.total_count}>
                            {card == "first" ? (
                                <>Orders placed ({placedOrderCount})</>
                            ) : card == "second" ? (
                                <>Address ({addressAddedCount})</>
                            ) : null}
                        </h2>
                        <div className={Style.left_dashboard_panel}>
                            <div
                                onClick={(e) => {
                                    if (
                                        document.querySelector(
                                            `#colender_popup`,
                                        ).style.display === "" ||
                                        document.querySelector(
                                            `#colender_popup`,
                                        ).style.display === "none"
                                    ) {
                                        document.querySelector(
                                            `#colender_popup`,
                                        ).style.display = "block";
                                    } else {
                                        document.querySelector(
                                            `#colender_popup`,
                                        ).style.display = "none";
                                    }
                                }}
                                className={Style.colender}
                            >
                                { card === "first" && <h3>{months[currentMonth]} 2023</h3>}
                                { card === "first" && <svg
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
                                </svg>}
                                <div
                                    id="colender_popup"
                                    className={Style.colender_popup}
                                >
                                    <div className={Style.colender_popup_head}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                d="M15 6L9 12L15 18"
                                                stroke="#989FAE"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <h3>2023</h3>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                d="M9 18L15 12L9 6"
                                                stroke="#989FAE"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <div className={Style.colender_popup_body}>
                                        {Object.keys(months).map((v) => {
                                            return (
                                                <div
                                                    key={v}
                                                    onClick={(e) => {
                                                        setCurrentMonth(v);
                                                    }}
                                                    id={months[v]}
                                                    className={
                                                        Style.monthsOption
                                                    }
                                                >
                                                    {months[v]}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                            { card === "second" && <button
                                onClick={(e) => {
                                    document.querySelector(
                                        "#card_section",
                                    ).style.display = "flex";
                                }}
                                className={Style.add_button}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <g clipPath="url(#clip0_257_5207)">
                                        <path
                                            d="M12 5V19"
                                            stroke="black"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M5 12H19"
                                            stroke="black"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_257_5207">
                                            <rect
                                                width="24"
                                                height="24"
                                                fill="white"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                                Database
                            </button>}
                            <div
                                id="card_section"
                                className={Style.side_card_section}
                            >
                                <div className={Style.side_card}>
                                    <div className={Style.side_card_head}>
                                        <h1
                                            style={{
                                                fontFamily: "Expletus Sans",
                                            }}
                                        >
                                            {!formSuccess && "Database"}
                                        </h1>
                                        <div
                                            className={Style.side_card_icon}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                document.querySelector(
                                                    "#card_section",
                                                ).style.display = "none";
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
                                    </div>
                                    {!formSuccess ? (
                                        <div className={Style.side_card_body}>
                                            <div className={Style.field}>
                                                <label htmlFor="address">
                                                    Address<span>*</span>
                                                </label>
                                                <input
                                                    onChange={(e) => {
                                                        setAddressValue(
                                                            e.target.value,
                                                        );
                                                        addressSuggestion(e.target.value);
                                                    }}
                                                    value={address_value}
                                                    type="text"
                                                    name="address"
                                                />
                                                <div className={Style.suggestion_list}>
                                                    {address_suggestions.map((v, i) => {
                                                        return (
                                                            <div key={i} className={Style.suggestion_item}>
                                                                <p onClick={(e) => {
                                                                    setAddressValue(v);
                                                                    setAddressSuggestions([]);
                                                                }} >{v}</p>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                            <div className={Style.field}>
                                                <label htmlFor="city">
                                                    City<span>*</span>
                                                </label>
                                                <input
                                                    onChange={(e) => {
                                                        setCityValue(
                                                            e.target.value,
                                                        );
                                                    }}
                                                    value={city_value}
                                                    type="text"
                                                    name="city"
                                                />
                                            </div>
                                            <div className={Style.field}>
                                                <label htmlFor="state">
                                                    State<span>*</span>
                                                </label>
                                                <input
                                                    onChange={(e) => {
                                                        setStateValue(
                                                            e.target.value,
                                                        );
                                                    }}
                                                    value={state_value}
                                                    type="text"
                                                    name="state"
                                                />
                                            </div>
                                            <div className={Style.field}>
                                                <label htmlFor="zip">
                                                    Zipcode<span>*</span>
                                                </label>
                                                <input
                                                    onChange={(e) => {
                                                        setZipValue(
                                                            e.target.value,
                                                        );
                                                    }}
                                                    value={zip_value}
                                                    type="text"
                                                    name="zip"
                                                />
                                            </div>
                                            <div className={Style.field}>
                                                <label htmlFor="dish">
                                                    Dish served<span>*</span>
                                                </label>
                                                <select
                                                    onChange={(e) => {
                                                        setDishValue(
                                                            e.target.value,
                                                        );
                                                    }}
                                                    select={dish_value}
                                                    name="dish"
                                                    id="dish"
                                                >
                                                    <option value="apple_pie">
                                                        Apple pie
                                                    </option>
                                                    <option value="angel">
                                                        Angel food cake
                                                    </option>
                                                    <option value="strawberry">
                                                        Strawberry crumble
                                                    </option>
                                                    <option value="almond">
                                                        Almond and date cake
                                                    </option>
                                                    <option value="ice-cream">
                                                        Ice-cream
                                                    </option>
                                                </select>
                                            </div>
                                            <div className={Style.field}>
                                                <label htmlFor="menu">
                                                    Neby sticked on the wall
                                                    <span>*</span>
                                                </label>
                                                <select
                                                    onChange={(e) => {
                                                        setStickValue(
                                                            e.target.value ==
                                                                "true",
                                                        );
                                                    }}
                                                    name="menu"
                                                    id="menu"
                                                >
                                                    <option value="true">
                                                        Yes
                                                    </option>
                                                    <option value="false">
                                                        No
                                                    </option>
                                                </select>
                                            </div>
                                            <button
                                                className={
                                                    Style.primary_button_field
                                                }
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    addToDatabase();
                                                }}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="25"
                                                    height="24"
                                                    viewBox="0 0 25 24"
                                                    fill="none"
                                                >
                                                    <g clipPath="url(#clip0_337_1390)">
                                                        <path
                                                            d="M12.5 5V19"
                                                            stroke="black"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M5.5 12H19.5"
                                                            stroke="black"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_337_1390">
                                                            <rect
                                                                width="24"
                                                                height="24"
                                                                fill="white"
                                                                transform="translate(0.5)"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <span>Add to database</span>
                                            </button>
                                        </div>
                                    ) : (
                                        <div className={Style.side_card_body}>
                                            <div className={Style.success_alert}>
                                                <img style={{height: '10rem'}} src="/ambassadors_images/success_gif.gif" alt="success" />
                                                <h3>Address added successfully</h3>
                                            </div>
                                            <button
                                                className={
                                                    Style.primary_button_field
                                                }
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setFormSuccess(false);
                                                }}
                                                style={{
                                                    position: "fixed",
                                                    bottom: "2rem",
                                                    margin: "0 1.5rem 0 0",
                                                }}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="25"
                                                    height="24"
                                                    viewBox="0 0 25 24"
                                                    fill="none"
                                                >
                                                    <g clipPath="url(#clip0_337_1390)">
                                                        <path
                                                            d="M12.5 5V19"
                                                            stroke="black"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M5.5 12H19.5"
                                                            stroke="black"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_337_1390">
                                                            <rect
                                                                width="24"
                                                                height="24"
                                                                fill="white"
                                                                transform="translate(0.5)"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <span>
                                                    Add more to database
                                                </span>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="dashboard_list" className={Style.dashboard_list}>
                        <table className={Style.table}>
                            <tbody className={Style.table_body}>
                                {card == "first" ? (
                                    <>
                                        <tr>
                                            <th>Street Address</th>
                                            <th>Places</th>
                                            <th>Date & time</th>
                                            <th>Order placed</th>
                                            <th>Order value</th>
                                        </tr>
                                        {orders.map((v, i) => {
                                            return (
                                                <tr key={i}>
                                                    <td>{v.street_address}</td>
                                                    <td>{v.places}</td>
                                                    <td>{v.date_time}</td>
                                                    <td>{v.order_placed}</td>
                                                    <td>{v.order_value}</td>
                                                </tr>
                                            );
                                        })}
                                    </>
                                ) : card == "second" ? (
                                    <>
                                        <tr>
                                            <th>Street Address</th>
                                            <th>Places</th>
                                            <th>Date & time</th>
                                        </tr>
                                        {addressAdded.map((v, i) => {
                                            const someDate = new Date(
                                                v.timeStamp,
                                            );
                                            return (
                                                <tr key={i}>
                                                    <td>{v.address}</td>
                                                    <td>{v.city}</td>
                                                    <td>
                                                        {
                                                            months[
                                                                someDate.getMonth() +
                                                                    1
                                                            ]
                                                        }{" "}
                                                        {someDate.getDate()},{" "}
                                                        {someDate.getFullYear()}{" "}
                                                        {someDate.toLocaleTimeString()}
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </>
                                ) : null}
                            </tbody>
                        </table>
                    </div>
                    {card == "first" ? (
                        <>
                            <div className={Style.dashboard_total}>
                                <h3>
                                    Total order value <span>$ 500</span>
                                </h3>
                            </div>
                        </>
                    ) : null}
                </div>
            </div>

            {card === "third" && (
                <div id="popup" className={Style.popup}>
                    <div className={Style.popup_card}>
                        <div className={Style.popup_card_head}>
                            <div
                                className={Style.cross_icon}
                                onClick={(e) => {
                                    e.preventDefault();
                                    // document.querySelector('#popup').style.display = 'none';
                                    setCard("first");
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
                        </div>
                        <div className={Style.popup_card_body}>
                            <h2>
                                Money will be disbursed in the first week of{" "}
                                {months[parseInt(currentMonth) + 1]}
                            </h2>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
