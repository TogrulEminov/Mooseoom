
import ShopContent from '../../Components/Shop/ShopContent'
import "./_Shop.scss"
const Shop = () => {
    return (
        <div className='allShop'>
            <div className='shopBackground'>
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-lg-6 col-md-6 col-xs-12 col-s-12 shopContent">
                            <h3>Shop</h3>
                        </div>
                    </div>
                </div>
            </div>
            <ShopContent />
        </div>
    )
}

export default Shop
