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
  const [blogItems, setBlogItems] = useState(blog)
  const [search, setSearch] = useState("");
  const url = "http://localhost:5555"

  // !filter blog Item
  const filterArtItems = (catItem) => {
    const uptadeItems = blog.filter((curElem) => {
      return curElem.catagories === catItem
    });
    setBlogItems(uptadeItems)

  }

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


  // !search data
  const searchData = (e) => {
    setSearch(e.target.value);
  };
  //! get data
  const getData = async () => {
    const response = await axios.get(`${url}/posters`)
    setData(response.data);
  };
   // !del art data
   const delShopData = (index) => {
    axios.delete(`http://localhost:5555/posters/${index}`);
    getData();
  };
  //! get art data
  const getArtData = async () => {
    const response = await axios.get(`${url}/art`)
    setArtData(response.data);
  };
  // !del art data
  const delData = (index) => {
    axios.delete(`http://localhost:5555/art/${index}`);
    getArtData();
  };
  //! get data
  const getBlogData = async () => {
    const response = await axios.get(`${url}/blog`)
    setBlog(response.data);
  };
  // !del Blog data
  const delBlogData = (index) => {
    axios.delete(`http://localhost:5555/blog/${index}`);
    getBlogData();
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

    // !remove the localStorage
    let items = JSON.parse(localStorage.getItem('items'));
    items.forEach((item, index) => {
      if (id === item.id) {
        items.splice(index, 1)
      }
    });
    localStorage.setItem('items', JSON.stringify(cardItems))
  }

  const clickBtn = () => {
    setFaq(!faq)
  }
  const clickHamburger = () => {
    setOpen(!open)
  }


  // ! blog page pagination
  const [currentButton, setCurrentButton] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const [blogPerPage] = useState(9)
  const indexOfLastBlog = currentPage * blogPerPage
  const indexOfFirstBlog = indexOfLastBlog - blogPerPage
  const currentBlog = blog?.slice(indexOfFirstBlog, indexOfLastBlog)
  useEffect(() => {
    setCurrentPage(currentButton)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [currentButton, setCurrentPage])

  // !shop page pagination 
  const [shopButton, setShopButton] = useState(1)
  const [currentShopPage, setCurrentShopPage] = useState(1)
  const [shopPerPage] = useState(16)
  const indexOfLastShop = currentShopPage * shopPerPage
  const indexOfFirstShop = indexOfLastShop - shopPerPage
  const currentShop = data?.slice(indexOfFirstShop, indexOfLastShop)
  useEffect(() => {
    setCurrentShopPage(shopButton)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [shopButton, setCurrentShopPage])


  const Values = {
    clickHamburger,
    open,
    faq,
    clickBtn,
    data,
    getData,
    cardItems,
    emptyBasket,
    handleClick, artData,
    blog,
    filterArtItems,
    currentButton,
    setCurrentButton,
    setBlogItems,
    blogItems,
    currentBlog,
    setShopButton,
    currentShop,
    shopButton,
    getArtData,
    search,
    searchData,
    delData,
    delBlogData,
    delShopData
  }
  return (
    <mainContext.Provider value={Values}>
      {children}
    </mainContext.Provider>
  )
}

export default Context