import React from 'react';
import Banner from './Banner/Banner';
import LawyerInfo from './LawyerInfo/LawyerInfo';
import Service from './Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <LawyerInfo></LawyerInfo>

        </div>
    );
};

export default Home;