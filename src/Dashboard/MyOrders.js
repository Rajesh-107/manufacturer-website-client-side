import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const MyOrders = () => {
  const [order, setOrder] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?myEmail=${user.email}`)
        .then((res) => res.json())
        .then((data) => setOrder(data));
    }
  }, [user]);

  return (
    <div>
      <h2>My Orders: {order.length}</h2>
      <div class='overflow-x-auto'>
        <table class='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>PartName</th>
              <th>You Order</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {order.map((o, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{o.name}</td>
                <td>{o.partDetailName}</td>
                <td>{o.minOrder}</td>
                <td>{o.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
