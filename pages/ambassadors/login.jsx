export default function Home() {
    return (
        <>
            <div className="login_container">
                <div className="side_image">
                    <img src="/ambassadors_images/side_image.svg" alt="side image" />
                </div>
                <div className="login_tab">
                    <div className="top_img">
                        <img src="/Logo_Full.svg" alt="logo" />
                    </div>
                    <div className="login_section">
                        <div className="login_heading">
                            <h2>Welcome!</h2>
                            <p>Sign in to your account to continue </p>
                        </div>
                        <div className="login_fileds">
                            <div className="login_filed">
                                <div className="login_filed_image">
                                    <img src="/mail.svg" alt="img" />
                                </div>
                                <div className="field">
                                    <label htmlFor="email">EMAIL ADDRESS</label>
                                    <input type="email" name="email" id="email" />
                                </div>
                            </div>
                            <div className="login_filed">
                            <div className="login_filed_image">
                                    <img src="/key.svg" alt="img" />
                                </div>
                                <div className="field">
                                    <label htmlFor="password">PASSWORD</label>
                                    <input type="password" name="password" id="password" />
                                </div>
                            </div>
                            <button className="primary_button">Signin</button>
                        </div>
                    </div>
                    <div className="login_footer"></div>
                </div>
            </div>
        </>
    );
}
