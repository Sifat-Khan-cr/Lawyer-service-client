import React, { useEffect, useState } from 'react';
import ServiceCard from './Banner/ServiceCard';

const Service = () => {
    const [services, setServices] = useState([]);
    const [lim, setLim] = useState(3);
    // console.log(lim);

    useEffect(() => {
        fetch(`http://localhost:5000/services?lim=${lim}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [lim]);
    return (
        <div>
            <div className='flex justify-center'>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 my-5 gap-3'>
                    {
                        services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    }


                </div>
            </div>
            <div className=' my-5 mx-auto w-3/12'>
                {
                    lim === 3 && <button onClick={() => setLim(0)} className="btn btn-success w-full">Show All</button>
                }
            </div>

        </div>
    );
};

export default Service;