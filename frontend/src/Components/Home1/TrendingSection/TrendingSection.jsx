import React from 'react'
import "./_TrendingSection.scss"
import { Link } from "react-router-dom"
const TrendingSection = () => {
    return (
        <div className='trendingSection'>
            <div className="container">
                <div className="row">
                    <div className="col-6 col-lg-6 col-md-12 col-xs-12 col-s-12 trendingEvents">
                        <h1>Trending events</h1>
                        <div className="eventsCart">
                            <div className='cardLeft'>
                                <h4>3:00 p.m.</h4>
                                <Link>Today</Link>
                            </div>
                            <div className="cardRight">
                                <h3>Tai Chi Qigong in the Gallery</h3>
                                <p>
                                    Discover the ancient and calming art of Tai Chi in a special introductory lesson presented in the exhibition BETWEEN TWO WORLDS.</p>
                            </div>
                        </div>
                        <div className="eventsCart">
                            <div className='cardLeft'>
                                <h4>3:00 p.m.</h4>
                                <Link>Today</Link>
                            </div>
                            <div className="cardRight">
                                <h3>Callail Roley Violin Recital</h3>
                                <p>

                                    Fifteen year-old violinist Callail Roley, accompanied by pianist Peter Guy, perform in the exhibition 'WISH YOU WERE HERE.
                                </p>
                            </div>
                        </div>
                        <div className="eventsCart">
                            <div className='cardLeft'>
                                <h4>4:30 p.m.</h4>
                                <Link>This Week</Link>
                            </div>
                            <div className="cardRight">
                                <h3>Art Gallery Society Event 2020</h3>
                                <p>
                                    Newcastle Art Gallery Society in collaboration with Event Cinemas Kotara is excited to present the 12th SIX SUMMER FLICKS film festival.
                                </p>
                            </div>
                        </div>
                        <div className="eventsCart">
                            <div className='cardLeft'>
                                <h4>8:30 p.m.</h4>
                                <Link>This Week</Link>
                            </div>
                            <div className="cardRight">
                                <h3>Tamara Cislowska at the Stuart & Son</h3>
                                <p>
                                    ARIA award-winning soloist, broadcaster and music director, Tamara-Anna Cislowska is one of Australia’s most recognised pianists.
                                </p>
                            </div>
                        </div>
                   
                    </div>
                    <div className="col-6 col-lg-6 col-md-12 col-xs-12 col-s-12 trendingEvents">
                        <h1>Blog entries</h1>
                        <div className="eventsCart">
                            <div className='cardLeft'>
                                <h4>Oct 18th</h4>
                                <Link>This Month</Link>
                            </div>
                            <div className="cardRight">
                                <h3>Highlights of The Cloisters Collection</h3>
                                <p>
                                    The art and architecture of medieval Europe—to introduce visitors to the collection as a whole or to specific departments or themes.
                                </p>
                            </div>
                        </div>
                        <div className="eventsCart">
                            <div className='cardLeft'>
                                <h4>Oct 25th.</h4>
                                <Link>This Month</Link>
                            </div>
                            <div className="cardRight">
                                <h3>
                                    Start With Art At The MooM</h3>
                                <p>
                                    Share ideas and enjoy stories, sketching, singing, and other gallery activities that bring works of art to life.
                                </p>
                            </div>
                        </div>
                        <div className="eventsCart">
                            <div className='cardLeft'>
                                <h4>Oct 23th</h4>
                                <Link>This Month</Link>
                            </div>
                            <div className="cardRight">
                                <h3>
                                    Children Storytime In Nolen Library</h3>
                                <p>
                                    During Storytime in Nolen Library, families with children small ages are invited to gather around as we look, listen, sing, and have fun. </p>
                            </div>
                        </div>
                        <div className="eventsCart">
                            <div className='cardLeft'>
                                <h4>Oct 23th</h4>
                                <Link>This Month</Link>
                            </div>
                            <div className="cardRight">
                                <h3>
                                    Children Storytime In Nolen Library</h3>
                                <p>
                                    During Storytime in Nolen Library, families with children small ages are invited to gather around as we look, listen, sing, and have fun.
                                </p>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrendingSection
