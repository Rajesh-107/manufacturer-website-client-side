import React, { useEffect, useState } from "react";
import Bikepart from "./Bikepart";
import BikePartDetail from "./BikePartDetail";

const Bikeparts = () => {
  const [parts, setParts] = useState([]);
  const [partDetail, setpartDetail] = useState(null);

  useEffect(() => {
    fetch("https://shrouded-lake-78454.herokuapp.com/bikepart")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);
  return (
    <div id='bikeparts'>
      <h2 className='text-center text-3xl m-5 text-primary'>All bike parts </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ml-8'>
        {parts.map((part) => (
          <Bikepart
            key={part._id}
            part={part}
            setpartDetail={setpartDetail}></Bikepart>
        ))}
      </div>
      {partDetail && (
        <BikePartDetail
          partDetail={partDetail}
          setpartDetail={setpartDetail}></BikePartDetail>
      )}
    </div>
  );
};
export default Bikeparts;
