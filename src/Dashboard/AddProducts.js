import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const AddProducts = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { data: bikepart, isLoading } = useQuery("bikepart", () =>
    fetch("https://shrouded-lake-78454.herokuapp.com/bikepart").then((res) =>
      res.json()
    )
  );

  const imgStorageKey = "6f97ad377dcf0d64d08a83c1cbd9e4ce";

  const onSubmit = async (data) => {
    console.log(data);
    const image = data.img[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const product = {
            productName: data.partName,
            Available: data.available,
            Price: data.price,
            Description: data.description,
            MinOrder: data.minOrder,
            img: img,
          };
          console.log("imgbbbbb", result);
          fetch("https://shrouded-lake-78454.herokuapp.com/product", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.inserted.Id) {
                toast.success("Add a product successfully");
                reset();
              } else {
                toast.error("Failed to add doctor");
              }
            });
        }
      });

    const homeUrl = `https://shrouded-lake-78454.herokuapp.com/bikepart`;
    fetch(homeUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  if (isLoading) {
    return <Loading> </Loading>;
  }

  return (
    <div className='w-full mx-auto'>
      <h2>Add new products</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Name</span>
          </label>
          <input
            type='text'
            placeholder='name'
            className='input input-bordered w-full max-w-xs'
            {...register("partName", {
              required: {
                value: true,
                message: "Name is Required",
              },
            })}
          />
          <label className='label'>
            {errors.name?.type === "required" && (
              <span className='label-text-alt text-red-600'>
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Available</span>
          </label>
          <input
            type='number'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
            {...register("available", {
              required: {
                value: true,
                message: "price is Required",
              },
            })}
          />
        </div>

        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Price</span>
          </label>
          <input
            type='number'
            placeholder='Price '
            className='input input-bordered w-full max-w-xs'
            {...register("price", {
              required: {
                value: true,
                message: "price is Required",
              },
            })}
          />
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Description</span>
          </label>
          <input
            type='text'
            placeholder='description'
            className='input input-bordered w-full max-w-xs'
            {...register("description", {
              required: {
                value: true,
                message: "price is Required",
              },
            })}
          />
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>MinimumOrder</span>
          </label>
          <input
            type='text'
            placeholder='minOrder'
            className='input input-bordered w-full max-w-xs'
            {...register("minOrder", {
              required: {
                value: true,
                message: "price is Required",
              },
            })}
          />
        </div>

        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Add Photo</span>
          </label>
          <input
            type='file'
            placeholder='PhotoUrl'
            className='input  w-full max-w-xs'
            {...register("img", {
              required: {
                value: true,
                message: "img is Required",
              },
            })}
          />
        </div>

        <input
          className='btn w-full max-w-xs mt-5 mb-3'
          type='submit'
          value='Add'
        />
      </form>
    </div>
  );
};
export default AddProducts;
