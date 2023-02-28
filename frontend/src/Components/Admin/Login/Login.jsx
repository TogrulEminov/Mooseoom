import React from 'react'
import "./_Login.scss"
import { Link } from "react-router-dom"
const Login = () => {
    return (
        <div className='allLogin'>
            <div className="container">
                <div className="row">
                    <div className="col-6 col-lg-6 col-md-6 col-s-6 col-xs-6">
                        <div className="loginForm">
                            <form action="">
                                <h1>Login</h1>
                                <div className="inputOne">
                                    <input type="email" name='email' placeholder='Enter your email' />
                                </div>
                                <div className="inputOne">
                                    <input type="password" name='password' placeholder='Enter your password' />
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
                </div>
            </div>
        </div>
    )
}

export default Login
