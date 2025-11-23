import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ServiceDetails = () => {
  const [services, setServices] = useState([]);
  const [serviceDetails, setServiceDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  
    const findResult = services.find((service) => service.serviceId == id);
    console.log(findResult);
    
   

  

  return (
    <div className="my-20 flex flex-col items-center">
        <img className="w-1/4 h-[500px] object-cover rounded-2xl" src={findResult?.image} alt="" />
    </div>
  );
};

export default ServiceDetails;
