import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="my-10 sm:my-20 px-6 sm:px-9 xl:px-[100px]">
          <div>
            <h3 className="font-bold text-[20px] sm:text-3xl text-center text-purple-500">
              Popular Winter Care Services
            </h3>
          </div>
    
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10 mt-12 mx-auto">
            {services.map((service) => (
              <div key={service?.serviceId} className="card bg-base-100 shadow-sm transition duration-200 ease-in-out hover:scale-[1.05]">
                <figure>
                  <img
                    className="w-full h-52 sm:h-[300px] object-cover"
                    src={service?.image}
                    alt="Shoes"
                  />
                </figure>
                <div className="px-4 sm:px-7 py-5 space-y-3 md:space-y-5">
                  <h2 className="card-title font-semibold text-[20px]">
                    {service?.serviceName}
                  </h2>
                  <div className="flex justify-between">
                    <p>Price: {service?.price}</p>
                    <p>Rating: {service?.rating}</p>
                  </div>
                  <div className="card-actions justify-end">
                    <Link to={`/details/${service?.serviceId}`}>
                      <button className="btn btn-primary">View Details</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
  );
};

export default Services;
