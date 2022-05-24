import React from "react";

const CustomerReview = ({ review }) => {
  const { name, ClientReview, img, location } = review;
  return (
    <div className='card w-96 bg-base-100 shadow-xl'>
      <div className='card-body'>
        <p>{ClientReview}</p>
        <div className='flex items-center'>
          <div className='avatar'>
            <div className='w-8 rounded-full ring ring-primary ring-offset-base-100 mr-5'>
              <img src={img} alt='' />
            </div>
          </div>
          <div>
            <h4 className='text-xl'>{name}</h4>
            <p>{location}</p>
            <div className='rating rating-sm'>
              <input
                type='radio'
                name='rating-6'
                className='mask mask-star-2 bg-orange-400'
              />
              <input
                type='radio'
                name='rating-6'
                className='mask mask-star-2 bg-orange-400'
                checked
              />
              <input
                type='radio'
                name='rating-6'
                className='mask mask-star-2 bg-orange-400'
                checked
              />
              <input
                type='radio'
                name='rating-6'
                className='mask mask-star-2 bg-orange-400'
                checked
              />
              <input
                type='radio'
                name='rating-6'
                className='mask mask-star-2 bg-orange-400'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
