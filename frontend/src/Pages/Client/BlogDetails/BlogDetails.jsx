import React from 'react'
import { Helmet } from 'react-helmet'
import BlogBodyDetails from '../../../Components/Client/BlogDetails/BlogBodyDetails/BlogBodyDetails'
import BlogDetailsHead from '../../../Components/Client/BlogDetails/BlogDetailsHead/BlogDetailsHead'


const BlogDetails = () => {
    return (
        <div>
             <Helmet>
                <title>Blog Details</title>
            </Helmet>
            <BlogDetailsHead />
            <BlogBodyDetails />
        </div>
    )
}

export default BlogDetails
