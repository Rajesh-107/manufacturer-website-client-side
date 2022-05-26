import React from "react";
import { useNavigate } from "react-router-dom";

const Bikepart = ({ part, setpartDetail }) => {
  const { _id, partName, img, description, price, minOrder, available } = part;

  const navigate = useNavigate();
  const detailsBikePart = (id) => {
    navigate(`/bikepart/${id}`);
  };

  return (
    <div className='card w-96 bg-base-100 shadow-xl'>
      <figure className='px-10 pt-10'>
        <img src={img} alt='bikeparts' className='rounded-xl' />
      </figure>
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>{partName}</h2>
        <p>{description}</p>
        <div>
          <p className='text-red-500'>Price ${price}</p>
          <p>
            <small className='text-xl'>Minimum Order:{minOrder}</small>
          </p>
          <p>
            <small className='text-xl'>Stock:{available}</small>
          </p>
        </div>
        <div className='card-actions'>
          <label
            for='book-modal'
            onClick={() => setpartDetail(part)}
            className='btn btn-primary'>
            Book Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default Bikepart;
