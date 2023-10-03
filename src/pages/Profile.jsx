import React from "react";
import "../styles/Profile.css";
import User from "../assets/user.png";

const Profile = () => {
    const logout = () => {
        localStorage.removeItem("login");
        window.location.reload();
    };

    const deleteAccount = () => {
        localStorage.clear();
        window.location.reload();
    };

    return (
        <div className="profile">
            <h1 className="profileTitle">Profile</h1>
            <img src={User} alt="User photo" className="profileImage" />
            <p className="profileWelcome">
                Welcome {localStorage.getItem("name")}!!
            </p>
            <div className="profileData">
                <p className="profileName">
                    Name: {localStorage.getItem("name")}
                </p>
                <p className="profileEmail">
                    Email: {localStorage.getItem("email")}
                </p>
            </div>
            <div className="profileBtns">
                <button onClick={logout} className="logout">
                    Logout
                </button>
                <button onClick={deleteAccount} className="delete">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Profile;
