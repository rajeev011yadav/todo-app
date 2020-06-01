import React from "react";

function LogInForm() {
    return (
        <form className="col-5 mx-auto border py-2 mt-5">
            <div className="form-group">
                <label for="email">Email</label>
                <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group">
                <label for="password">password</label>
                <input type="password" className="form-control" id="password" />
            </div>
            <button type="submit" className="btn btn-primary">LogIn</button>
        </form>
    );
}

export default LogInForm;