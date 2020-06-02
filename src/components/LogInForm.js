import React, {useState} from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logIn } from "../store/action-creator";

function LogInForm({logedIn, logIn}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailInput = (e) => setEmail(e.target.value);
    const handlePasswordInput = (e) => setPassword(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault()
        if (email && password) {
            logIn({email, password});
        }
    }

    return !logedIn ?(
        <form className="col-5 mx-auto border py-2 mt-5" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" value={email} onChange={handleEmailInput}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">password</label>
                <input type="password" className="form-control" id="password" value={password} onChange={handlePasswordInput}/>
            </div>
            <button type="submit" className="btn btn-primary">LogIn</button>
        </form>
    ) : <Redirect to="/" />;
}

const matchStateTOProp = (store) => ({
    logedIn: store.logedIn
})

const matchDispatchToProps = (dispatch) => ({
    logIn: (data) => {return dispatch(logIn(data))},
})

export default connect(matchStateTOProp, matchDispatchToProps)(LogInForm);