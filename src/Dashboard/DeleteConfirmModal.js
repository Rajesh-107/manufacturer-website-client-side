import React from "react";

const DeleteConfirmModal = ({ deleteProduct }) => {
  const { _id, productName, partName } = deleteProduct;
  return (
    <div>
      <input type='checkbox' id='delete-confirm' class='modal-toggle' />
      <div class='modal modal-bottom sm:modal-middle'>
        <div class='modal-box'>
          <h3 class='font-bold text-lg'>Are you sure ${partName}</h3>
          <p class='py-4'>
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class='modal-action'>
            <label for='delete-confirm' class='btn'>
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
