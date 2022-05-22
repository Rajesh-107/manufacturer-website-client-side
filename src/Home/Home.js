import React from 'react';
import Banner from './Banner';
import BannerHome from './BannerHome';
import Bikeparts from './Bikeparts';
import BusinessSummary from './BusinessSummary';
import Review from './Review';



const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
             <Bikeparts></Bikeparts>
             <BusinessSummary></BusinessSummary>
             <BannerHome></BannerHome>
             <Review></Review>
             
        </div>
    );
};

export default Home;