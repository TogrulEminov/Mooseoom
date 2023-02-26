import React from 'react'
import BlogCard from '../../../Components/Client/Blog/BlogCard/BlogCard'
import BlogHead from '../../../Components/Client/Blog/BlogHead/BlogHead'
import Pagination from '../../../Components/Client/Blog/Pagination/Pagination'


const Blog = () => {
  return (
    <div>
      <BlogHead />
      <BlogCard />
      <Pagination />
    </div>
  )
}

export default Blog
