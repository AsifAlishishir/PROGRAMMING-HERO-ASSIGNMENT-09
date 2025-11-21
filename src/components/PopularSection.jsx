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
    <div className="mt-8 px-[150px]">
      <div>
        <h3 className="font-bold text-3xl text-center">
          Popular Winter Care Services
        </h3>
      </div>

      <div className="grid grid-cols-3 gap-10 mt-12">
        {services.map((service) => (
        <div className="card bg-base-100 shadow-sm">
          <figure>
            <img className="w-full h-[300px] object-cover"
              src={service?.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{service?.serviceName}</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default PopularSection;
