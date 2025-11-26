import React from "react";

const HydrationNutritionCheckup = () => {
  const checkupPoints = [
    {
      title: "Boost Caloric Intake",
      detail:
        "Pets spending significant time outdoors may need 10-20% more calories to generate body heat. Consult your vet before changing their food volume.",
      icon: "🥩",
      color: "border-orange-500",
    },
    {
      title: "Monitor Water Temperature",
      detail:
        "Pets may avoid drinking water that is too cold. Ensure outdoor water bowls are heated, and indoor bowls are refreshed frequently with room-temperature water.",
      icon: "🧊",
      color: "border-blue-500",
    },
    {
      title: "Increase Healthy Fats",
      detail:
        "Adding high-quality fatty acids (like fish oil) can support skin barrier function, reduce dryness caused by indoor heating, and boost immunity.",
      icon: "💊",
      color: "border-purple-500",
    },
    {
      title: "Check for Dehydration Signs",
      detail:
        "Dehydration is common indoors due to dry air. Check skin elasticity (tenting test) and gum moisture daily, especially for older pets.",
      icon: "💦",
      color: "border-teal-500",
    },
  ];

  return (
    <section className="py-1">
      <div className="my-10 sm:my-20 px-9 sm:px-20 xl:px-[190px]">
        <div className="text-center mb-14">
          <h2 className="text-[20px] sm:text-4xl font-extrabold text-purple-500">
            🍲 Hydration & Nutrition Check-Up
          </h2>
          <p className="mt-4 text-[16px] sm:text-xl ">
            Internal wellness is key to surviving the cold. Adjust your pet's
            diet for winter fitness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {checkupPoints.map((point, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-md transition-shadow duration-300 hover:shadow-lg bg-white border-l-4 ${point.color}`}
            >
              <div className="text-3xl mb-3">{point.icon}</div>
              <h3 className="text-lg font-bold mb-2 ">{point.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {point.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-purple-300 p-6 sm:p-8 rounded-xl shadow-xl flex flex-col md:flex-row items-center  justify-center">
          <div className="md:w-3/4">
            <h3 className="text-2xl font-bold mb-3 text-gray-800 text-center  ">
              <span className="mr-3">🥣</span> Pro Tip: Boost Hydration with Wet
              Food
            </h3>
            <p className="text-gray-600 text-center">
              If your pet resists drinking cold water, try mixing a small amount
              of low-sodium broth or warm water into their dry kibble, or switch
              to a wet food supplement. This is a passive way to get extra
              fluids into their system to combat dry indoor air.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HydrationNutritionCheckup;
