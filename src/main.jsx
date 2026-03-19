import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllElements from './Components/AllElements';
import Home from './Components/Home';

import Alldata from './Components/Alldata';
import { createRoot } from "react-dom/client";
import React from "react";
import './App.css'
import './index.css'
import Details from "./Components/Details";
import Errror from "./Components/Errror";
import Install from "./Components/Install";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AllElements />, 
      
    children: [
      {
        path:'',
        index: true,
        element: <Home />,
        loader: async () => {
          const res = await fetch("/Myapps.json");
          return res.json();
        },
      },
      
      { path:'/details/:id',
        element:<Details></Details>,
      loader: async ({ params }) => {
  const res = await fetch("/Myapps.json");
  const allData = await res.json();
  return allData.find(item => item.id.toString() === params.id);
},}

    ],
  },
  {
    path: "/alldata",
  element:<Alldata></Alldata>,
   
  },{
    element:<Errror></Errror>,
      path:'*',
  },
  {
    path:'/ins',
    element:<Install></Install>,
  }
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />  
  </React.StrictMode>
);