import React from "react";
import style from "./style.module.css";

export function LocationGroup() {
  return (
    <div className={style.box}>
      <div className={style.box__info}>
        <address>
          <span className={style.address}>
            Центр міста, вул. Європейська, 20 а
          </span>
          <a className={style.fhone} href="tel:+38 067 00 966 00">
            +38 067 00 966 00
          </a>
        </address>
        <span className={style.class__number}>1 - 8 класси</span>
      </div>
      <button className={style.prive__btn}>Записатися на екскурсію</button>
    </div>
  );
}
