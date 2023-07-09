import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const router = new useRouter();

    const handelLogin = () => {
        if (email && password) {
            fetch('https://api.thebostoncravings.com/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                    userType: "ambassador"
                }),
            })
            .then((response) => response.json())
            .then((data) => {
                if (data.token) {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('data', JSON.stringify(data.user[0]));
                    router.push('/ambassadors/dashboard');
                } else {
                    alert(data.message);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
           router.push('/ambassadors/dashboard');
        }
    }, []);

    return (
        <>
            <div className="login_container">
                <div className="side_image">
                    <img src="/ambassadors_images/login_image.webp" alt="side image" />
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
                                    <input onChange={(e) => {
                                        setEmail(e.target.value);
                                    }} type="email" name="email" id="email" value={email} />
                                </div>
                            </div>
                            <div className="login_filed">
                            <div className="login_filed_image">
                                    <img src="/key.svg" alt="img" />
                                </div>
                                <div className="field">
                                    <label htmlFor="password">PASSWORD</label>
                                    <input onChange={(e) => {
                                        setPassword(e.target.value);
                                    }} type="password" name="password" id="password" value={password} />
                                </div>
                            </div>
                            <button onClick={() => {
                                handelLogin()
                            }} className="primary_button">Signin</button>
                        </div>
                    </div>
                    <div className="login_footer"></div>
                </div>
            </div>
        </>
    );
}
