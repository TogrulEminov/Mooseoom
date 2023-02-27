import { Helmet } from "react-helmet"
import ShopContent from "../../../Components/Client/Shop/ShopContent"

const Shop = () => {
    return (
        <div>
             <Helmet>
                <title>Shop</title>
            </Helmet>
            <ShopContent/>
        </div>
    )
}

export default Shop
