import React, { useContext, useEffect, useState } from 'react'
import { mainContext } from '../../../Context/Context'
import "./_Shop.scss"
import Pagination from './Pagination/Pagination'
import ShopCard from './ShopCard/ShopCard'
import ShopFilter from './ShopFilter/ShopFilter'
const ShopContent = () => {
    const { currentShop } = useContext(mainContext)

    const [sort, setSort] = useState({
        sort: "",
        products: currentShop
    })
    const sorting = (e) => {
        console.log(e.target.value);
        const sorting = e.target.value
        const sortRes = currentShop.sort((a, b) => {
            if (sorting === "all") {
                return a.id > b.id ?1:-1
            }
            if (sorting === "low") {
                return (a.price - parseInt((a.price * a.percantagePrice) / 100)) -(b.price - parseInt((b.price * b.percantagePrice) / 100))
              
            }
            if (sorting === "rate") {
                return b.rate -a.rate
            }
            if (sorting === "high") {
                return (b.price - parseInt((b.price * b.percantagePrice) / 100)) -(a.price - parseInt((a.price * a.percantagePrice) / 100))

            }
        })
        setSort({
            sort: sorting,
            products: sortRes
        })
    }
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
                <ShopFilter sorting={sorting} sort={sort} />

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
