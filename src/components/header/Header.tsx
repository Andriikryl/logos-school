import React from "react";
import { Container } from "../container";
import Image from "next/image";
import Logo from "public/logo/logos-school 1.svg";
import style from "./style.module.css";
import { Button } from "../button/Button";

const data = [
  {
    id: 1,
    link: "Про школу",
  },
  {
    id: 2,
    link: "Школи",
  },
  {
    id: 3,
    link: "Переваги",
  },
  {
    id: 4,
    link: "Відгуки",
  },
  {
    id: 5,
    link: "Про нас",
  },
  {
    id: 6,
    link: "Контакти",
  },
];

export function Header() {
  return (
    <header className={style.header}>
      <Container>
        <div className={style.header__box}>
          <a href="#">
            <Image src={Logo} width={130} height={49} alt="logos school" />
          </a>
          <nav className={style.nav}>
            <ul className={style.nav__list}>
              {data.map((item) => {
                return (
                  <li key={item.id} className={style.list__item}>
                    <a className={style.item__link} href="#">
                      {item.link}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <Button>Записатися на урок</Button>
        </div>
      </Container>
    </header>
  );
}
