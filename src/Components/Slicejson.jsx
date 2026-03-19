import { Link } from "react-router-dom";

const Slicejson = ({ data }) => {

  const Slicedata = data?.slice(0, 8);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 mx-auto w-11/12">

        {Slicedata.map((item) => (
          <Link key={item.id} to={`/details/${item.id}`}>
            <div className="card bg-base-100 shadow-sm cursor-pointer hover:shadow-lg transition">
              
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

                <p>{item.description}</p>

                <p className="text-sm text-gray-500">{item.companyName}</p>

                <div className="flex justify-between mt-2">
                  <span> {item.ratingAvg}</span>
                  <span> {item.downloads}</span>
                </div>

                <div className="card-actions justify-end mt-3">
                  <div className="badge badge-outline">App</div>
                  <div className="badge badge-outline">Product</div>
                </div>
              </div>

            </div>
          </Link>
        ))}

      </div>

    
      <div className="flex justify-center mb-6 mt-4">
        <Link to="/alldata" className="btn btn-accent px-8">
          See More
        </Link>
      </div>
    </>
  );
};

export default Slicejson;