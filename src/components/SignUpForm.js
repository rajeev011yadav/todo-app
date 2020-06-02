import React, {useState} from "react";
import {signUp} from "../store/action-creator";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";


function SignUpFrom(props) {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    
    const handleEmailInput = (e) => {
        setEmail(e.target.value);
    }
    
    const handleFirstNameInput = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastNameInput = (e) => {
        setLastName(e.target.value);
    }

    const handlePasswordInput = (e) => {
        setPassword(e.target.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (email && firstName && lastName && password) {
            props.signUp({email, firstName, lastName, password});
        }
    }

    if (props.logedIn) return <Redirect to="/"/>

    return (
        <form className="col-5 mx-auto border py-2 mt-5" onSubmit={handleFormSubmit}>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" value={email} onChange={handleEmailInput}/>
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" id="firstName" onChange={handleFirstNameInput} />
                </div>
                <div className="col">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className="form-control" id="lastName" onChange={handleLastNameInput} />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" onChange={handlePasswordInput}/>
            </div>
            <button type="submit" className="btn btn-primary">SignUp</button>
        </form>
    );
}

const matchStateToProps = (store) => ({
    logedIn: store.logedIn
});

const matchDispatchToProp = (dispatch) => ({
    signUp: user => dispatch(signUp(user)),
});

export default connect(matchStateToProps, matchDispatchToProp)(SignUpFrom);