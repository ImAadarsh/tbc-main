import MidZipRow from "./components/MidZipRow";
import Style from "./contact.module.css";
import ReCAPTCHA from "react-google-recaptcha";

export default function contact() {
    return (
        <>
            <div className={Style.contact}>
                <div className={Style.background_set}>
                    <img src="/dish_7.svg" alt="dish" />
                </div>
                <div className={Style.contact_container}>
                    <h1>Contact Us</h1>
                    <div className={Style.contacts_fields}>
                        <div className={Style.contact_field}>
                            <label htmlFor="email">
                                Email<span>*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="johndue@mail.com"
                            />
                        </div>
                        <div className={Style.contact_field}>
                            <label htmlFor="sub">
                                Submject<span>*</span>
                            </label>
                            <input
                                type="text"
                                name="sub"
                                placeholder="Add your subject here"
                            />
                        </div>
                        <div className={Style.contact_field}>
                            <label htmlFor="msg">
                                Message<span>*</span>
                            </label>
                            <input
                                type="text"
                                name="msg"
                                placeholder="Add your message here"
                            />
                        </div>
                        <ReCAPTCHA
                            sitekey="Your client site key"
                            onChange={() => {}}
                        />
                        <button style={{marginTop: "1.5rem"}} className="button_main">Send</button>
                    </div>
                </div>
                <div className={Style.space}></div>
                <MidZipRow/>
            </div>
        </>
    );
}
