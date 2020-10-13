import React, { createContext, useState } from "react";

interface ICoords {
  lat: number;
  lon: number;
}

interface ICurrent {
  temp: number;
  weather: string;
  city: string;
}

export const AppContext = createContext<any>(Boolean);

export function ContextProvider(props: any): JSX.Element {
  const [search, setSearch] = useState<boolean>(false);
  const [current, setCurrent] = useState<ICurrent | null>({
    temp: 0,
    weather: "",
    city: "",
  });
  const [week, setWeek] = useState<any>([]);
  const [coords, setCoords] = useState<ICoords>({
    lat: 54.689159,
    lon: 25.2798,
  });
  const [loader, setLoader] = useState<boolean>(false);

  //search toggle functionality
  const toggleSearch = () => {
    setSearch((currentState: boolean) => !currentState);
  };

  return (
    <AppContext.Provider
      value={{
        toggleSearch,
        setSearch,
        search,
        coords,
        setCoords,
        loader,
        setLoader,
        current,
        setCurrent,
        week,
        setWeek,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
