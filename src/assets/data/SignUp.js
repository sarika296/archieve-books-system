import React, { Component } from 'react'
import Header from './Header'
import '../style/style.css'
import axios from 'axios';

class SignUp extends Component {
    state ={
        username: "",
        email: "",
        password: "",
        repassword: ""
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        const { username, email, password, repassword }=this.state;
        e.preventDefault();
        if(password===repassword)
        {
            axios.post('/signup', { username: username, email: email, password: password })
            .then(res => {
                console.log(res.status);
              })
        }
        else{
            alert("confirm password didn't match");
        }
    }

    render() {
        return(
        <div className="container">
            <Header />
            <div className="card-register">
                <div className="card-header">
                    <h3>Register</h3>
                </div>
                <form id="form" method="post" onSubmit={this.onSubmit}>
                <br />
                    <input type="text"
                        name="username" required
                        id="username"
                        placeholder="Username"
                        onChange={this.onChange}
                    /><br /><br />
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
                <input type="text"
                    name="repassword" required
                    id="repassword"
                    placeholder="Confirm password"
                    onChange={this.onChange}
                /><br /><br />
                <button type="submit"  className="register_btn">Register</button>
        </form>
        </div>
        </div>
        )
    }
}

export default SignUp;
