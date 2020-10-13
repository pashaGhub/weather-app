import React from "react";

import s from "./Blur.module.scss";

export const Blur = () => {
  return (
    <div className={s.blurImg}>
      <div className={s.blurEffect}></div>
    </div>
  );
};
