import React from 'react'
import { Helmet } from 'react-helmet'
import BlogForm from '../../../Components/Admin/BlogAdmin/BlogForm/BlogForm'
import BlogTable from '../../../Components/Admin/BlogAdmin/BlogTable/BlogTable'

const BlogAdmin = () => {
  return (
    <div>
       <Helmet>
                <title>Blog</title>
            </Helmet>
      <BlogForm />
      <BlogTable />
    </div>
  )
}

export default BlogAdmin
