import React from "react";

const winterTips = [
  {
    id: 1,
    title: "Watch for Salt and Ice Melters",
    description:
      "Chemicals used to melt ice can irritate paws. Wipe your pet's paws thoroughly after outdoor walks to remove salt and residue.",
    icon: "🐾",
  },
  {
    id: 2,
    title: "Check Under the Hood",
    description:
      "Stray cats and small wildlife often seek warmth near car engines. Honk your horn or tap the hood before starting your car to scare them away.",
    icon: "🚗",
  },
  {
    id: 3,
    title: "Ensure Adequate Hydration",
    description:
      "Pets can get just as dehydrated in the winter. Check outdoor water bowls frequently to ensure water hasn't frozen, and provide fresh indoor water.",
    icon: "💧",
  },
  {
    id: 4,
    title: "Be Mindful of Antifreeze",
    description:
      "Antifreeze is highly toxic but has a sweet smell that attracts pets. Clean up spills immediately and store containers securely out of reach.",
    icon: "⚠️",
  },
];
const WinterCareTips = () => {
  return (
    <div className="my-10 sm:my-20 px-9 sm:px-13 xl:px-[150px]">
      <h2 className="font-bold text-[20px] sm:text-4xl text-center mb-10 text-purple-500">
        Winter Care Tips for Pets
      </h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-10 mx-auto">
        {winterTips.map((tip) => (
          <div
            key={tip.id}
            className="card bg-white dark:bg-gray-100 shadow-xl rounded-2xl p-7 
                 border-t-4 border-purple-500 hover:border-purple-600 
                 transition duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.05]"
          >
            <p className="mb-4 text-4xl text-purple-600 dark:text-purple-500 transition duration-300">
              {tip.icon}
            </p>

            <div className="space-y-3">
              <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-900 leading-snug border-b border-gray-200 pb-2">
                {tip.title}
              </h2>

              <p className="text-gray-600 dark:text-gray-700 text-base">
                {tip.description}
              </p>

              <div className="pt-2">
                <a
                  href="#"
                  className="text-purple-500 hover:text-purple-700 font-semibold text-sm flex items-center"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WinterCareTips;
