import { createContext, useEffect, useState } from "react";
import axios from "axios"
export const mainContext = createContext(null)

function Context({ children }) {
  const [open, setOpen] = useState(false)
  const [faq, setFaq] = useState(false)
  const [cardItems, setCardItems] = useState([])
  // ! fetch data
  const [data, setData] = useState(null)
  const url = "http://localhost:5555"

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const response = await axios.get(`${url}/posters`)
    setData(response.data);
  };

  // handlerAdd product
  const handleAddProduct = (product) => {
    const ProductExist = cardItems.find((item) => item.id === product.id)
    if (ProductExist) {
      setCardItems(cardItems.map((item) => item.id === product.id ? { ...ProductExist, quantity: ProductExist.quantity + 1 } : item))

    }
    else {
      setCardItems([...cardItems, { ...product, quantity: 1 }])
    }
  }

  // handler remove product
  const handleRemoveProduct = (product) => {
    const ProductExist = cardItems.find((item) => item.id === product.id)
    if (ProductExist.quantity === 1) {
      setCardItems(cardItems.filter((item) => item.id !== product._id ? { ...ProductExist, quantity: ProductExist.quantity + 1 } : item))

    }
    else {
      setCardItems(cardItems.map((item) => item.id === product.id ? { ...ProductExist, quantity: ProductExist.quantity - 1 } : item))

    }
  }
  // total price
  const totalPrice = cardItems.reduce((price, item) => price + item.quantity * item.price,0)

  const clickBtn = () => {
    setFaq(!faq)
  }
  const clickHamburger = () => {
    setOpen(!open)
  }
  const Values = {
    clickHamburger, open, faq, clickBtn, data,
    getData, handleAddProduct, cardItems,handleRemoveProduct
  }
  return (
    <mainContext.Provider value={Values}>
      {children}
    </mainContext.Provider>
  )
}

export default Context