import Style from './ZipCode.module.css';

export default function ZipCode(props) {
    return (
        <div className={Style.zipCode}>
            <input placeholder={props.placeholder} type="text" name="zipcode" id="zipcode" />
            <button className='button_main'>Get started</button>
        </div>
    );
}
