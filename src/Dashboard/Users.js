import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import TotalUser from "./TotalUser";

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://shrouded-lake-78454.herokuapp.com/user", {
      method: "GET",
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
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Admin</th>
              <th>Delete user</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <TotalUser
                key={user._id}
                user={user}
                refetch={refetch}></TotalUser>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
