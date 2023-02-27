import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import ShopHeadDetails from '../../../Components/Client/ShopDetails/ShopHeadDetails/ShopHeadDetails'
import ShopReview from '../../../Components/Client/ShopDetails/ShopReview/ShopReview'

const ShopDetail = () => {
    const { id } = useParams()
    const [data, setData] = useState([])

    //! get data
    const getData = async () => {
        const res = await axios.get('http://localhost:5555/posters/' + id)
        setData(res.data);
    };
    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <Helmet>
                <title>{data.name}</title>
            </Helmet>
            <ShopHeadDetails data={data} />
            <ShopReview />
        </div>
    )
}

export default ShopDetail
