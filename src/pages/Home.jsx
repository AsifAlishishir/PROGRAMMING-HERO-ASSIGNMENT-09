import React, { useContext } from "react";
import Slider from "../components/Slider";
import PopularSection from "../components/PopularSection";
import MeetOurVets from "../components/MeetOurVets";
import WinterCareTips from "../components/WinterCareTips";
import HydrationNutritionCheckup from "../components/HydrationNutritionCheckup";
import { AuthContext } from "../Provider/AuthProvider";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
  const { loading } = useContext(AuthContext);

  if (loading) return <LoadingSpinner />;

  return (
    <div>
      <Slider />
      <PopularSection />
      <MeetOurVets />
      <WinterCareTips />
      <HydrationNutritionCheckup />
    </div>
  );
};

export default Home;
