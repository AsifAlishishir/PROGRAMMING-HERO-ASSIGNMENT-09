import React from "react";

const vets = [
  {
    id: 1,
    name: "Dr. Ben Carter",
    specialization: "Tropical Medicine & Avian Physiology",
    experience: "5 Years Exp.",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Dr. Chloe Ramirez",
    specialization: "Feline Internal Medicine & Behavior",
    experience: "12 Years Exp.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Dr. Daniel Lee",
    specialization: "Equine Orthopedics & Rehabilitation",
    experience: "10 Years Exp.",
    image:
      "https://images.unsplash.com/photo-1659353888906-adb3e0041693?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const MeetOurVets = () => {
  return (
    <div className="mt-10 sm:mt-20 px-6 sm:px-9 xl:px-[100px]">
      <div className="text-center mb-16">
        <h2 className="text-[20px] sm:text-4xl font-extrabold text-gray-800 ">
          Meet Our <span className="text-purple-600">Expert Vets</span>
        </h2>
        <p className="mt-3 text-xl text-gray-700 ">
          Dedicated professionals committed to your pet's long-term health.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12 mx-auto">
        {vets.map((vet) => (
          <div
            key={vet.id}
            className="card bg-white dark:bg-gray-100 shadow-xl rounded-2xl overflow-hidden 
                   transition duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.03]"
          >
            <figure className="h-64 sm:h-72 w-full relative">
              <img
                className="h-full w-full object-cover"
                src={vet.image}
                alt={vet.name}
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
            </figure>

            <div className="card-body p-6 sm:p-8 space-y-3">
              <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-900">
                Dr. {vet.name}
              </h2>

              <p className="flex items-center text-lg text-purple-600 font-semibold">
                <span className="mr-2 text-xl">🩺</span>
                {vet.specialization}
              </p>

              <p className="flex items-center text-gray-600 dark:text-gray-700">
                <span className="mr-2 text-xl">🎓</span>
                {vet.experience}
              </p>

              <div className="card-actions justify-end pt-4">
                <button
                  className="btn btn-primary btn-md text-white font-semibold px-8 
                         bg-linear-to-r from-[#632EE3] to-[#9F62F2] 
                         border-none hover:opacity-90 shadow-lg"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurVets;
