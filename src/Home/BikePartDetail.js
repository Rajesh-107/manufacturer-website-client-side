import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { toast } from "react-toastify";

const BikePartDetail = ({ partDetail, setpartDetail }) => {
  const { _id, partName, img, price, minOrder, available } = partDetail;
  const [user] = useAuthState(auth);

  const handleSubmit = (event) => {
    event.preventDefault();
    const totalPrice = price * minOrder;
    const booking = {
      partDetailId: _id,
      partDetailName: partName,
      price: price,
      minOrder: minOrder,
      available: available,
      myEmail: user.email,
      name: user.displayName,
      phone: event.target.phone.value,
      totalPrice,
    };
    fetch("https://shrouded-lake-78454.herokuapp.com/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast.success("You booking it");
        }
        setpartDetail(null);
      });
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

          <h3 className='font-bold text-lg'>Buy for : {partName}</h3>
          <form
            onSubmit={handleSubmit}
            className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
            <img src={img} className='w-48' alt='' />
            <input
              type='text'
              placeholder='Type here'
              className='input input-bordered w-full max-w-xs'
              value={partName}
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
