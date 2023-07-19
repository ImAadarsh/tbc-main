import Style from "./index.module.css";
import ZipCode from "./components/ZipCode";
import { useEffect, useState } from "react";

export default function Index() {
    const [platePosition, setPlatePosition] = useState(1);
    const [platesItems, setPlatesItems] = useState([
        {
            id: "a",
            idx: 1,
        },
        {
            id: "b",
            idx: 2,
        },
        {
            id: "c",
            idx: 3,
        },
        {
            id: "d",
            idx: 4,
        },
        {
            id: "e",
            idx: 5,
        },
        {
            id: "f",
            idx: 6,
        },
        {
            id: "g",
            idx: 7,
        },
    ]);

    const chnageOrder = (n) => {
        let newPlatesItems = [...platesItems];
        let old_idx = newPlatesItems[n % 6].idx;
        let new_idx = newPlatesItems[6].idx;
        newPlatesItems[n % 6].idx = new_idx;
        newPlatesItems[6].idx = old_idx;
        setPlatesItems(newPlatesItems);
    };

    useEffect(() => {}, []);

    return (
        <>
            <div className={Style.main}>
                <div className={Style.hero}>
                    <div className={Style.hero_left}>
                        <h1>
                            Chef-crafted <span>cravings</span> for every
                            Bostonian
                        </h1>
                        <p>
                            <span>Steal our kitchen.</span> Everything for $ 5
                            *Good news: rate includes taxes unlike other apps
                        </p>
                        <ZipCode placeholder={"Enter Zip code"} />
                    </div>
                    <div className={Style.hero_right}>
                        <div className={Style.plates_container}>
                            <div className={Style.plate_rope}>
                                {platesItems.map((plate, index) => {
                                    return (
                                        <img
                                            className={`dish_${plate.id}`}
                                            src={`./dish_${plate.idx}.svg`}
                                            alt="dish"
                                        />
                                    );
                                })}
                            </div>
                        </div>
                        <div className={Style.plate_scrole_arrows}>
                            <div
                                className={Style.plate_scrole_arrow}
                                onClick={() => {
                                    chnageOrder(platePosition);
                                    setPlatePosition(platePosition + 1);
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="42"
                                    height="42"
                                    viewBox="0 0 42 42"
                                    fill="none"
                                >
                                    <path
                                        d="M21 35V7M8.75 19.25L21 7L33.25 19.25"
                                        stroke="black"
                                        strokeWidth="5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <div
                                className={Style.plate_scrole_arrow}
                                onClick={() => {
                                    chnageOrder(platePosition);
                                    setPlatePosition(platePosition + 1);
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="42"
                                    height="42"
                                    viewBox="0 0 42 42"
                                    fill="none"
                                >
                                    <path
                                        d="M21 7V35M8.75 22.75L21 35L33.25 22.75"
                                        stroke="black"
                                        strokeWidth="5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
