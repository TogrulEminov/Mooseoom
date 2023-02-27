import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import BlogBodyDetails from '../../../Components/Client/BlogDetails/BlogBodyDetails/BlogBodyDetails'
import BlogDetailsHead from '../../../Components/Client/BlogDetails/BlogDetailsHead/BlogDetailsHead'


const BlogDetails = () => {
    const [data, setData] = useState([])
    const { id } = useParams()
    //! get data
    const getData = async () => {
        const res = await axios.get('http://localhost:5555/blog/' + id)
        setData(res.data);
    };

    useEffect(() => {
        getData()
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, [])

    return (
        <div>
            <Helmet>
                <title>Blog Details</title>
            </Helmet>

            <BlogDetailsHead data={data} />
            <BlogBodyDetails data={data} />
        </div>
    )
}

export default BlogDetails
