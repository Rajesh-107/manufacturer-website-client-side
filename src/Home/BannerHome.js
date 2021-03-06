import React from 'react';
import goodbanner from '../images/bannar/conor-luddy-HKF3K2RT0KE-unsplash.jpg'

const BannerHome = () => {
    return (
        <div className='m-9'>
            <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={goodbanner} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">A good place to look for examples of customer service</h1>
      <p className="py-6">We’ve all heard the stories of companies going above and beyond to provide their customers with incredible support. Morton’s steakhouse met a man at the airport with a steak because he asked for one in a tweet.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default BannerHome;