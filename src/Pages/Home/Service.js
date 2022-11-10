import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Spinner from '../Shared/Spinner';
import ServiceCard from './Banner/ServiceCard';

const Service = () => {
    const { loading } = useContext(AuthContext);
    const [services, setServices] = useState([]);
    const [lim, setLim] = useState(3);
    // console.log(lim);

    useEffect(() => {
        fetch(`https://lawyer-ph-assaignment-11-server.vercel.app/services?lim=${lim}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [lim]);
    return (
        <div>
            {loading && <Spinner></Spinner>}
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