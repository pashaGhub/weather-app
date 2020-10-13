import Sun from "../assets/icons/Sun.svg";
import Cloudy from "../assets/icons/Cloudy.svg";
import CloudSun from "../assets/icons/Cloud-sun.svg";
import CloudRain from "../assets/icons/Cloud-rain.svg";

interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export const setWeatherIcon = (weather: IWeather) => {
  switch (weather.main) {
    case "Clouds":
      if (weather.description === "broken clouds") {
        return CloudSun;
      }
      return Cloudy;
    case "Rain":
      return CloudRain;
    case "Clear":
      return Sun;
    default:
      return Sun;
  }
};
