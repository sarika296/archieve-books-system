import React, { Component } from 'react'
import '../style/style.css'

class Login extends Component {
    state ={
        email: "",
        password: ""
    }
    render() {
        return(
        <div className="container">
            <div className="card">
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
            <div className="form-group">
                <button type="submit"  className="btn float-right login_btn">REGISTER</button>
            </div>
        </form>
        </div>
        </div>
        )
    }
}

export default Login;
