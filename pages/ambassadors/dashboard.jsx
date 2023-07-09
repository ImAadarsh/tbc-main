import Style from "./dashboard.module.css";
import Header from "../components/Header";
import { useEffect, useState, Component, useRef } from "react";

class MonthBox extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            value: this.props.value || "N/A",
        };
        this._handleClick = this._handleClick.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            value: nextProps.value || "N/A",
        });
    }

    render() {
        return (
            <div className="box" onClick={this._handleClick}>
                <label>{this.state.value}</label>
            </div>
        );
    }

    _handleClick(e) {
        this.props.onClick && this.props.onClick(e);
    }
}

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

const address_added = [
    {
        street_address: "185 Devonshire St. Boston",
        places: "Brighton",
        date_time: "Jun 12, 2023 09:30 AM",
    },
    {
        street_address: "185 Devonshire St. Boston",
        places: "Brighton",
        date_time: "Jun 12, 2023 09:30 AM",
    },
];

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
    const [selectedMonths, setSelectedMonths] = useState(null);

    const pickerLang = {
        months: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        from: "From",
        to: "To",
    };
    const [mvalue, setMvalue] = useState({ year: 2021, month: 5 });

    const makeText = (m) => {
        if (m && m.year && m.month)
            return pickerLang.months[m.month - 1] + ". " + m.year;
        return "?";
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
        })

        if (card == "third") {
            document.querySelector(`#dashboard_list`).style.border = "none";
        } else {
            document.querySelector(`#dashboard_list`).style.border =
                "1px solid var(--dont-use-neutral-neutral-50, #E6E6E6)";
        }
    }, [ card, currentMonth ]);

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
                                <>Address in the system ({addressAddedCount})</>
                            ) : null}
                        </h2>
                        <div className={Style.left_dashboard_panel} onClick={(e) => {
                            if(document.querySelector(`#colender_popup`).style.display === "" || document.querySelector(`#colender_popup`).style.display === "none") {
                                document.querySelector(`#colender_popup`).style.display = "block";
                            }else {
                                document.querySelector(`#colender_popup`).style.display = "none";
                            }
                        }}>
                            <div className={Style.colender}>
                                <h3>{months[currentMonth]} 2023</h3>
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
                                <div id="colender_popup" className={Style.colender_popup}>
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
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
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
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <div className={Style.colender_popup_body}>
                                        {Object.keys(months).map((v) => {
                                            return (
                                                <div
                                                    onClick={(e) => {
                                                        setCurrentMonth(v);
                                                    }}
                                                    id={months[v]}
                                                    className={Style.monthsOption}
                                                >
                                                    {months[v]}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                            <button className={Style.add_button}>
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
                            </button>
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
                                            return (
                                                <tr key={i}>
                                                    <td>{v.street_address}</td>
                                                    <td>{v.places}</td>
                                                    <td>{v.date_time}</td>
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
                                Money will be disbursed in the first week of {months[parseInt(currentMonth) + 1]}
                            </h2>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
