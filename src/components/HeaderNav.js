import React from 'react';
import {Link} from "react-router-dom"
import { connect } from 'react-redux';
import {logOut} from "../store/action-creator";

const HeaderNav = ({logedIn, user, logOut}) => {
    
    if (logedIn) return (
        <ul className="navbar-nav">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-capitalize" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   <img className="img-thumbnail mr-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-oHPtQDZ7-41cOReFobFY4N7xlQEzIAPnIDG93z4xlO4NITGd&usqp=CAU" style={{height: "30px"}}/>
                   {user.firstName + " " + user.lastName}
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to="/completed">Completed Todos</Link>
                    <Link className="dropdown-item" to="/deleted">Deleted Todos</Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to={"/login"}onClick={logOut}> LogOut</Link>
                </div>
            </li>
        </ul>
    );

    return (
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link className={"nav-link"} to="/signup">SignUp</Link>
            </li>
            <li className="nav-item">
                <Link className={"nav-link"} to="/login">LogIn</Link>
            </li>
        </ul>
    )
}

const matchStateToProps = (store) => ({
    logedIn: store.logedIn,
    user: store.user
})

const matchDispatchToProps = (dispatch) => ({
    logOut: () => dispatch(logOut()),
})

export default connect(matchStateToProps, matchDispatchToProps)(HeaderNav);