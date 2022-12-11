import { createBrowserRouter } from "react-router-dom"
import About from "../Pages/About/About";
import Blogs from "../Pages/Blogs/Blogs";
import Contact from "../Pages/Contact/Contact";
import HomePage from "../Pages/Home/Home/HomePage";
import Root from "../Pages/Layouts/Root"
import Details from "../Pages/Portfolios/Details";
import Portfolios from "../Pages/Portfolios/Portfolios";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <HomePage />
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
            },
            {
                path: "/blogs",
                element: <Blogs />
            },
            {
                path: "/portfolios/:id",
                element: <Details />,
                // loader: () => product()
            }
        ]
    }
])

export default router;