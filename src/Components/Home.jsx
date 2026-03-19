import React from 'react';
import Banner from './Banner';
import Stat from './Stat';


import Slicejson from './Slicejson';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

  
const data=useLoaderData()
console.log(data);

  return (
    <div className='justify-center '>
    
     <Banner></Banner>
     <div className="flex justify-center -mt-14 bg-gradient-to-r from-indigo-200 to-cyan-700  w-11/12 mx-auto">

  <Stat />

</div>
<div>
     <Slicejson data={data}></Slicejson></div>
    </div>
  );
};

export default Home;