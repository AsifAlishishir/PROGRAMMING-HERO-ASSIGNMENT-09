import React, { useEffect, useState } from "react";

const PopularSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(services);
  return (
    <div className="mt-20 px-[150px]">
      <div>
        <h3 className="font-bold text-3xl text-center">
          Popular Winter Care Services
        </h3>
      </div>

      <div className="grid grid-cols-3 gap-10 mt-12">
        {services.slice(0,6).map((service) => (
          <div key={service?.serviceId} className="card bg-base-100 shadow-sm">
            <figure>
              <img
                className="w-full h-[300px] object-cover"
                src={service?.image}
                alt="Shoes"
              />
            </figure>
            <div className="px-10 py-5 space-y-5">
              <h2 className="card-title font-semibold text-[20px]">
                {service?.serviceName}
              </h2>
              <div className="flex justify-between">
                <p>Price: {service?.price}</p>
                <p>Rating: {service?.rating}</p>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularSection;
