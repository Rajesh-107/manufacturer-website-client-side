import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../Dashboard/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L19WzD5qkxKjAbjCVQDag0uuDNfkeNbMIw1RKGpfljCigYQRPF3jkebQomw1ceuBLClT1w9iqDKYh3AGKkhC9Mi00tmsIH1NC"
);

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/booking/${id}`;

  const { data: order, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
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
      <div class='card w-50 max-w-md  bg-base-100 shadow-xl my-12'>
        <div class='card-body'>
          <h2 className='text-success text-bold'>Hello {order.name}</h2>
          <h2 class='card-title'>pay for {order.partDetailName}</h2>
          <p>Make sure This is your Item </p>
          <p className='text-red-500'>Please pay: ${order.price}</p>
        </div>
      </div>
      <div class='card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100'>
        <div class='card-body'>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
