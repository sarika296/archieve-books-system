import React, { Component } from 'react'
import axios from 'axios';
import Header from './Header'
import '../style/style.css'

class Login extends Component {
    state ={
        email: "",
        password: ""
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        const { email, password }=this.state;
        e.preventDefault();
        if(email!=="" && password!=="")
        {
            axios.post('/login', { email: email, password: password })
            .then(res => {
                console.log(res.status);
              })
        }
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
            <form id="form" method='post' onSubmit={this.onSubmit}>
                <input type="text"
                    name="email" required
                    id="email"
                    placeholder="Email address"
                    onChange={this.onChange}
                /><br /><br />
                <input type="text"
                    name="password" required
                    id="password"
                    placeholder="Password"
                    onChange={this.onChange}
                /><br /><br />
                <button type="submit" className="login_btn">Login</button>
        </form>
        </div>
        </div>
        )
    }
}

export default Login;
