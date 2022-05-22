import React from 'react';
import Banner from './Banner';
import Bikeparts from './Bikeparts';
import BusinessSummary from './BusinessSummary';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
             <Bikeparts></Bikeparts>
             <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;