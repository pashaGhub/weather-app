import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

import { Blur } from "../Blur/Blur";

import { setWeatherIcon } from "../../services/weatherUtils";

import s from "./DayForecast.module.scss";

export const DayForecast = () => {
  const { current, week } = useContext(AppContext);
  let weatherIcon;
  if (week.length) {
    weatherIcon = setWeatherIcon(week[0].weather[0]);
  }
  return (
    <div className={s.container}>
      <div className={s.header}>
        <div className={s.title}>day forecast</div>
        <div className={s.tempRange}>
          <span>{week.length && Math.round(week[0].temp.max)}</span>
          <span>{week.length && Math.round(week[0].temp.min)}</span>
        </div>
      </div>
      <div className={s.forecast}>
        <Blur />
        <div className={s.info}>
          <div className={s.degree}>{`${current.temp}°`}</div>
          <div className={s.city}>{current.city}</div>
          <div className={s.weather}>
            {week.length && week[0].weather[0].main}
            <img src={weatherIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
