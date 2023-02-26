import React, { useContext, useState } from 'react'
import "./_CollectionCard.scss"
import { Link } from "react-router-dom"
import { mainContext } from '../../../../Context/Context'
const CollectionCard = () => {
    const { blog, blogItems, filterArtItems, setBlogItems } = useContext(mainContext)

    const [visible, setVisible] = useState(3)

    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 3)
    }
    return (
        <div className='collectionCard'>
            <div className="container">
                <div className="collectionFilter">
                    <div className="row">
                        <ul className='col-12 content'>
                            <li><button onClick={() => setBlogItems(blog)}>Filter</button></li>
                            <li><button onClick={() => filterArtItems("Paintings")}>Paintings</button></li>
                            <li><button onClick={() => filterArtItems("Sculptures")}>Sculptures</button></li>
                            <li><button onClick={() => filterArtItems("Drawings")}>Drawings</button></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    {blogItems && blogItems
                        // .filter((item) => item.catagories === "Drawings" || item.catagories === "Sculptures" || item.catagories === "Paintings")
                        .slice(0, visible)
                        .map((blog) => (
                            <div className="col-4  col-lg-4 col-md-6 col-s-12 col-xs-12 collectionAll" key={blog._id}>
                                <img src={blog.blogImage} alt="" />
                                <h3><Link to="">{blog.title}</Link></h3>
                            </div>
                        ))}
                </div>
            </div>
            <div className='row'>
                <div className="col-12 loadMore">
                    <button onClick={() => showMoreItems()}>Load more</button>
                </div>
            </div>
        </div>
    )
}

export default CollectionCard
