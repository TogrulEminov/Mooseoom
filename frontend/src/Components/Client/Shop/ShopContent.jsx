import React, { useContext, useEffect } from 'react'
import { mainContext } from '../../../Context/Context'
import "./_Shop.scss"
import Pagination from './Pagination/Pagination'
import ShopCard from './ShopCard/ShopCard'
const ShopContent = () => {
    const { currentShop } = useContext(mainContext)
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, [])
    return (
        <div className="shopCardContent">
            <div className='shopBackground'>
                <div className="row">
                    <div className="col-6 col-lg-6 col-md-6 col-xs-12 col-s-12 shopContent">
                        <h3>Shop</h3>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {
                        currentShop && currentShop.map((e, index) => (
                            <div key={index} className='col-3 col-lg-3 col-md-4 col-s-6  col-xs-12'>
                                <ShopCard e={e} />
                            </div>
                        ))
                    }

                </div>
                <Pagination />
            </div>
        </div>
    )
}

export default ShopContent
