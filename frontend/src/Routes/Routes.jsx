import Blog from "../Pages/Blog/Blog";
import BuyTickets from "../Pages/BuyTickets/BuyTickets";
import Collections from "../Pages/Collections/Collections";
import ContuctUs from "../Pages/ContactUS/ContuctUs";
import Events from "../Pages/Events/Events";
import Exhibitions from "../Pages/Exhibitions/Exhibitions";
import Home1 from "../Pages/Home1/Home1";
import MainRoot1 from "../Pages/MainRoot1";
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
                path: "home1",
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
                path: "*",
                element: <NotFound />
            },


        ]
    }
]