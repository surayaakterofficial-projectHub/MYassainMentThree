 import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import appify from '../assets/ChatGPT Image Mar 16, 2026, 11_14_42 PM.png'
import { FaGithub } from 'react-icons/fa';
const Navbar = () => {


  const links=<>
  <NavLink
  to="/"
  className={({ isActive }) =>
    isActive ? "active m-2" : "m-2"
  }
>
  Home
</NavLink>
 
 <NavLink
  to="/ins"
  className={({ isActive }) =>
    isActive ? "active m-2" : "m-2"
  }
>
  Install
</NavLink>
 
  <NavLink
  to="/alldata"
  className={({ isActive }) =>
    isActive ? "active m-2" : "m-2"
  }
>
  Apps
</NavLink>
  </>
  return (
    <div className="navbar mx-auto w-11/12">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>

    <Link to="/" className="flex items-center">
          <img src={appify} alt="Appify Logo" className="h-30 w-auto object-contain" />
        </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a href='https://github.com/surayaakterofficial-projectHub' className="btn btn-info"><FaGithub className='h-1/2 w-2/3' />Contribute</a>
  </div>
</div>
  );
};

export default Navbar; 