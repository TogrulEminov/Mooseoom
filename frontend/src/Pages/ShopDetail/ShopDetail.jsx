import React, { useContext } from 'react'
import { mainContext } from '../../Context/Context'

const ShopDetail = () => {
    const { data } = useContext(mainContext)
        
    return (
        <div className='data'>
            <div key={data._id}>
                <h1>{data.name}</h1>
            </div>
        </div>
    )
}

export default ShopDetail
