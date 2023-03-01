import { createContext, useEffect, useState } from "react";
import axios from "axios"

export const mainContext = createContext(null)

function Context({ children }) {
  const messageState = {
    name: '',
    affilation: '',
    email: "",
    tel: "",
    website: "",
    department: "",
    topic: "",
    message: ""
  }
  const initialState = {
    name: "",
    workers: "",
    information: "",
    title: "",
  }
  const initialShopState = {
    name: "",
    rate: "",
    description: "",
    price: "",
    percantagePrice: "",
    sale: false,
    catagory: ""
  }
  const initialBlogState = {
    title: "",
    date: "",
    information: "",
    publisher: "",
    publisherUrl: "",
    archives: "",
    catagories: ""
  }
  const [open, setOpen] = useState(false)
  const [faq, setFaq] = useState(false)
  // ! fetch data
  const [data, setData] = useState(null)
  const [artData, setArtData] = useState(null)
  const [blog, setBlog] = useState(null)
  const [blogItems, setBlogItems] = useState(blog)
  const [search, setSearch] = useState("");
  const url = "http://localhost:5555"
  const [state, setState] = useState(initialState)
  const [shopForm, setShopForm] = useState(initialShopState)
  const [file, setFile] = useState(null)
  const [blogForm, setBlogForm] = useState(initialBlogState)
  const [shopfile, setShopFile] = useState(null)
  const [blogfile, setBlogFile] = useState(null)
  const [message, setMessage] = useState(messageState)
  const [id, setId] = useState();

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
    getMessage()
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

  const handleShopChange = (e) => {
    const { value, name } = e.target
    setShopForm({
      ...shopForm,
      [name]: value
    });
  };
  const postShopData = async (e) => {
    e.preventDefault()
    if (!shopForm.name || !shopForm.description || !shopForm.rate || !shopForm.price || !shopForm.percantagePrice || !shopForm.catagory) return;
    const formData = new FormData()
    formData.append("photo", shopfile)
    formData.append("name", shopForm.name)
    formData.append("rate", shopForm.rate)
    formData.append("description", shopForm.description)
    formData.append("price", shopForm.price)
    formData.append("percantagePrice", shopForm.percantagePrice)
    formData.append("catagory", shopForm.catagory)
    formData.append("sale", shopForm.sale)
    await axios({
      method: "POST",
      url: "http://localhost:5555/posters",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        console.log(response);

      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
    getData();
    setShopForm(initialShopState)
  };
  const handleEditClick = (data) => {
    setShopForm({
      name: data.name,
      rate: data.rate,
      description: data.description,
      price: data.price,
      percantagePrice: data.percantagePrice,
      sale: data.sale,
      catagory: data.catagory,
    });
    setId(data._id);

  };

  const updateData = async (dataId) => {
    await axios.put(`http://localhost:5555/posters/${dataId}`, shopForm);
    getData();
    setShopForm(initialShopState)

  };
  // !del shop data
  const delShopData = (index) => {
    axios.delete(`http://localhost:5555/posters/${index}`);
    getData();
  };

  //! get art data
  const getArtData = async () => {
    const response = await axios.get(`${url}/art`)
    setArtData(response.data);
  };
  const handleChange = (e) => {
    const { value, name } = e.target
    setState({
      ...state,
      [name]: value
    });

  };
  const postArtData = async (e) => {
    e.preventDefault()
    if (!state.name || !state.information || !state.workers || !state.title) return;
    const formData = new FormData()
    formData.append("images", file)
    formData.append("name", state.name)
    formData.append("workers", state.workers)
    formData.append("information", state.information)
    formData.append("title", state.title)
    await axios({
      method: "POST",
      url: "http://localhost:5555/art",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        console.log(response);
        setState(initialState)
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
    getArtData();
  };
  const handleEditArtClick = (data) => {
    setState({
      name: data.name,
      workers: data.workers,
      information: data.information,
      title: data.title,
    });
    setId(data._id);

  };

  const updateArtData = async (dataId) => {
    await axios.put(`http://localhost:5555/art/${dataId}`, state);
    getArtData();
    setState(initialState)

  };
  // !del art data
  const delData = (index) => {
    axios.delete(`http://localhost:5555/art/${index}`);
    getArtData();
  };
  //! get blog data
  const getBlogData = async () => {
    const response = await axios.get(`${url}/blog`)
    setBlog(response.data);
    setBlogItems(response.data)
  };
  const handleBlogChange = (e) => {
    const { value, name } = e.target
    setBlogForm({
      ...blogForm,
      [name]: value
    });
  };
  const postBlogData = async (e) => {
    e.preventDefault()
    if (!blogForm.title || !blogForm.information || !blogForm.archives || !blogForm.date || !blogForm.publisherUrl || !blogForm.publisher || !blogForm.catagories) return;
    const formData = new FormData()
    formData.append("photo", blogfile)
    formData.append("title", blogForm.title)
    formData.append("publisher", blogForm.publisher)
    formData.append("information", blogForm.information)
    formData.append("publisherUrl", blogForm.publisherUrl)
    formData.append("archives", blogForm.archives)
    formData.append("catagories", blogForm.catagories)
    formData.append("date", blogForm.date)
    await axios({
      method: "POST",
      url: "http://localhost:5555/blog",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
    getBlogData();
    setBlogForm(initialBlogState)
  };
  const handleEditBlogClick = (data) => {
    setBlogForm({
      title: data.title,
      date: data.date,
      information: data.information,
      publisher: data.publisher,
      publisherUrl: data.publisherUrl,
      archives: data.archives,
      catagories: data.catagories,
    });
    setId(data._id);

  };

  const updateBlogData = async (dataId) => {
    await axios.put(`http://localhost:5555/blog/${dataId}`, state);
    getBlogData();
    setBlogForm(initialBlogState)

  };
  // !del Blog data
  const delBlogData = (index) => {
    axios.delete(`http://localhost:5555/blog/${index}`);
    getBlogData();
  };

  // !get message data
  const getMessage = async () => {
    const response = await axios.get(`${url}/message`)
    setMessage(response.data);
  }
  // !handle message
  const handleMessage = (e) => {
    const { value, name } = e.target
    setMessage({
      ...message,
      [name]: value
    });
  }
  const postMessage = (e) => {
    e.preventDefault()
    if (!message.name || !message.email || !message.message) return;
    axios.post("http://localhost:5555/message", message);
    setMessage(messageState)
    getMessage();
  }
  // !handle add basket
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
    delShopData,
    handleChange,
    state,
    postArtData,
    file,
    setFile,
    postShopData,
    shopForm,
    setShopFile,
    handleShopChange,
    postBlogData,
    handleBlogChange,
    setBlogFile,
    blogForm,
    setData,
    message,
    handleMessage,
    postMessage,
    handleEditClick,
    handleEditArtClick,
    handleEditBlogClick,
    id,
    updateData,
    updateArtData,
    updateBlogData
  }
  return (
    <mainContext.Provider value={Values}>
      {children}
    </mainContext.Provider>
  )
}

export default Context