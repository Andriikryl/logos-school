import React from "react";
import style from "./style.module.css";
import Sound from "public/resons/controls/Volume.svg";
import Play from "public/resons/controls/Polygon 7.svg";
import Image from "next/image";

export function VideoPlayer() {
  return (
    <div className={style.media}>
      <div className={style.madia__controls}>
        <button className={style.btn__sound}>
          <Image src={Sound} width={24} height={24} alt="sound" />
        </button>
        <button className={style.btn__play}>
          <Image src={Play} width={13} height={14} alt="play" />
          <span className={style.play__time}>0:23</span>
        </button>
      </div>
    </div>
  );
}
