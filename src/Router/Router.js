import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import Banner from "../Pages/Home/Banner/Banner";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReview from "../Pages/MyReview/MyReview";
// import Login from "../Pages/Login/Login";
import ServiceDeatails from "../Pages/ServiceDetails/ServiceDeatails";
import Blog from "../Pages/Shared/Blog/Blog";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/addservice',
                element: <AddService></AddService>
            },
            {
                path: '/myreview',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
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