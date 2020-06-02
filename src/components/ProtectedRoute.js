import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ children, ...props }) => {
    if (props.logedIn != undefined && props.logedIn) return (
        <Fragment>
            {children}
        </Fragment>
    )
    return <Redirect to="/signup" />
}

const matchStateTOProp = (store) => ({
    logedIn: store.logedIn
})

export default connect(matchStateTOProp)(PrivateRoute);