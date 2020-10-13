import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

import { Blur } from "../Blur/Blur";

import { setWeatherIcon } from "../../services/weatherUtils";
import { formatDayTag } from "../../services/utils";

import s from "./WeekForecast.module.scss";

export const WeekForecast = () => {
  const { week } = useContext(AppContext);

  //remove current day
  const filteredWeek = week.length
    ? week.filter((item: any, ind: number) => ind > 0)
    : [];

  return (
    <div className={s.container}>
      <div className={s.header}>
        <div className={s.title}>week forecast</div>
      </div>
      <div className={s.forecast}>
        <Blur />
        {filteredWeek.length &&
          filteredWeek.map((day: any) => (
            <div className={s.weekDay} key={day.dt}>
              <div className={s.dayTag}>{formatDayTag(day.dt)}</div>
              <div className={s.weatherIcon}>
                <img src={setWeatherIcon(day.weather[0])} alt="" />
              </div>
              <div className={s.tempRange}>
                <span>{Math.round(day.temp.max)}</span>
                <span>{Math.round(day.temp.min)}</span>
              </div>
              <div className={s.diagram}>
                <div
                  className={`${s.higher} ${s.diagramItem}`}
                  style={{ height: `${(Math.round(day.temp.max) / 2) * 10}px` }}
                ></div>
                <div
                  className={`${s.lower} ${s.diagramItem}`}
                  style={{ height: `${(Math.round(day.temp.min) / 2) * 10}px` }}
                ></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
