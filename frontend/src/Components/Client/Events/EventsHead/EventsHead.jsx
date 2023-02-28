import React from 'react'
import "./_EventsHead.scss"
import { Link } from 'react-router-dom'
const EventsHead = () => {
    return (
        <div className='allEventsHead'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-12 col-md-12 col-s-12 col-xs-12 eventHeadContent">
                        <h4>Coming Soon</h4>
                        <h1>Featured Events</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-7 col-lg-7 col-md-12 col-s-12 col-xs-12">
                        <div className="Side">
                            <div className='content'>
                                <div className='SideContent'>
                                    <h4>
                                        Jun 16 - Jul 03
                                    </h4>
                                    <h1>Fragments Of A Crucifixion</h1>
                                </div>
                                <div className="SideBtn">
                                    <Link to="">Buy Ticket</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-5 col-lg-5 col-md-12 col-s-12 col-xs-12">
                        <div className="Side image-2">
                            <div className='content'>
                                <div className='SideContent'>
                                    <h4>
                                        Jun 16 - Jul 03
                                    </h4>
                                    <h1>Assaf Evron</h1>
                                </div>
                                <div className="SideBtn">
                                    <Link to>Buy Ticket</Link>
                                </div>
                            </div>
                        </div>
                        <div className="Side image-3">
                            <div className='content'>
                                <div className='SideContent'>
                                    <h4>
                                        Jun 16 - Jul 03
                                    </h4>
                                    <h1>Kim Brandt</h1>
                                </div>
                                <div className="SideBtn">
                                    <Link to="">Buy Ticket</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default EventsHead
