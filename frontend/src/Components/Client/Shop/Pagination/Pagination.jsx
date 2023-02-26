import { useContext} from "react";
import { mainContext } from "../../../../Context/Context";
import "./_Pagination.scss"
const Pagination = () => {
    const { shopButton, setShopButton } = useContext(mainContext)
   
    // ?page
    const pages = 2;
    const numOfPages = [];
    for (let i = 1; i <= pages; i++) {
        numOfPages.push(i)
    }
    return (
        <div className='pagination'>
            <ul>
                {
                    numOfPages.map((page, index) => (
                        <li key={index} className={`${shopButton === page ? "pageItem active" : "pageItem"}`} onClick={() => setShopButton(page)}>{page}</li>
                    ))
                }

            </ul>
        </div>
    )
}

export default Pagination
