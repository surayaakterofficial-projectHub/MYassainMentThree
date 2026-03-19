import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { GrInstallOption } from 'react-icons/gr';
import { IoIosStarOutline } from 'react-icons/io';

const Alldata = () => {
  const [data, setData] = useState([]);

  useEffect(() => {

    fetch('/Myapps.json')
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error(err));
  }, []);

  return (

    <>
    
     <Navbar></Navbar>
  
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-11/12 mx-auto">
     
      {data?.map((item) => (
         <Link key={item.id} to={`/details/${item.id}`}>
        <div key={item.id} className="card bg-base-100 shadow-sm">
          
          <figure>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title">
              {item.title}
              <div className="badge badge-secondary">NEW</div>
            </h2>

            <p className="text-sm">{item.description}</p>

            <p className="text-sm text-gray-500">
              {item.companyName}
            </p>

            <div className="flex justify-between mt-2">
              <span className='flex'> <IoIosStarOutline  className='text-yellow-900  h-7'/> <IoIosStarOutline className='text-yello-500' /> {item.ratingAvg}</span>
              <span><GrInstallOption  className='text-pink-900  w-10 h-5'/> {item.downloads}</span>
            </div>

            <div className="card-actions justify-end mt-3">
              <div className="badge badge-outline">App</div>
              <div className="badge badge-outline">Product</div>
            </div>
          </div>

        </div></Link>
      ))}

    </div> <Footer></Footer> </>
  );
};

export default Alldata;