import React from 'react'
import populated from "../../../../media/jenny-saville.jpg"
import { Link } from "react-router-dom"
import "./_Populated.scss"
const Populated = () => {
    return (
        <div className='populatedSection'>
            <div className="container">
                <div className="row">
                    <div className="col-6 col-lg-6 col-md-6 col-xs-12 col-s-12 populatedLeft">
                        <img src={populated} alt="jenny-saville" />
                    </div>
                    <div className="col-6 col-lg-6 col-md-6 col-xs-12 col-s-12 populatedRight">
                        <h4>Jan 10 - Feb 02</h4>
                        <h2>Jenny Saville Exhibition</h2>
                        <p>Since her debut in 1992, Saville's focus has remained on the female body. She has stated, "I'm drawn to bodies that emanate a sort of state of in-betweeness.”</p>
                        <div className='buyTicket'>
                        <Link to="buyticket">Buy Ticket</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Populated
