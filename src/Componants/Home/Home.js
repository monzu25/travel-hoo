import React from "react";
import DailyNews from "../DailyNews/DailyNews";
import Bottom from "./Bottom/Bottom";
import Slider from "./Slider/Slider";
import Testmonial from "./Testmonial/Testmonial";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <DailyNews></DailyNews>

      <Bottom></Bottom>
      <Testmonial></Testmonial>
    </div>
  );
};

export default Home;
