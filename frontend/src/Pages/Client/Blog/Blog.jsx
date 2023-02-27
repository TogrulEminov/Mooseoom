import React from 'react'
import { Helmet } from 'react-helmet'
import BlogCard from '../../../Components/Client/Blog/BlogCard/BlogCard'
import BlogHead from '../../../Components/Client/Blog/BlogHead/BlogHead'
import Pagination from '../../../Components/Client/Blog/Pagination/Pagination'


const Blog = () => {
  return (
    <div>
       <Helmet>
                <title>Blog</title>
            </Helmet>
      <BlogHead />
      <BlogCard />
      <Pagination />
    </div>
  )
}

export default Blog
