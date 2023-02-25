import React from 'react'
import "./_BlogBodyDetails.scss"
import { Link } from "react-router-dom"
import BlogComment from '../BlogComment/BlogComment'
const BlogBodyDetails = () => {
    return (
        <div className='blogBodyDetails'>
            <div className="container">
                <div className="row">
                    <div className="col-8 col-lg-8 col-md-12 col-xs-12 col-s-12">
                        <div className="bodyLeft">
                            <div className='leftImage'>
                                <img src="" alt="" />
                            </div>
                            <article>
                                <p></p>
                            </article>
                        </div>
                        <BlogComment />

                    </div>
                    <div className="col-4 col-lg-4 col-md-12 col-s-12 col-xs-12">
                        <div className="bodyRight">
                            <div className="content contentSearch">
                                <div className='search'>
                                <form action="">
                                <input type="text" name="" id="" placeholder='Keyword search ...' />
                                    <button>Search</button>
                                </form>
                                </div>
                            </div>
                            <div className="content">
                                <h3>RECENT POSTS</h3>
                                <ul>
                                    <li><Link>Realism And Impressionism</Link></li>
                                    <li><Link>The Dancers</Link></li>
                                    <li><Link>In The Loge</Link></li>
                                    <li><Link>How To Select Portrait Artists</Link></li>
                                    <li><Link>Both Members Of This Club</Link></li>
                                </ul>
                            </div>
                            <div className="content">
                                <h3>Archives</h3>
                                <ul>
                                    <li> <Link>November 2019</Link></li>
                                    <li><Link>October 2019</Link></li>
                                </ul>
                            </div>
                            <div className="content">
                                <h3>Catagories</h3>
                                <ul>
                                    <li> <Link>Drawings</Link></li>
                                    <li> <Link>HeaderLeft2</Link></li>
                                    <li> <Link>Home1</Link></li>
                                    <li> <Link>Paintings</Link></li>
                                    <li> <Link>Sculptures</Link></li>
                                    <li> <Link>This Month</Link></li>
                                    <li> <Link>This Week</Link></li>
                                    <li> <Link>Today</Link></li>
                                </ul>
                            </div>
                            <div className="content">
                                <h3>META</h3>
                                <ul>
                                    <li><Link>Log in</Link></li>
                                    <li><Link>Entries feed</Link></li>
                                    <li><Link>Comments feed</Link></li>
                                    <li><Link>WordPress.org</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogBodyDetails
