import React from 'react'
import { Helmet } from 'react-helmet'
import ShopHeadDetails from '../../../Components/Client/ShopDetails/ShopHeadDetails/ShopHeadDetails'
import ShopReview from '../../../Components/Client/ShopDetails/ShopReview/ShopReview'

const ShopDetail = () => {
    return (
        <div>
             <Helmet>
                <title>Shop Detail</title>
            </Helmet>
            <ShopHeadDetails />
            <ShopReview />
        </div>
    )
}

export default ShopDetail
