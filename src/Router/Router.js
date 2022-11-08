import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Banner from "../Pages/Home/Banner/Banner";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                // loader: () => fetch('http://localhost:5000/services'),
                element: <Banner></Banner>
            }
        ]
    }
])