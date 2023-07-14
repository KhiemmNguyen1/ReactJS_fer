import React, { useEffect } from "react";
import './Login2.css';

const Login2 = () => {

    useEffect(() => {
        const sign_in_btn = document.querySelector("#sign-in-btn");
        const sign_up_btn = document.querySelector("#sign-up-btn");
        const container = document.querySelector(".container");

        const sign_in_btn2 = document.querySelector("#sign-in-btn2");
        const sign_up_btn2 = document.querySelector("#sign-up-btn2");

        sign_up_btn.addEventListener("click", () => {
            container.classList.add("sign-up-mode");
        });

        sign_in_btn.addEventListener("click", () => {
            container.classList.remove("sign-up-mode");
        });

        sign_up_btn2.addEventListener("click", () => {
            container.classList.add("sign-up-mode2");
        });

        sign_in_btn2.addEventListener("click", () => {
            container.classList.remove("sign-up-mode2");
        });

    }, []);

    return (
        <div className="container">
            <div class="signIn-signUp">
                <form action="" className="sign-in-form">
                    <h1>Sign In</h1>
                    <div className="input-field">
                        <input type="text" placeholder="Username" />
                    </div>

                    <div className="input-field">
                        <input type="password" placeholder="Password" />
                    </div>

                    <input type="submit" value="Sign in" className="btn" />

                    <p className="social-text">OR SIGN IN WITH</p>

                    <div className="social-media">
                        <button type="submit" className="google">Google</button>
                    </div>

                    <p className="account-text">Don't have an account? <a href="#" id="sign-up-btn2">Sign up</a></p>
                </form>

                <form action="" className="sign-up-form">
                    <h1>Sign Up</h1>
                    <div className="input-field">
                        <input type="text" placeholder="Username" />
                    </div>

                    <div className="input-field">
                        <input type="number" placeholder="Age" min={1} />
                    </div>

                    <div className="input-field">
                        <input type="text" placeholder="Email" />
                    </div>

                    <div className="input-field">
                        <input type="password" placeholder="Password" />
                    </div>

                    <input type="submit" value="Sign up" className="btn" />

                    <p className="social-text">OR SIGN UP WITH</p>

                    <div className="social-media">
                        <button type="submit" className="google">Google</button>
                    </div>

                    <p className="account-text">Already have an account? <a href="#" id="sign-in-btn2">Sign in</a></p>
                </form>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>Member of Student Deal?</h3>
                        <p>Sign in to continue your progress</p>
                        <button className="btn" id="sign-in-btn">Sign in</button>
                    </div>
                    {/* <img className="image" alt="" src="./assets/img/sign_in.png" /> */}
                </div>

                <div className="panel right-panel">
                    <div className="content">
                        <h3>New to Student Deal?</h3>
                        <p>Begin your journey with us todayl</p>
                        <button className="btn" id="sign-up-btn">Sign up</button>
                    </div>
                    {/* <img className="image" alt="" src="./assets/img/sign_up.png" /> */}
                </div>
            </div>
        </div>


    );
};

export default Login2;
