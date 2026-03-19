import React from 'react'; 

 


import banerimg from '../assets/hero.png'

const Banner = () => {
  return (
   <div className="hero bg-white  py-10 -mt-8">
 <div className="hero-content flex flex-col items-center text-center">
    
    <div>
      <h1 className="text-5xl font-bold font-serif">We craft apps that make life easier</h1>
      <p className="py-6">
       Our solutions are built to save time and reduce complexity.
Experience smooth performance and user-friendly design.
      </p>
      <button className="btn btn-primary">App Store</button>
      <button className="btn btn-accent m-2">Google store</button>
    </div>

    <img
      src={banerimg}
      className="max-w-sm rounded-lg shadow-2xl w-[400px] h-[230px]"
    />
  </div>
</div>
  );
};

export default Banner;