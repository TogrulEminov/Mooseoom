import { createContext, useState } from "react";

export const mainContext = createContext(null)

function Context({ children }) {
    const [open, setOpen] = useState(false)
    const [faq, setFaq] = useState(false)

    const clickHamburger = () => {
        setOpen(!open)
    }
    const clickBtn = () => {
        setFaq(!faq)
    }


    const Values = {
        clickHamburger, open, faq, clickBtn
    }
    return (
        <mainContext.Provider value={Values}>
            {children}
        </mainContext.Provider>
    )
}

export default Context