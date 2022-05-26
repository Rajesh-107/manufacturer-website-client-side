import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const MyOrders = () => {
  const [order, setOrder] = useState([]);
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?myEmail=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          console.log("res", res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setOrder(data);
        });
    }
  }, [user]);

  return (
    <div>
      <h2>My Orders: {order.length}</h2>

      <div className='overflow-x-auto'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>PartName</th>
              <th>Your Order</th>

              <th>Total Price</th>
              <th>Pay</th>
              <th>Delete Order</th>
            </tr>
          </thead>
          <tbody>
            {order.map((o, index) => (
              <tr key={o._id}>
                <th>{index + 1}</th>
                <td>{o.name}</td>
                <td>{o.partDetailName}</td>
                <td>{o.minOrder}</td>
                <td>{o.totalPrice}</td>
                <td>
                  {o.price && !o.paid && (
                    <Link to={`/dashboard/payment/${o._id}`}>
                      <button className='btn btn-xs btn-success'>Pay</button>
                    </Link>
                  )}
                  {o.price && o.paid && (
                    <div>
                      <span className='text-success'>Paid</span>
                      <p>
                        Transaction id:
                        <span className='text-success'>{o.transactionId}</span>
                      </p>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
