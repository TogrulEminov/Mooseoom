import React, { useContext } from 'react'
import { mainContext } from '../../../Context/Context'
import "./_AllEvents.scss"
import { Link } from "react-router-dom"
const AllEvents = () => {
    const { blog, blogItems, filterArtItems, setBlogItems } = useContext(mainContext)

    return (
        <div className='allEvents'>
            <div className="container">
                <div className="allEventHead">
                    <div className="row">
                        <div className="content">
                            <button onClick={() => setBlogItems(blog)}>All Events</button>
                        </div>
                        <div className="content">
                            <button onClick={() => filterArtItems("Today")}>Today</button>
                        </div>
                        <div className="content">
                            <button onClick={() => filterArtItems("This Week")}>This Week</button>
                        </div>
                        <div className="content">
                            <button onClick={() => filterArtItems("This Month")}>This Month</button>
                        </div>
                    </div>
                </div>
                <div className="allEventCard">
                    <div className="row">
                        {blogItems && blogItems
                            .filter((item) => item.catagories === "Today" || item.catagories === "This Week" || item.catagories === "This Month")
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
