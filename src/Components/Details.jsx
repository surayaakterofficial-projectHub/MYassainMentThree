import React from "react";
import { useLoaderData, Link, useNavigate } from "react-router-dom";
import { FaStar, FaDownload, FaFileAlt } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { installApp } from "../Components/Localstroage";

import { CartesianGrid, Legend, Line, LineChart,Tooltip,XAxis, YAxis, ResponsiveContainer} from  "recharts";

const Details = () => {
  const item = useLoaderData();
  const navigate = useNavigate();

  if (!item) return <p className="text-center mt-10">Item not found</p>;

  const handleInstall = () => {
    const success = installApp(item);
    if (!success) {
      toast("Already installed!", { icon: "" });
      return;
    }
    toast.success(`${item.title} installed successfully`);
    navigate("/ins");
  };

  
  const chartData = item.ratings;

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6">
      <Toaster position="top-center" />

      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-6 gap-6">
        <div className="flex-shrink-0 w-32 h-32 md:w-48 md:h-48 flex items-center justify-center border rounded-lg">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-xl md:text-2xl font-bold">{item.title}</h1>
            <p className="text-gray-500 text-sm mt-1">
              Developed by{" "}
              <span className="text-blue-600 underline">
                {item.companyName}
              </span>
            </p>

            <div className="flex gap-6 mt-4">
              <div className="flex items-center gap-1">
                <FaDownload />{" "}
                <span className="font-bold">{item.downloads}</span> Downloads
              </div>

              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar />
                <span className="font-bold">{item.ratingAvg}</span> Avg Rating
              </div>

              <div className="flex items-center gap-1">
                <FaFileAlt className="text-purple-500" />
                <span className="font-bold">{item.reviews}</span> Reviews
              </div>
            </div>

            <button
              onClick={handleInstall}
              className="mt-4 btn btn-success w-40"
            >
              Install Now
            </button>
          </div>
        </div>
      </div>

   {/*   my chart */}
      <div className="mt-10">
        <h2 className="font-semibold mb-4 text-lg">Ratings Chart</h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#ff7300"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

    

      <div className="mt-8">
        <h2 className="font-semibold mb-2">Description</h2>
        <p className="text-gray-700 text-sm">{item.description}</p>
      </div>

      <div className="mt-6">
        <Link to="/" className="btn btn-outline">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Details;