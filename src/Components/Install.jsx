// src/Components/Install.jsx
import React, { useEffect, useState } from "react";
import { getInstalledApps, removeApp } from "../Components/Localstroage";


import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { FaTrashAlt, FaStar, FaDownload } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Install = () => {

const[installsort,Setinstallsort]=useState('')



  const [apps, setApps] = useState([]);

  useEffect(() => {
    setApps(getInstalledApps());
  }, []);

  const handleRemove = (id) => {
    removeApp(id);
    setApps(getInstalledApps());
    toast.success("App removed successfully! ✅");
  };

  if (apps.length === 0) {
    return (

    
      <div className="text-center mt-20">
        <Toaster position="top-right" />
        <h1 className="text-2xl font-bold mb-4">No Installed Apps</h1>
        <Link to="/" className="btn btn-outline">Go Back Home</Link>
      </div>
    );
  }


const handleSort=(type)=>{
Setinstallsort(type)


if(type==='High-Low'){
  const sortedbyDawnload=[...apps].sort((a,b)=>b.downloads-a.downloads);
  setApps(sortedbyDawnload)
}
if(type==='Low'){

  const sorted=[...apps].sort((a,b)=>a.downloads-b.downloads)
  setApps(sorted)
}
}
  return (

    <>
    
    <Navbar></Navbar>

   {/*  MysortItem */}
<div className="flex justify-end mx-auto w-9/12">
  <div className="dropdown">
    <div tabIndex={0} role="button" className="btn m-1 bg-amber-900 text-blue-100">Sort by: {installsort?installsort:''}</div>
    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow-sm">
      <li><a onClick={()=>handleSort('High-Low')}>High-Low</a></li>
      <li><a onClick={()=>handleSort('Low')}>Low-High</a></li>
    </ul>
  </div>
</div>


    <div className="max-w-4xl mx-auto mt-10 p-6">
      <Toaster position="top-right" />
      <h1 className="text-3xl font-bold mb-6 text-center">Installed Apps</h1>

      <div className="flex flex-col gap-6">
        {apps.map(app => (
          <div key={app.id} className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
            
            {/* Left: Image */}
            <div className="w-full md:w-48 h-48 flex-shrink-0 border-b md:border-b-0 md:border-r border-gray-200 flex items-center justify-center">
              <img src={app.image} alt={app.title} className="w-full h-full object-contain" />
            </div>

            {/* Right: Info */}
            <div className="flex-1 p-4 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold">{app.title}</h2>
                <p className="text-gray-500 mb-2">by {app.companyName}</p>

                <div className="flex gap-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <FaDownload className="text-green-500" /> {app.downloads || "N/A"} Downloads
                  </div>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" /> {app.ratingAvg || "N/A"} Avg Rating
                  </div>
                </div>

                <p className="text-gray-700 text-sm">{app.description?.slice(0, 120)}...</p>
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => handleRemove(app.id)}
                  className="btn btn-error flex items-center gap-2"
                >
                  <FaTrashAlt /> Uninstall
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link to="/" className="btn btn-outline">Back back Home</Link>
      </div> 
    </div><Footer></Footer>
    </>
  );
};

export default Install;
