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
    <div className="mt-20 px-[150px]">
      <h2 className="text-3xl font-bold text-center my-8">Meet Our Expert Vets</h2>
      <div className="grid grid-cols-3 gap-6 mx-auto ">
        {vets.map((vet) => (
          <div key={vet.id} className="card bg-base-100 shadow-sm">
            <figure>
              <img
              className="h-58 w-full object-cover"
                src={vet.image}
                alt={vet.name}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{vet.name}</h2>
              <p>
               {vet.specialization}
              </p>
              <p>{vet.experience}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Book Appointment</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurVets;
