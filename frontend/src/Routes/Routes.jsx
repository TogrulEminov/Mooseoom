import Cart from "../Components/Client/Home/Cart/Cart";
import AdminRoot from "../Pages/Admin/AdminRoot";
import Art from "../Pages/Admin/Art/Art";
import BlogAdmin from "../Pages/Admin/Blog/BlogAdmin";
import LoginAdmin from "../Pages/Admin/Login/LoginAdmin";
import Register from "../Pages/Admin/Register/Register";
import ShopAdmin from "../Pages/Admin/Shop/ShopAdmin";
import Blog from "../Pages/Client/Blog/Blog";
import BlogDetails from "../Pages/Client/BlogDetails/BlogDetails";
import BuyTickets from "../Pages/Client/BuyTickets/BuyTickets";
import Collections from "../Pages/Client/Collections/Collections";
import ContactUs from "../Pages/Client/ContactUS/ContactUs";
import Events from "../Pages/Client/Events/Events";
import Exhibitions from "../Pages/Client/Exhibitions/Exhibitions";
import GaleryDetails from "../Pages/Client/GaleryDetails/GaleryDetails";
import Home from "../Pages/Client/Home/Home";
import MainRoot from "../Pages/Client/MainRoot";
import Museum from "../Pages/Client/Museum/Museum";
import NotFound from "../Pages/Client/NotFound/NotFound";
import OurGalerry from "../Pages/Client/OurGalery/OurGalerry";
import Shop from "../Pages/Client/Shop/Shop";
import ShopDetail from "../Pages/Client/ShopDetail/ShopDetail";

export const ROUTES = [
    {
        path: "/",
        element: <MainRoot />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "events",
                element: <Events />
            },
            {
                path: "exhibitions",
                element: <Exhibitions />
            },
            {
                path: "museum",
                element: <Museum />
            },
            {
                path: "galery",
                element: <OurGalerry />
            },
            {
                path: "galery/:id",
                element: <GaleryDetails />
            },
           
            {
                path: "shop",
                element: <Shop />
            },
            {
                path: "shop/:id",
                element: <ShopDetail />
            },
            {
                path: "blog",
                element: <Blog />
            },
            {
                path: "blog/:id",
                element: <BlogDetails />
            },
            {
                path: "buyticket",
                element: <BuyTickets />
            },
            {
                path: "collections",
                element: <Collections />
            },
            {
                path: "contuctUs",
                element: <ContactUs />
            },
            {
                path: "cart",
                element: <Cart />
            },
            {
                path: "*",
                element: <NotFound />
            },


        ]
    },
    {
        path: "/admin/",
        element: <AdminRoot />,
        children: [
            {
                path: "art",
                element: <Art />
            },
            {
                path: "blog",
                element: <BlogAdmin />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "",
                element: <LoginAdmin />
            },
            {
                path: "shop",
                element: <ShopAdmin />
            },
            {
                path: "*",
                element: <NotFound />
            },
        ]
    }
]