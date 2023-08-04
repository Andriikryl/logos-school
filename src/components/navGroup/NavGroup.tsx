import React from "react";
import { Container } from "../container";
import style from "./style.module.css";
const data = [
  {
    id: 1,
    title: "м. Дніпро",
  },
  {
    id: 2,
    title: "м. Київ",
  },
  {
    id: 3,
    title: "Онлайн",
  },
];

export function NavGroup() {
  return (
    <div className={style.nav__group}>
      <Container>
        <div className={style.grid__group}>
          {data.map((item) => {
            return (
              <button className={style.btn} key={item.id}>
                {item.title}
              </button>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
