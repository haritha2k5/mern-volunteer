import React from 'react';
import { Link } from 'react-router-dom';
import imagePath from '/src/event logo.jpg'; // Adjust this relative path as needed

const HostPage = () => {
  return (
    <div>
      <center>
      <h1>Hello,Host!</h1>
      {/* In-app navigation*/}
      <div className="py-8">
        <h3>‎</h3>
        <a href="/src/components/Eventdesc.jsx" ><h2>Event Name</h2></a>
        <h3>‎</h3>
      </div>
      {/* Image */}
       <img src={imagePath} alt="Event" /> 
      </center> 
    </div>
  );
};

export default HostPage;