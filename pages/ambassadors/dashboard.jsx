import Style from "./dashboard.module.css";
import Header from "../components/Header";
import { useEffect, useState } from "react";

export default function Dashboard() {

    const [ card, setCard ] = useState('first');

    useEffect(() => {
        [ 'first', 'second', 'third' ].map(v => {
            if(v == card) {
                document.querySelector(`#${v}`).classList.add(Style.card_active);
            }else {
                document.querySelector(`#${v}`).classList.remove(Style.card_active);
            }
        })
    }, [ card ])

    return (
        <>
            <Header />
            <div className={Style.dashboard}>
                <div className={Style.left}>
                    <div className={Style.cards}>
                        <div onClick={(e) => {
                            setCard('first');
                        }} id="first" style={{background: "#FFF7CC"}} className={Style.card}>
                            <h3>Orders placed</h3>
                            <h1>45</h1>
                            <p>
                                order placed from the address in the month of June
                            </p>
                        </div>
                        <div onClick={(e) => {
                            setCard('second');
                        }} id="second" style={{background: "#E0E4FF"}} className={Style.card}>
                            <h3>Address added</h3>
                            <h1>54</h1>
                            <p>
                            Address added since inception
                            </p>
                        </div>
                        <div onClick={(e) => {
                            setCard('third');
                        }} id="third" style={{background: "#EBFCFF"}} className={Style.card}>
                            <h3>Accumulated $$$</h3>
                            <h1>$400</h1>
                            <p>
                            Commission in the month of June
                            </p>
                        </div>
                    </div>
                </div>
                <div className={Style.right}>
                    
                </div>
            </div>
        </>
    );
}
