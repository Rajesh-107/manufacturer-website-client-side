import React from "react";
import { toast } from "react-toastify";

const TotalUser = ({ user, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`https://shrouded-lake-78454.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Made an Admin`);
        }
      });
  };
  return (
    <tr>
      <th></th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} className='btn btn-xs'>
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button className='btn btn-xs'>Remove user</button>
      </td>
    </tr>
  );
};

export default TotalUser;
