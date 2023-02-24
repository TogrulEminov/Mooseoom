import React from 'react'
import BlogCard from '../../Components/Blog/BlogCard/BlogCard'
import BlogHead from '../../Components/Blog/BlogHead/BlogHead'
import Pagination from '../../Components/Blog/Pagination/Pagination'

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
