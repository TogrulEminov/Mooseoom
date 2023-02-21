import { createContext, useEffect, useState } from "react";
import axios from "axios"
export const mainContext = createContext(null)

function Context({ children }) {
  const [open, setOpen] = useState(false)
  const [faq, setFaq] = useState(false)
  // ! fetch data
  const [data, setData] = useState(null)
  const [artData, setArtData] = useState(null)
  const [blog, setBlog] = useState(null)
  const url = "http://localhost:5555"

  //!to add data localStorage
  const getLocalStorage = () => {
    let newCardData = localStorage.getItem("items");
    if (newCardData) {
      return JSON.parse(localStorage.getItem("items"))
    }
    else {
      return []
    }
  }

  const [cardItems, setCardItems] = useState(getLocalStorage())



  useEffect(() => {
    getData()
    getArtData()
    getBlogData()
  }, [])



  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(cardItems))
  }, [cardItems])



  //! get data
  const getData = async () => {
    const response = await axios.get(`${url}/posters`)
    setData(response.data);
  };
  //! get data
  const getArtData = async () => {
    const response = await axios.get(`${url}/art`)
    setArtData(response.data);
  };
  //! get data
  const getBlogData = async () => {
    const response = await axios.get(`${url}/blog`)
    setBlog(response.data);
  };
  // !handle add
  const handleClick = (item) => {
    if (cardItems.indexOf(item) !== -1) return
    setCardItems([...cardItems, item])
  }


  //! empty basket
  const emptyBasket = (id) => {
    cardItems.splice(id, 1)
    getData()

    // remove the localStorage
    let items = JSON.parse(localStorage.getItem('items'));
    items.forEach((item, index) => {
      if (id === item.id) {
        items.splice(index, 1)
      }
    });
    localStorage.setItem('items', JSON.stringify(cardItems))
  }

  //! uptade item local Storage
  // const uptadeItemsLocal = (uptadeItem) => {
  //   let items = JSON.parse(localStorage.getItem("items"))
  //   items.forEach((item, index) => {
  //     if (uptadeItem.id === item.id) {
  //       item.splice(index, 1, uptadeItem)
  //     }
  //   });
  //   localStorage.setItem('items', JSON.stringify(cardItems))
  // }



  // !total price
  const getCardTotal = () => {
    return cardItems.reduce((sum, { quantity }) => sum + quantity, 0)
  }


  const clickBtn = () => {
    setFaq(!faq)
  }
  const clickHamburger = () => {
    setOpen(!open)
  }
  const Values = {
    clickHamburger,
    open,
    faq,
    clickBtn,
    data,
    getData,
    cardItems,
    emptyBasket,
    handleClick, artData,blog
  }
  return (
    <mainContext.Provider value={Values}>
      {children}
    </mainContext.Provider>
  )
}

export default Context