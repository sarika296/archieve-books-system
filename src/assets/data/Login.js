import React, { Component } from 'react'
import Header from './Header'
import '../style/style.css'

class Login extends Component {
    state ={
        email: "",
        password: ""
    }
    render() {
        return(
        <div className="container">
        <Header />
            <div className="card-login">
                <div className="card-header">
                <br />
                    <h3>Login</h3><br />
                </div>
            <form id="form">
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
                <button type="submit" className="login_btn">Login</button>
        </form>
        </div>
        </div>
        )
    }
}

export default Login;
