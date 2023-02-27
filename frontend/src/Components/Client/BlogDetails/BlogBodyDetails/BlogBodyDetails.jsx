import React from 'react'
import "./_BlogBodyDetails.scss"
import { Link } from "react-router-dom"
import BlogComment from '../BlogComment/BlogComment'
const BlogBodyDetails = ({data}) => {
    
    return (
        <div className='blogBodyDetails'>
            <div className="container">
                <div className="row">
                    <div className="col-8 col-lg-8 col-md-12 col-xs-12 col-s-12">
                        <div className="bodyLeft">
                            <div className='leftImage'>
                                <img src={data.blogImage} alt="" />
                            </div>
                            <article>
                                <p>{data.information}</p>
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
                                    <li><Link to="/blog">Realism And Impressionism</Link></li>
                                    <li><Link to="/blog">The Dancers</Link></li>
                                    <li><Link to="/blog">In The Loge</Link></li>
                                    <li><Link to="/blog">How To Select Portrait Artists</Link></li>
                                    <li><Link to="/blog">Both Members Of This Club</Link></li>
                                </ul>
                            </div>
                            <div className="content">
                                <h3>Archives</h3>
                                <ul>
                                    <li> <Link to="/blog">November 2019</Link></li>
                                    <li><Link to="/blog">October 2019</Link></li>
                                </ul>
                            </div>
                            <div className="content">
                                <h3>Catagories</h3>
                                <ul>
                                    <li> <Link to="/blog">Drawings</Link></li>
                                    <li> <Link to="/blog">HeaderLeft2</Link></li>
                                    <li> <Link to="/blog">Home1</Link></li>
                                    <li> <Link to="/blog">Paintings</Link></li>
                                    <li> <Link to="/blog">Sculptures</Link></li>
                                    <li> <Link to="/blog">This Month</Link></li>
                                    <li> <Link to="/blog">This Week</Link></li>
                                    <li> <Link to="/blog">Today</Link></li>
                                </ul>
                            </div>
                            <div className="content">
                                <h3>META</h3>
                                <ul>
                                    <li><Link to="/myaccount">Log in</Link></li>
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
