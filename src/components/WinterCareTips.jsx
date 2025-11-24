import React from "react";

const winterTips = [
  {
    id: 1, // Changed from the previous request's repeating ID
    title: "Watch for Salt and Ice Melters",
    description:
      "Chemicals used to melt ice can irritate paws. Wipe your pet's paws thoroughly after outdoor walks to remove salt and residue.",
    icon: "🐾",
  },
  {
    id: 2, // Increased
    title: "Check Under the Hood",
    description:
      "Stray cats and small wildlife often seek warmth near car engines. Honk your horn or tap the hood before starting your car to scare them away.",
    icon: "🚗",
  },
  {
    id: 3, // Increased
    title: "Ensure Adequate Hydration",
    description:
      "Pets can get just as dehydrated in the winter. Check outdoor water bowls frequently to ensure water hasn't frozen, and provide fresh indoor water.",
    icon: "💧",
  },
  {
    id: 4, // Increased
    title: "Be Mindful of Antifreeze",
    description:
      "Antifreeze is highly toxic but has a sweet smell that attracts pets. Clean up spills immediately and store containers securely out of reach.",
    icon: "⚠️",
  },
];
const WinterCareTips = () => {
  return (
    <div className="my-10 sm:my-20 px-9 sm:px-13 xl:px-[150px]">
      <h2 className="font-bold text-[20px] sm:text-3xl text-center mb-8 text-purple-500">
        Winter Care Tips for Pets
      </h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-10 mx-auto ">
        {winterTips.map((tip) => (
          <div
            key={tip.id}
            className="card bg-base-100 shadow-md transition duration-200 ease-in-out hover:scale-[1.05] border-gray-300 border p-6"
          >
            <p className="mb-3 text-2xl">{tip.icon}</p>

            <div className="space-y-4">
              <h2 className="card-title">{tip.title}</h2>
              <p>{tip.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WinterCareTips;
