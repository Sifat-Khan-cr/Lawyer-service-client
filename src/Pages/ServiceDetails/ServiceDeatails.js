import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import AddReview from '../AddReview/AddReview';
import Reviews from '../Reviews/Reviews';
import SingleServiceDetails from './SingleServiceDetails';

const ServiceDeatails = () => {
    const details = useLoaderData();
    useTitle('Service')
    return (
        <div>
            <SingleServiceDetails details={details}></SingleServiceDetails>
            <Reviews></Reviews>
            <AddReview></AddReview>
        </div>
    );
};

export default ServiceDeatails;