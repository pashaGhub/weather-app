import React from "react";

import Signal from "../../assets/icons/iconmonstr-wireless-1.svg";
import Battery from "../../assets/icons/battery-status-symbol.svg";

import { formatTime12h } from "../../services/utils";

import s from "./Header.module.scss";

export const Header = () => {
  const time = formatTime12h();

  return (
    <header>
      <div className={s.left}>
        <div className={s.carrier}>Carrier</div>
        <img src={Signal} alt="" className={s.signal} />
      </div>
      <div className={s.time}>{time}</div>
      <img src={Battery} alt="" className={s.battery} />
    </header>
  );
};
