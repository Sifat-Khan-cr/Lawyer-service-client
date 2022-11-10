import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import PrivateRoute from '../../Router/PrivateRoute';
import AddReview from '../AddReview/AddReview';
import Reviews from '../Reviews/Reviews';
import SingleServiceDetails from './SingleServiceDetails';

const ServiceDeatails = () => {
    const { user } = useContext(AuthContext);
    // console.log(user.uid)
    const details = useLoaderData();
    useTitle('Service')
    return (
        <div>
            <SingleServiceDetails details={details}></SingleServiceDetails>
            <Reviews></Reviews>
            {/* <PrivateRoute><AddReview></AddReview></PrivateRoute> */}
            {
                user ? <AddReview></AddReview> : <h1 className='text-6xl text-center font-semibold my-10'><Link to="/login">Login first to give a review</Link></h1>
            }

        </div>
    );
};

export default ServiceDeatails;