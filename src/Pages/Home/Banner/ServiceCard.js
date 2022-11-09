import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={service.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{service.name}</h2>
                <p>{service.info.slice(0, 50) + " ..."}</p>
                <div className="card-actions">
                    <Link to={`/services/${service._id}`}><button className="btn btn-primary">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;