import React, { useEffect, useState } from 'react'
import "./_Login.scss"
import { Link } from "react-router-dom"
import axios from "axios"
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const token = getCookie('token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);
    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) {
            return parts.pop().split(';').shift();
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            window.alert("Please fill in all fields and login or sign up.");
            return;
        }
        axios.post('http://localhost:5555/auth/login', { email, password })
        .then((response) => {
            console.log("success", response);
            document.cookie = `token=${response.data.token}; expires=${new Date(Date.now() + 36000000).toUTCString()}; path=/`;
            window.location.href = '/admin';
            setIsLoggedIn(true);
            setEmail('');
            setPassword('');
            window.alert("Success login");
        })
        .catch((error) => {
            console.log("catch", error);
            window.alert("Don't find such account.");
        });
};
const handleLogout = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsLoggedIn(false);
    setEmail('');
};
    return (
        <div className='allLogin'>
            <div className="container">
                <div className="row">
                {isLoggedIn ? (
                    <div className='logOut'>
                    <p >
                    You're already logged in !
                    </p>
                    <button onClick={handleLogout}>Logout</button>
                </div> 
                 ) : (
                    <div className="col-6 col-lg-6 col-md-10 col-s-10 col-xs-10">
                        <div className="loginForm">
                            <form  onSubmit={handleSubmit}>
                                <h1>Login</h1>
                                <div className="inputOne">
                                    <input type="email" name='email' placeholder='Enter your email'  value={email} onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                                <div className="inputOne">
                                    <input type="password" name='password' placeholder='Enter your password'value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="inputOne">
                                    <button>Login now</button>
                                </div>
                                <div className="inputOne">
                                    <span>Don't you have account?Go to <Link to="/admin/register">Register </Link>page</span>
                                </div>
                            </form>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Login
