import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <a className="navbar-brand" href="/">Todo App</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className={"nav-link"} to="/signup">SignUp</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={"nav-link"} to="/login">LogIn</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Header;