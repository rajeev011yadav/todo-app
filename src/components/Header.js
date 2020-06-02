import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import HeaderNav from "./HeaderNav";

function Header({user}) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <Link className="navbar-brand" to="/">Todo App</Link>
                <HeaderNav />
            </div>
        </nav>
    )
};

const matchStateToProp = (store) => ({
    user: store.user
});

export default connect(matchStateToProp)(Header);