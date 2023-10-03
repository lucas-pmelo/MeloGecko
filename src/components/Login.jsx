import React, { useEffect, useRef, useState } from "react";
import Profile from "../pages/Profile";
import "../styles/Login.css";
import { useForm } from "react-hook-form";

const Login = () => {
    const name = useRef();
    const email = useRef();
    const password = useRef();

    const [showProfile, setShowProfile] = useState(false);
    const [show, setShow] = useState(false);

    const localLogin = localStorage.getItem("login");
    const localEmail = localStorage.getItem("email");
    const localName = localStorage.getItem("name");
    const localPassword = localStorage.getItem("password");

    const {
        register,
        formState: { errors }
    } = useForm();

    useEffect(() => {
        if (localLogin) {
            setShowProfile(true);
        }
        if (localEmail) {
            setShow(true);
        }
    });

    const handleClick = () => {
        if (
            name.current.value &&
            email.current.value &&
            password.current.value
        ) {
            localStorage.setItem("name", name.current.value);
            localStorage.setItem("email", email.current.value);
            localStorage.setItem("password", password.current.value);
            localStorage.setItem("login", email.current.value);
            window.location.reload();
        }
    };

    const handleSignIn = () => {
        if (
            email.current.value === localEmail &&
            password.current.value === localPassword
        ) {
            localStorage.setItem("login", email.current.value);
            window.location.reload();
        } else {
            alert("Invalid Credentials");
        }
    };

    const deleteAccount = () => {
        localStorage.clear();
        window.location.reload();
    };

    return (
        <div className="login">
            {showProfile ? (
                <Profile />
            ) : show ? (
                <div className="loginContainer">
                    <h1>Hello, {localName}</h1>
                    <div className="inputSpace">
                        <input placeholder="Email" type="text" ref={email} />
                    </div>
                    <div className="inputSpace">
                        <input
                            placeholder="Password"
                            type="password"
                            ref={password}
                        />
                    </div>
                    <button onClick={handleSignIn}>Login</button>
                    <div className="forgot">
                        <p>Forgot Password?</p>
                        <p className="forgotBtn" onClick={deleteAccount}>
                            Delete your account
                        </p>
                    </div>
                </div>
            ) : (
                <div className="loginContainer">
                    <h1>Register</h1>
                    <div className="inputSpace">
                        <input placeholder="Name" type="text" ref={name} />
                    </div>
                    <div className="inputSpace">
                        <input placeholder="Email" type="text" ref={email} />
                    </div>
                    <div className="inputSpace">
                        <input
                            placeholder="Password"
                            type="password"
                            ref={password}
                        />
                    </div>
                    <button onClick={handleClick}>Register</button>
                </div>
            )}
        </div>
    );
};

export default Login;
