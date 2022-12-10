import { createBrowserRouter } from "react-router-dom"
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Root from "../Pages/Layouts/Root"
import Portfolios from "../Pages/Portfolios/Portfolios";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/portfolios",
                element: <Portfolios />
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ]
    }
])

export default router;