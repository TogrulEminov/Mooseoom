import React, { useContext } from 'react'
import { mainContext } from '../../../Context/Context'
import "./_AllEvents.scss"
import {Link} from "react-router-dom"
const AllEvents = () => {
    const { blog } = useContext(mainContext)
    return (
        <div className='allEvents'>
            <div className="container">
                <div className="allEventHead">
                    <div className="row">
                        <div className="content">
                            <button className='active'>All Events</button>
                        </div>
                        <div className="content">
                            <button>Today</button>
                        </div>
                        <div className="content">
                            <button>This Week</button>
                        </div>
                        <div className="content">
                            <button>This Month</button>
                        </div>
                    </div>
                </div>
                <div className="allEventCard">
                    <div className="row">
                        {blog && blog
                            .filter(item => item.catagories === "Today" || item.catagories === "This Month" || item.catagories === "This Week")
                            .map((item) => (
                                <div className="col-4 col-lg-4 col-md-6 col-xs-12 col-s-12" key={item._id}>
                                    <div className="card">
                                        <Link to=""><img src={item.blogImage} alt="" /></Link>
                                        <article>
                                            <h3>{item.date}</h3>
                                       
                                               <h2><Link to="">{item.title}</Link></h2>
                                      
                                            <p>{item.information}</p>
                                        </article>
                                    </div>
                                </div>
                            ))}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllEvents
