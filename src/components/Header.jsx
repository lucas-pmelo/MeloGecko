import React from "react";
import "../styles/Header.css";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav>
            <div className="navbarContainer">
                <div className="logoContainer">
                    <Link to="/" className="navbarLogo">
                        <img
                            src={Logo}
                            alt="logo"
                            style={{ borderRadius: 115 }}
                            className="logo"
                        />
                    </Link>
                    <Link to="/" className="navbarLogo">
                        <h1 className="title">MeloGecko</h1>
                    </Link>
                </div>
                <ul className="navMenu">
                    <li className="navItem">
                        <Link to="/coinstable" className="navLinks">
                            Coins
                        </Link>
                    </li>
                    <li className="navItem">
                        <Link to="/coinsinfo" className="navLinks">
                            Info
                        </Link>
                    </li>
                    <li className="navItem">
                        <Link to="/profile" className="navLinks">
                            Profile
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
