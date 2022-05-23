import React from "react";
import { useParams } from "react-router-dom";

const BikePartDetail = () => {
  const { bikepartId } = useParams();
  return (
    <div>
      <h2>This is detail part: {bikepartId} </h2>
    </div>
  );
};

export default BikePartDetail;
