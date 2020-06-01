import React from "react";


function SignUpFrom() {
    return (
        <form class="col-5 mx-auto border py-2 mt-5">
            <div className="form-group">
                <label for="email">Email</label>
                <input type="email" className="form-control" id="email" />
            </div>
            <div className="row">
                <div className="col">
                    <label for="firstName">First Name</label>
                    <input type="text" className="form-control" id="firstName" />
                </div>
                <div className="col">
                    <label for="lastName">Last Name</label>
                    <input type="text" className="form-control" id="lastName" />
                </div>
            </div>
            <div className="form-group">
                <label for="password">Password</label>
                <input type="password" className="form-control" id="password" />
            </div>
            <button type="submit" className="btn btn-primary">SignUp</button>
        </form>
    );
}

export default SignUpFrom;