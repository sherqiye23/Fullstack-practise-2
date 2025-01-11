import Add from "../pages/Add page";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import Wishlist from "../pages/Wishlist";

const ROUTES = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/add",
                element: <Add />
            },
            {
                path: "/favorites",
                element: <Wishlist />
            }
        ]
    }
]

export default ROUTES