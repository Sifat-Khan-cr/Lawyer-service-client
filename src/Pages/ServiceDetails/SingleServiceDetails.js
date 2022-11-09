import React from 'react';

const SingleServiceDetails = ({ details }) => {
    const { name, info, price, image } = details;

    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${image})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-6xl font-bold">{name}</h1>
                        <p className="mb-5">{info}</p>
                        <h1 className="mb-5 text-4xl font-bold text-white">${price}</h1>
                        <button className="btn btn-primary">Contact</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleServiceDetails;