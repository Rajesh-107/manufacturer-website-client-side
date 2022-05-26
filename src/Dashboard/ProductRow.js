import React from "react";
import { toast } from "react-toastify";

const ProductRow = ({ product, index, refetch, setDeleteProduct }) => {
  const {
    _id,
    img,
    productName,
    Available,
    Price,
    Description,
    MinOrder,
    email,
    partName,
  } = product;

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/product/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`Product: ${productName} is delete`);
          refetch();
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <th>
        <img src={img} alt='' />
      </th>
      <td>{productName}</td>
      <td>{Available}</td>
      <td>{Price}</td>
      <td>{Description}</td>
      <td>{MinOrder}</td>
      <td>
        <label
          onClick={() => setDeleteProduct(productName)}
          for='delete-confirm'
          class='btn btn-xs modal-button'>
          Delete
        </label>
        <button onClick={() => handleDelete(_id)} class='btn btn-xs'>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ProductRow;
