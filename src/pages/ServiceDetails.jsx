import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import LoadingSpinner from "../components/LoadingSpinner";

// Helper function to handle form submission
const handleBooking = (e, serviceName, servicePrice, resetForm) => {
  e.preventDefault();

  // Show success alert
  toast.success(`${serviceName} has been booked!`);

  resetForm();
};

const ServiceDetails = () => {
  const [services, setServices] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  // State for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Function to reset the form state
  const resetForm = () => {
    setName("");
    setEmail("");
  };

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

  if (loading) return <LoadingSpinner />;

  if (!findResult) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] w-full p-6 my-10">
        <div className="card w-full max-w-md shadow-xl bg-base-100 dark:bg-gray-800 rounded-2xl p-8 sm:p-10 text-center">
          <div className="card-body p-0">
            <div className="text-7xl sm:text-8xl mb-6 text-orange-400 dark:text-orange-300">
              <span role="img" aria-label="Paw print missing">
                🐾❓
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-red-600 dark:text-red-400 mb-3">
              Service Not Found
            </h1>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              We couldn't track down the specific service you requested. Perhaps
              it's been retired, or we're currently developing a better version!
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="/services"
                className="btn btn-primary btn-lg font-bold shadow-lg 
                     bg-linear-to-r from-[#632EE3] to-[#9F62F2] border-none"
              >
                Browse All Pet Services
              </a>

              <button
                onClick={() => window.history.back()}
                className="btn  btn-sm text-black  hover:text-gray-500"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const {
    serviceName,
    price,
    category,
    description,
    providerName,
    providerEmail,
    rating,
    slotsAvailable,
    image,
  } = findResult;

  return (
    <div className="flex flex-col items-center my-20 px-4 sm:px-8">
      <div className="card lg:card-side w-full max-w-5xl shadow-2xl overflow-hidden rounded-2xl mb-12 bg-white dark:bg-gray-100">
        <div className="lg:w-1/2 w-full h-[550px]">
          <img
            className="w-full h-full object-cover"
            src={image}
            alt={serviceName}
          />
        </div>

        <div className="card-body p-6 sm:p-10 lg:w-1/2 flex flex-col justify-between lg:h-auto">
          <div className="grow">
            <span className="badge font-semibold mb-3 border-none text-white bg-purple-600">
              {category}
            </span>
            <h2 className="text-3xl font-bold mb-4 text-purple-700">
              {serviceName}
            </h2>
            <p className="text-gray-600 dark:text-gray-700 mb-6 leading-relaxed">
              {description}
            </p>

            <div className="p-4 rounded-lg text-sm mb-6 shadow-md bg-purple-50 dark:bg-purple-100">
              <p className="font-semibold text-lg mb-1 text-purple-600">
                Provided by: {providerName}
              </p>
              <p className="text-gray-500">Contact: {providerEmail}</p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-purple-600">★</span>
                <span className="text-lg font-medium text-gray-700 dark:text-gray-800">
                  Rating: {rating}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`text-lg font-medium ${
                    slotsAvailable > 0 ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {slotsAvailable > 0 ? "Available" : "Sold Out"}
                </span>
                <span className="text-gray-700 dark:text-gray-800">
                  ({slotsAvailable} slots)
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-4xl font-extrabold text-purple-600">
                ${price}
              </div>

              <a
                href="#booking-form-section"
                className="btn btn-lg text-white font-semibold shadow-md hover:shadow-lg transition-all 
                       bg-linear-to-r from-[#632EE3] to-[#9F62F2] border-none"
                disabled={slotsAvailable <= 0}
              >
                Scroll to Book
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        id="booking-form-section"
        className="w-full max-w-5xl p-8 rounded-2xl shadow-2xl bg-white dark:bg-gray-100"
      >
        <h3 className="text-3xl font-bold mb-8 text-center text-purple-700">
          Ready to Book?
        </h3>

        <form onSubmit={(e) => handleBooking(e, serviceName, price, resetForm)}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between p-4 border-t pt-6 border-purple-300">
            <span className="text-3xl font-extrabold mb-4 sm:mb-0 text-purple-600">
              Total Price: ${price}
            </span>
            <button
              type="submit"
              className="btn btn-lg text-white font-semibold shadow-md transition-all px-10 py-3 w-full sm:w-auto
                     bg-linear-to-r from-[#632EE3] to-[#9F62F2] border-none"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceDetails;
