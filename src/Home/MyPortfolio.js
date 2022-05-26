import React from "react";

const MyPortfolio = () => {
  return (
    <div className='text-center w-50'>
      <h2>My MyPortfolio</h2>
      <div class='overflow-x-auto'>
        <table class='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Educational background</th>
              <th>Technologies</th>
              <th>Here is My some projects</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Rajesh Barua</td>
              <td>rajeshbarua83@gmail.com</td>
              <td>
                I am doing Bachelor in China. <br /> My University name is
                Wuzhou University. <br /> My Major Subject is Computer Science
                and Technology.
              </td>
              <td>
                HTML5, CSS3, Bootstrap, Tailwind, <br /> JavaScript, ReactJs,
                NodeJs, MongoDb, ExpressJs, Laravel 8.
              </td>
              <td>
                https://warehouse-car-parts.web.app <br />
                https://gentle-gecko-478ea4.netlify.app
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPortfolio;
