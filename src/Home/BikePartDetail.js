import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const BikePartDetail = ({ partDetail, setpartDetail }) => {
  const { _id, name, img, price, minOrder, available } = partDetail;
  const [user, loading, error] = useAuthState(auth);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    console.log(_id, name, price);
    setpartDetail(null);
  };
  return (
    <div>
      <input type='checkbox' id='book-modal' className='modal-toggle' />
      <div className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box'>
          <label
            for='book-modal'
            className='btn btn-sm btn-circle absolute right-2 top-2'>
            ✕
          </label>

          <h3 className='font-bold text-lg'>Buy for : {name}</h3>
          <form
            onSubmit={handleSubmit}
            className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
            <img src={img} className='w-48' alt='' />
            <input
              type='text'
              placeholder='Type here'
              className='input input-bordered w-full max-w-xs'
              value={name}
              disabled
            />

            <input
              type='number'
              placeholder='Type here'
              className='input input-bordered w-full max-w-xs'
              value={price}
            />
            <div className='w-full max-w-xs'>
              <label className='label'>
                <span className='label-text'>Minimum Order</span>
              </label>
              <input
                type='number'
                placeholder='Type here'
                className='input input-bordered w-full max-w-xs'
                value={minOrder}
              />
            </div>
            <div className='w-full max-w-xs'>
              <label className='label'>
                <span className='label-text'>Available Items</span>
              </label>
              <input
                type='number'
                className='input input-bordered w-full max-w-xs'
                value={available}
              />
            </div>
            <div className='w-full max-w-xs'>
              <label className='label'>
                <span className='label-text'>Name</span>
              </label>
              <input
                type='text'
                name='CustomerName'
                disabled
                value={user?.displayName || ""}
                className='input input-bordered w-full max-w-xs'
              />
            </div>
            <div className='w-full max-w-xs'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='text'
                name='email'
                disabled
                value={user?.email || ""}
                className='input input-bordered w-full max-w-xs'
              />
            </div>
            <div className='w-full max-w-xs'>
              <label className='label'>
                <span className='label-text'>Phone Number</span>
              </label>
              <input
                type='text'
                name='phone'
                placeholder='Your Phone'
                className='input input-bordered w-full max-w-xs'
              />
            </div>
            <input
              type='submit'
              value='Submit'
              className='btn btn-primary w-full max-w-xs'
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BikePartDetail;
