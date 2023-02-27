import React, { useContext } from 'react'
import { mainContext } from '../../../../Context/Context'
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai"
import "./_BlogTable.scss"
const BlogTable = () => {
    const { blog, search, searchData, delBlogData } = useContext(mainContext)
    return (
        <div className='blogTable'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-12 col-md-12 col-s-12 col-xs-12 inputSearch">
                        <form action="">
                            <input type="text" onChange={searchData}
                                value={search} placeholder='Type here ...' />
                            <button>Search</button>
                        </form>
                    </div>
                </div>
                <table>
                    <thead>
                        <th>Title</th>
                        <th>Information</th>
                        <th>Date</th>
                        <th>Publisher</th>
                        <th>Publisher Image</th>
                        <th>Blog Image</th>
                        <th>Archives</th>
                        <th>Catagory</th>
                        <th>Uptade</th>
                        <th>Delete</th>
                    </thead>
                    <tbody>
                        {blog && blog
                            .filter((item) => {
                                return search.trim().toUpperCase() === ""
                                    ? item
                                    : item.title.toLowerCase().includes(search.toLowerCase());
                            })
                            .map((e) => (
                                <tr key={e._id}>
                                    <td data-aria-label='Title'>{e.title}</td>
                                    <td data-aria-label='Information'><span>{e.information}</span></td>
                                    <td data-aria-label='Date'>{e.date}</td>
                                    <td data-aria-label='Publisher'>{e.publisher}</td>
                                    <td data-aria-label='Publisher Image'>
                                        <img src={e.publisherUrl} alt="" />
                                        </td>
                                    <td data-aria-label='Blog Image'>
                                        <img src={e.blogImage} alt="" />
                                    </td>
                                    <td data-aria-label='Archives'>{e.archives}</td>
                                    <td data-aria-label='Catagory'>{e.catagories}</td>
                                    <td data-aria-label='Uptade'>
                                        <div><AiFillEdit /></div>
                                    </td>
                                    <td data-aria-label='Delete'>
                                        <p><AiOutlineDelete onClick={() => delBlogData(e._id)} /></p>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BlogTable
