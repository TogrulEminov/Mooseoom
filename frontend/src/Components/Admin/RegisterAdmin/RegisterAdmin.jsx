import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "./_RegisterAdmin.scss"
import axios from "axios"
const RegisterAdmin = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
      //!exist account
      const handleSubmit = (event) => {
        event.preventDefault();

        if (!username || !email || !password ) {
            window.alert("Please fill all the fields");
            return;
        }
       
        axios.post('http://localhost:5555/auth/register', { username, email, password })
            .then((response) => {
                console.log("success", response)
                document.cookie = `token=${response.data.token}; expires=${new Date(Date.now() + 36000000).toUTCString()}; path=/`;
                window.location.href = '/admin';

                setUsername('');
                setEmail('');
                setPassword('');

            })
            .catch((error) => {
                console.log("catch", error);
                if (error.response && error.response.data.message === "User already exists") {
                  window.alert("This email is already registered. Please use a different email.");
                }
              });
    };

    return (
        <div className='allRegister'>
            <div className="container">
                <div className="row">
                    <div className="col-6 col-lg-6 col-md-10 col-s-10 col-xs-10">
                        <div className="registerForm">
                            <form onSubmit={handleSubmit} >
                            <h1>Register</h1>
                                <div className="inputOne">
                                    <input type="text" name='name' placeholder='Enter your name' value={username} onChange={(e) => setUsername(e.target.value)} />
                                </div>
                                <div className="inputOne">
                                    <input type="email" name='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="inputOne">
                                    <input type="password" name='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="inputOne">
                                    <button>Register now</button>
                                </div>
                                <div className="inputOne">
                                    <span>Do you have account?<Link to="/admin">Log in</Link></span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterAdmin
