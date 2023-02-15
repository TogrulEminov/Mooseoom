import Cart from "../Components/Home1/Cart/Cart";
import Blog from "../Pages/Blog/Blog";
import BuyTickets from "../Pages/BuyTickets/BuyTickets";
import Collections from "../Pages/Collections/Collections";
import ContuctUs from "../Pages/ContactUS/ContuctUs";
import Events from "../Pages/Events/Events";
import Exhibitions from "../Pages/Exhibitions/Exhibitions";
import Home1 from "../Pages/Home1/Home1";
import Home2 from "../Pages/Home2/Home2";
import MainRoot1 from "../Pages/MainRoot1";
import MainRoot2 from "../Pages/MainRoot2";
import Museum from "../Pages/Museum/Museum";
import NotFound from "../Pages/NotFound/NotFound";
import OurGalerry from "../Pages/OurGalery/OurGalerry";
import Shop from "../Pages/Shop/Shop";

export const ROUTES = [
    {
        path: "/",
        element: <MainRoot1 />,
        children: [
            {
                path: "",
                element: <Home1 />
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
                path: "shop",
                element: <Shop />
            },
            {
                path: "blog",
                element: <Blog />
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
                element: <ContuctUs />
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
        path: "/home2",
        element: <MainRoot2 />,
        children: [
            {
                path: "",
                element: <Home2 />
            }
        ]
    }
]