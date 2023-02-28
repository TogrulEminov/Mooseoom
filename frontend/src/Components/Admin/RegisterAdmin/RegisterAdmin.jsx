import React from 'react'
import { Link } from "react-router-dom"
import "./_RegisterAdmin.scss"
const RegisterAdmin = () => {
    return (
        <div className='allRegister'>
            <div className="container">
                <div className="row">
                    <div className="col-6 col-lg-6 col-md-6 col-s-6 col-xs-6">
                        <div className="registerForm">
                            <form action="">
                            <h1>Register</h1>
                                <div className="inputOne">
                                    <input type="text" name='name' placeholder='Enter your name' />
                                </div>
                                <div className="inputOne">
                                    <input type="email" name='email' placeholder='Enter your email' />
                                </div>
                                <div className="inputOne">
                                    <input type="password" name='password' placeholder='Enter your password' />
                                </div>
                                <div className="inputOne">
                                    <button>Register now</button>
                                </div>
                                <div className="inputOne">
                                    <span>Do you have account?<Link to="/admin/login">Log in</Link></span>
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
