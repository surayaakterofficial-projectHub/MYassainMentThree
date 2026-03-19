import React from 'react';
import { Link } from 'react-router-dom';

const Errror = () => {
  return (
   <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Opps</h1>
      <p className="py-6">
       this page not found
      </p>

     <Link to='/'  className='btn btn-primary'>
     Go back to Home
     </Link>
      
    </div>
  </div>
</div>
  );
};

export default Errror;