import React, { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";

import { Header } from "./components/Header/Header";
import { Search } from "./components/Search/Search";
import { Main } from "./pages/Main";

import { getCityName } from "./services/utils";

import "./App.scss";

const App = () => {
  const {
    coords,
    setCoords,
    loader,
    setLoader,
    setCurrent,
    setWeek,
  } = useContext(AppContext);
  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((data) => {
          setCoords({ lat: data.coords.latitude, lon: data.coords.longitude });
        });
      }
    };
    getLocation();
  }, [setCoords]);

  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=minutely,hourly&units=metric&appid=6d89e3a99b1d08d50633afc7b5991f94`
      );

      const data = await response.json();

      const currentDay = data.current;
      setCurrent({
        temp: Math.round(currentDay.temp),
        weather: currentDay.weather[0].main,
        city: getCityName(data.timezone),
      });

      setWeek(data.daily);
      setLoader(false);
    };
    fetchData();
  }, [coords, setLoader, setCurrent, setWeek]);

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Search />
        {loader ? <div>loading...</div> : <Main />}
      </div>
    </div>
  );
};

export default App;
