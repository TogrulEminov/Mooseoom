import { useContext} from "react";
import { mainContext } from "../../../../Context/Context";
import "./_Pagination.scss"
const Pagination = () => {
    const { setCurrentButton, currentButton } = useContext(mainContext)


    // ?page
    const pages = 4;
    const numOfPages = [];
    for (let i = 1; i <= pages; i++) {
        numOfPages.push(i)
    }
    return (
        <div className='pagination'>
            <ul>
                <li className={`${currentButton === 1 ? 'disabled' : "pageNotDisabled"}`} onClick={() => setCurrentButton((prev) => prev === 1 ? prev : prev - 1)}>Previous</li>
                {
                    numOfPages.map((page, index) => (
                        <li key={index} className={`${currentButton === page ? "pageItem active" : "pageItem"}`} onClick={() => setCurrentButton(page)}>{page}</li>
                    ))
                }
                <li className={`${currentButton === numOfPages?.length ? 'disabled' : "pageNotDisabled"}`}
                    onClick={() => setCurrentButton((prev) => prev === numOfPages?.length ? prev : prev + 1)}>Next</li>
            </ul>
        </div>
    )
}

export default Pagination
