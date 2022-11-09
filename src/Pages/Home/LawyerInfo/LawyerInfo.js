import React from 'react';

const LawyerInfo = () => {
    return (
        <div className="hero min-h-screen bg-base-200 my-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/SvtScsW/corporate-portrait-with-office-background.jpg" className="max-w-sm rounded-lg shadow-2xl" alt='lawyer' />
                <div>
                    <h1 className="text-5xl font-bold">The Lawyer</h1>
                    <p className="py-6">Lawyers also prepare legal documents for their clients. Examples: buying or selling property or making a will (testament). Certain lawyers (called "commissioners of oaths" in England) can take legally binding witness statements which can be presented to the court.</p>
                </div>
            </div>
        </div>


    );
};

export default LawyerInfo;