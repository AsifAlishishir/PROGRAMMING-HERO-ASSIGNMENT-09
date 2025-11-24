import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ServiceDetails = () => {
  const [services, setServices] = useState([]);

  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const findResult = services.find((service) => service.serviceId == id);
  console.log(findResult);

  if (loading) {
    return <p>Loading.......</p>;
  }

  return (
    // Assume 'findResult' is the object containing all the data
    // e.g., const findResult = { serviceName: "...", price: 35, ... };

    <div className="flex flex-col items-center my-20 px-8">
      {/* Main Content Container: Wide card, flex layout on large screens, cozy colors */}
      <div
        className="card lg:card-side w-full max-w-5xl shadow-2xl overflow-hidden rounded-2xl"
        style={{ backgroundColor: "white" }}
      >
        {/* 1. Image Section (LEFT) */}
        {/* FIX 1: Removed lg:h-auto from outer div, but it's okay here */}
        <div className="lg:w-1/2 w-full h-[539px]">
          <img
            // FIX 2: Removed fixed h-[639px]. Used h-full to fill parent (h-96 on mobile, auto on desktop)
            className="w-full h-full object-cover"
            src={findResult?.image}
            alt={findResult?.serviceName}
          />
        </div>

        {/* 2. Details Section (RIGHT - Information Block) */}
        {/* Added lg:h-auto to ensure the details height matches the image on large screens */}
        <div className="card-body p-6 sm:p-10 lg:w-1/2 flex flex-col justify-between lg:h-auto">
          {/* Top Info: Title, Description, and Category */}
          <div className="flex-grow">
            {/* ... (Content remains the same) ... */}
            <span
              className="badge font-semibold mb-3 border-none text-white"
              style={{ backgroundColor: "#5C7F92" }}
            >
              {findResult?.category}
            </span>

            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: "#5C7F92" }}
            >
              {findResult?.serviceName}
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {findResult?.description}
            </p>

            <div
              className="p-4 rounded-lg text-sm mb-6 shadow-sm"
              style={{ backgroundColor: "#F9F6F1" }}
            >
              <p
                className="font-semibold text-lg mb-1"
                style={{ color: "#E5734A" }}
              >
                Provided by: {findResult?.providerName}
              </p>
              <p className="text-gray-500">
                Contact: {findResult?.providerEmail}
              </p>
            </div>
          </div>

          {/* Bottom Info: Stats and CTA */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            {/* ... (Content remains the same) ... */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span
                  className="text-xl font-bold"
                  style={{ color: "#E5734A" }}
                >
                  ★
                </span>
                <span className="text-lg font-medium text-gray-700">
                  Rating: {findResult?.rating}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className="text-lg font-medium"
                  style={{ color: "#9BC778" }}
                >
                  {findResult?.slotsAvailable > 0 ? "Available" : "Sold Out"}
                </span>
                <span className="text-gray-700">
                  ({findResult?.slotsAvailable} slots)
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div
                className="text-4xl font-extrabold"
                style={{ color: "#E5734A" }}
              >
                ${findResult?.price}
              </div>
              <button
                className="btn btn-lg text-white font-semibold shadow-md hover:shadow-lg transition-all"
                style={{ backgroundColor: "#E5734A", borderColor: "#E5734A" }}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
