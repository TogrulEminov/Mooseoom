import React, { useContext } from 'react'
import "./_BlogCard.scss"
import { Link } from "react-router-dom"
import { BsClock } from "react-icons/bs"
import { mainContext } from '../../../../Context/Context'
const BlogCard = () => {
    const { currentBlog } = useContext(mainContext)
    return (
        <div className='blogCard'>
            <div className="container">
                <div className="row">
                    {currentBlog && currentBlog
                    .map((blog, index) => (
                            <div className="col-4 col-lg-4 col-md-6 col-xs-12" key={index}>
                                <div className="content">
                                    <div className="cardImage">
                                        <img src={blog.blogImage} alt={blog.title} />
                                    </div>
                                    <article>
                                        <div className='cardDate'>
                                            <ul>
                                                <li><BsClock /></li>
                                                <li><span>{blog.date}</span></li>
                                            </ul>
                                        </div>
                                        <div className="cardInformation">
                                            <h3><Link to={`${blog._id}`}>
                                                {blog.title}
                                            </Link></h3>
                                            <p>{blog.information}</p>

                                            <div className='publisherInfo'>
                                                <ul>
                                                    <li>
                                                        <img src={blog.publisherUrl} alt={blog.publisher} />
                                                    </li>
                                                    <li>by <span>{blog.publisher}</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        ))}
                </div>
            </div>

        </div>
    )
}

export default BlogCard
