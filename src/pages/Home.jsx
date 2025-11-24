import React from "react";
import Slider from "../components/Slider";
import PopularSection from "../components/PopularSection";
import MeetOurVets from "../components/MeetOurVets";
import WinterCareTips from "../components/WinterCareTips";

const Home = () => {
  return (
    <div>
      <Slider />
      <PopularSection />
        <MeetOurVets/>
      <div className="">
      <WinterCareTips/>
      </div>
    </div>
  );
};

export default Home;
