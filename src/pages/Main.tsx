import React from "react";

import { Navbar } from "../components/Navbar/Navbar";
import { DayForecast } from "../components/DayForecast/DayForecast";
import { WeekForecast } from "../components/WeekForecast/WeekForecast";

export const Main = () => {
  return (
    <>
      <Navbar />
      <DayForecast />
      <WeekForecast />
    </>
  );
};
