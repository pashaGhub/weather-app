import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

import Clouds from "../../assets/icons/Cloud-Icon.svg";
import Settings from "../../assets/icons/Settings-Icon.svg";

import s from "./Navbar.module.scss";

export const Navbar = () => {
  const { current, toggleSearch } = useContext(AppContext);

  return (
    <div className={s.container}>
      <a href="/">
        <img src={Clouds} alt="" className={s.clouds} />
      </a>
      <div className={s.title} onClick={() => toggleSearch()} tabIndex={0}>
        <div className={s.tag}>Weather Forecast</div>
        <div className={s.city}>{current ? current.city : ""}</div>
      </div>
      <a href="/">
        <img src={Settings} alt="" className={s.settings} />
      </a>
    </div>
  );
};
