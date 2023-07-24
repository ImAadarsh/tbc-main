import { useEffect } from "react";
import Style from "./SpacePopup.module.css";

export default function SpacePopup(props) {
    useEffect(() => {
        if(props.show) {
            document.getElementById(`SpacePopup_${props.id}`).style.display = "flex";
        }else {
            document.getElementById(`SpacePopup_${props.id}`).style.display = "none";
        }
    }, [ props ]);
    return (
        <div id={`SpacePopup_${props.id}`} className={Style.SpacePopupSection}>
            <div className={Style.SpacePopup}>
                <div className={Style.SpacePopup_card_head}>
                    {props.title}
                    <div
                        className={Style.SpacePopup_cross_icon}
                        onClick={() => {
                            document.getElementById(`SpacePopup_${props.id}`).style.display = "none";
                            props.setFunc(false);
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
                <div className={Style.SpacePopup_card_body}>{props.item}</div>
            </div>
        </div>
    );
}
