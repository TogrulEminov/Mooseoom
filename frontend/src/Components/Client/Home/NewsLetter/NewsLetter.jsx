import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import "./_NewsLetter.scss"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const Newsletter = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div data-aos="zoom-in" className='newsLetterSection'>
            <div className="container">
                <div className="newsLetterBackground">
                    <div className="row">
                        <div className="col-10 col-lg-10 col-md-10 col-xs-12 col-s-12 newsLetterContent">
                            <h3 >Subscribe To Our Newsletter Now</h3>
                            <Link to="/buyticket">Buy Ticket</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
