import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Banner from "../Pages/Home/Banner/Banner";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
// import Login from "../Pages/Login/Login";
import ServiceDeatails from "../Pages/ServiceDetails/ServiceDeatails";
import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                // loader: () => fetch('http://localhost:5000/services'),
                element: <Home></Home>
            },
            {
                path: '/login',
                // loader: () => fetch('http://localhost:5000/services'),
                element: <Login></Login>
            },
            {
                path: '/signup',
                // loader: () => fetch('http://localhost:5000/services'),
                element: <SignUp></SignUp>
            },
            {
                path: '/services/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <ServiceDeatails></ServiceDeatails>
            }
        ]
    }
])