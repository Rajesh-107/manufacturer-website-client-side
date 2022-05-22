import React from 'react';

const Bikepart = ({part}) => {
    const {name, img, description, price, minOrder,available} = part;
    return (
        <div>
           <div class="card w-96 bg-base-100 shadow-xl ">
    <figure className='px-10 pt-10'>
      <img src={img} alt="Shoes" />
    </figure>
  <div class="card-body">
    <h2 class="card-title">
      {name}
    </h2>
    <h5><small>Price:{price} </small></h5>
    <p>{description.substring(0,145)}</p>
    <p>MinOrder: {minOrder}</p>
    <h5>Available:{available} </h5>
    <div class="card-actions justify-end">
       
      <div class="btn btn-primary"><button>Purchase</button> </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Bikepart;