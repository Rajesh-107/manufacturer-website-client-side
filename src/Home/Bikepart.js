import React from 'react';

const Bikepart = ({part}) => {
    const {name, img, description, price, minOrder,available} = part;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={img} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{name}</h2>
          <p>{description}</p>
          <div>
              <p className='text-red-500'>Price ${price}</p>
              <p><small className='text-xl'>Minimum Order:{minOrder}</small></p>
              <p><small className='text-xl'>Stock:{available}</small></p>
          </div>
          <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default Bikepart;


{/* <div>
<div className="card w-96 bg-base-100 shadow-xl ">
<figure className='px-10 pt-10'>
<img src={img} alt="Shoes" />
</figure>
<div className="card-body">
<h2 className="card-title">
{name}
</h2>
<h5><small>Price:{price} </small></h5>
<p>{description.slice(0,90)}</p>
<p>MinOrder: {minOrder}</p>
<h5>Available:{available} </h5>
<div className="card-actions justify-end">

<div className="btn btn-primary "><button className='text-white text-bold text-xl'>Purchase</button> </div>
</div>
</div>
</div>
</div> */}