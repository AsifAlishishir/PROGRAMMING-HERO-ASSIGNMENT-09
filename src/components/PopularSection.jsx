import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const PopularSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  // console.log(services);
  return (
    <div className="mt-10 sm:mt-20 px-6 sm:px-9 xl:px-[100px]">
      <div>
        <h3 className="font-bold text-[20px] sm:text-4xl text-center text-purple-500">
          Popular Winter Care Services
        </h3>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10 mt-12 mx-auto">
        {services.slice(0, 6).map((service) => (
          <div
            key={service?.serviceId}
            className="card bg-white dark:bg-gray-100 shadow-xl border-t-4 border-purple-500 rounded-xl 
             transition duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.03]"
          >
            <figure className="relative h-52 sm:h-64">
              <img
                className="w-full h-full object-cover rounded-t-xl"
                src={service?.image}
                alt={service?.serviceName || "Pet Service Image"}
              />
              <div className="badge badge-lg absolute top-3 right-3 bg-purple-100 text-purple-700 font-bold border-none shadow-md">
                Winter Care
              </div>
            </figure>

            <div className="p-5 sm:p-7 space-y-4">
              <h2 className="card-title text-2xl font-extrabold text-gray-900 dark:text-gray-900 pb-2 border-b border-gray-100 dark:border-gray-300">
                <span className="text-purple-500 mr-2">⭐</span>
                {service?.serviceName}
              </h2>

              <div className="flex justify-between items-center text-lg font-medium text-gray-700 dark:text-gray-600">
                <p className="flex items-center">
                  <span className="text-xl text-green-600 font-bold mr-1">
                    $$
                  </span>
                  Price:{" "}
                  <span className="font-extrabold text-green-700 dark:text-green-700 ml-1">
                    {service?.price}
                  </span>
                </p>

                <p className="flex items-center">
                  <span className="text-xl text-yellow-500 mr-1">★</span>
                  Rating:{" "}
                  <span className="font-extrabold ml-1">{service?.rating}</span>
                </p>
              </div>

              <div className="card-actions justify-end pt-3">
                <Link to={`/details/${service?.serviceId}`}>
                  <button
                    className="btn btn-primary btn-md text-white font-semibold px-8 
                     bg-linear-to-r from-[#632EE3] to-[#9F62F2] 
                     border-none hover:opacity-90 shadow-md"
                  >
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularSection;
