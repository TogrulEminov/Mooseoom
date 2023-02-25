import React from 'react'
import "./_ContactBody.scss"
import { BiEnvelopeOpen, BiMapAlt } from "react-icons/bi"
import { AiOutlineClockCircle } from "react-icons/ai"
import { Link } from "react-router-dom"
const ContactBody = () => {
    return (
        <div className='contactBody'>
            <div className="container">
                <div className="row">
                    <div className='col-4 col-lg-4 col-md-6 col-s-12 col-xs-12'>
                        <div className="card">
                            <article>
                                <div className="icon">
                                    <BiEnvelopeOpen />
                                </div>
                                <h3>Phone & Email</h3>
                                <div className="content">
                                    <p>+1-202-521-1211</p>
                                    <p>+1-202-555-0133</p>
                                    <p>new-york@mooseoom.com</p>
                                </div>
                                <Link to="">learn more</Link>
                            </article>
                        </div>
                    </div>
                    <div className='col-4 col-lg-4 col-md-6  col-s-12 col-xs-12'>
                        <div className="card card-2">
                            <article>
                                <div className="icon">
                                    <BiMapAlt />
                                </div>
                                <h3>Address</h3>
                                <div className="content">
                                    <p>3 Wakehurst Stre</p>
                                    <p>New York, NY 10002,</p>
                                    <p>United States</p>
                                </div>
                                <Link to="">learn more</Link>
                            </article>
                        </div>
                    </div>
                    <div className='col-4 col-lg-4 col-md-6 col-s-12 col-xs-12'>
                        <div className="card">
                            <article>
                                <div className="icon">
                                    <AiOutlineClockCircle />
                                </div>
                                <h3>Working Hours</h3>
                                <div className="content">
                                    <p>Mon-Fri 10am – 5pm</p>
                                    <p>Sat 10am – 3pm</p>
                                    <p>Sun 10am – 1pm</p>
                                </div>
                                <Link to="">learn more</Link>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactBody
