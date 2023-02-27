import React, { useContext } from 'react'
import { mainContext } from '../../../../Context/Context'
import "./_AllEvents.scss"
import { Link } from "react-router-dom"
import {motion,AnimatePresence} from "framer-motion"
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
                            .filter((item) => item.catagories === "This Week" ||  item.catagories === "Today" || item.catagories === "This Month")
                            .map((item,index) => (
                                <motion.div key={index}  animate={{opacity:1, scale:1}} initial={{opacity:1, scale:0}} exit={{opacity:0,scale:0}}  layout className="col-4 col-lg-4 col-md-6 col-xs-12 col-s-12">
                                   
                                     <AnimatePresence>
                                    <div className="card">
                                        <Link to={`/blog/${item._id}`}><img src={item.blogImage} alt="" /></Link>
                                        <article>
                                            <h3>{item.date}</h3>

                                            <h2><Link to={`/blog/${item._id}`}>{item.title}</Link></h2>

                                            <p>{item.information}</p>
                                        </article>
                                    </div>
                               </AnimatePresence>
                                </motion.div>
                            ))}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllEvents
