import React, { Component } from 'react'

class SignUp extends Component {
    state ={
        username: "",
        email: "",
        password: "",
        repassword: ""
    }
    render() {
        return(
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h3>Register</h3>
                </div>
                <form id="form">
                    <input type="text"
                        name="username" required
                        id="username"
                        placeholder="Username"
                    /><br /><br />
                <input type="text"
                    name="email" required
                    id="email"
                    placeholder="Email address"
                /><br /><br />
                <input type="text"
                    name="password" required
                    id="password"
                    placeholder="Password"
                /><br /><br />
                <input type="text"
                    name="repassword" required
                    id="repassword"
                    placeholder="Confirm password"
                /><br /><br />
            <div className="form-group">
                <button type="submit"  className="btn float-right login_btn">REGISTER</button>
            </div>
        </form>
        </div>
        </div>
        )
    }
}

export default SignUp;
