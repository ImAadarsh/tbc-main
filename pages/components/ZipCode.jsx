import Style from './ZipCode.module.css';
import ZipCodePopup from './ZipCodePopup'
import { useState } from 'react';

export default function ZipCode(props) {
    const [ zipCodePopupShow, setZipCodePopupShow ] = useState(false);

    return (
        <>
            <div onClick={() => { setZipCodePopupShow(true) }} className={Style.zipCode}>
                <input placeholder={props.placeholder} type="text" name="zipcode" id="zipcode" />
                <button className='button_main'>Get started</button>
            </div>
            <ZipCodePopup show={zipCodePopupShow} setFunc={setZipCodePopupShow} id={props.id} />
        </>
    );
}
