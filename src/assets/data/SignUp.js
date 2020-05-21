import React, { Component } from 'react'
import Header from './Header'
import '../style/style.css'

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
            <Header />
            <div className="card-register">
                <div className="card-header">
                    <h3>Register</h3>
                </div>
                <form id="form">
                <br />
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
                <button type="submit"  className="register_btn">Register</button>
        </form>
        </div>
        </div>
        )
    }
}

export default SignUp;
