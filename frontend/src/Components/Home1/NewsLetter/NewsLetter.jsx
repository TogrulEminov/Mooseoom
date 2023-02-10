import React from 'react'
import { Link } from "react-router-dom"
import "./_NewsLetter.scss"
const Newsletter = () => {
    return (
        <div className='newsLetterSection'>
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
