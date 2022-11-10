import React from 'react';
import useTitle from '../../Hooks/useTitle';
import Banner from './Banner/Banner';
import LawyerInfo from './LawyerInfo/LawyerInfo';
import NewsLetter from './NewsLetter/NewsLetter';
import Service from './Service';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <LawyerInfo></LawyerInfo>
            <NewsLetter></NewsLetter>

        </div>
    );
};

export default Home;