import React from "react";

const About = () => {
  return (
    <div className='text-center text-3xl text-bold'>
      <h2 className='text-2xl text-bold text-purple-500'>
        Motorcycle Manufacturing Process
      </h2>
      <ul class='steps steps-vertical '>
        <li class='step step-primary '>Market Research</li>
        <li class='step step-primary'>Sketching</li>
        <li class='step step-primary'>Software Modelling</li>
        <li class='step step-primary'>Clay/Wax Modelling</li>
        <li class='step step-primary'>Designing</li>
        <li class='step step-primary'>Simulations</li>
        <li class='step step-primary'>Testing</li>
        <li class='step step-primary'> Pilot Vehicles</li>
        <li class='step step-primary'> Production</li>
      </ul>
    </div>
  );
};

export default About;
