import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDeatails = () => {
    const details = useLoaderData();
    const { name, info, price, image } = details;
    console.log(price)
    return (
        <div>
            <h1>this is details</h1>

        </div>
    );
};

export default ServiceDeatails;