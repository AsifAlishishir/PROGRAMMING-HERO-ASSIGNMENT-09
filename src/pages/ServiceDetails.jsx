import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ServiceDetails = () => {
  const { id } = useParams();
  const [services, setServices] = useState([]);
  const [serviceDetails, setServiceDetails]= useState(null)

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(()=>{
    
  },[])
  return (
  <div>
dasdfas
  </div>
  );
};

export default ServiceDetails;
