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

  if(loading){
    return <p>Loading.......</p>
  }

  return (
    <div className="my-20 flex flex-col items-center">
      <img
        className="w-1/4 h-[500px] object-cover rounded-2xl"
        src={findResult?.image}
        alt=""
      />
    </div>
  );
};

export default ServiceDetails;
