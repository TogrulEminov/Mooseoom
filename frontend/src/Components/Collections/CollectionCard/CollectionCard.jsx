import React from 'react'
import "./_CollectionCard.scss"
import { Link } from "react-router-dom"
const CollectionCard = () => {
    return (
        <div className='collectionCard'>
            <div className="container">
                <div className="collectionFilter">
                    <div className="row">
                        <ul className='col-12 content'>
                            <li><button>Filter</button></li>
                            <li><button>Paintings</button></li>
                            <li><button>Sculptures</button></li>
                            <li><button>Drawings</button></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 collectionAll">
                        <img src="" alt="" />
                        <h3><Link to="">smld,a;s</Link></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollectionCard
