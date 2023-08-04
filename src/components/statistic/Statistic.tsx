import React from "react";
import { Container } from "../container";
import style from "./style.module.css";
import Image from "next/image";

const data = [
  {
    id: 1,
    src: "/statistic/Home.svg",
    width: 40,
    heigth: 40,
    alt: "home",
    amount: 25,
    title: "Центрів репетиторів",
  },
  {
    id: 2,
    src: "/statistic/Lightning.svg",
    width: 40,
    heigth: 40,
    alt: "lightning",
    amount: 300,
    title: "Сильних викладачів",
  },
  {
    id: 3,
    src: "/statistic/Crown.svg",
    width: 40,
    heigth: 40,
    alt: "crown",
    amount: 26,
    title: "Років на ринку",
  },
  {
    id: 4,
    src: "/statistic/Education.svg",
    width: 40,
    heigth: 40,
    alt: "education",
    amount: 25.0,
    title: "Випускників школи",
  },
];

export function Statistic() {
  return (
    <div className={style.statistic}>
      <Container>
        <ul className={style.statistic__list}>
          {data.map((item) => {
            return (
              <li key={item.id} className={style.list__item}>
                <div className={style.flex__grup}>
                  <Image
                    src={item.src}
                    width={item.width}
                    height={item.heigth}
                    alt={item.alt}
                  />
                  <span className={style.item__amount}>{item.amount}</span>
                </div>
                <h3 className={style.item__title}>{item.title}</h3>
              </li>
            );
          })}
        </ul>
      </Container>
    </div>
  );
}
