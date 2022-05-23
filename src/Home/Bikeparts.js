import React, { useEffect, useState } from "react";
import Bikepart from "./Bikepart";

const Bikeparts = () => {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/bikepart")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);
  return (
    <div id='bikeparts'>
      <h2 className='text-center text-3xl m-5 text-primary'>All bike parts </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ml-8'>
        {parts.map((part) => (
          <Bikepart key={part.id} part={part}></Bikepart>
        ))}
      </div>
    </div>
  );
};

export default Bikeparts;
