import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import ProductRow from "./ProductRow";

const ManageProduct = () => {
  const [deleteProduct, setDeleteProduct] = useState(null);
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("product", () =>
    fetch("https://shrouded-lake-78454.herokuapp.com/product", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2>Manage Product: {products.length}</h2>
      <div class='overflow-x-auto'>
        <table class='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Available</th>
              <th>Price</th>
              <th>Description</th>
              <th>MinOrder</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <ProductRow
                key={product._id}
                product={product}
                index={index}
                refetch={refetch}
                setDeleteProduct={setDeleteProduct}></ProductRow>
            ))}
          </tbody>
        </table>
      </div>
      {deleteProduct && (
        <DeleteConfirmModal deleteProduct={deleteProduct}></DeleteConfirmModal>
      )}
    </div>
  );
};

export default ManageProduct;
