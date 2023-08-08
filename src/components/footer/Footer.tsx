import React from "react";
import style from "./style.module.css";
import { Container } from "../container";
import { Button } from "../button/Button";
import Insta from "public/icons/Button/Icon/Instagram.svg";
import Face from "public/icons/Button/Icon/Facebook 2.svg";
import Logo from "public/logo/logos-school 1.svg";
import Image from "next/image";
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
const links = [
  {
    id: 1,
    link: "@ Logos School",
  },
  {
    id: 1,
    link: "Договір-оферта",
  },
  {
    id: 1,
    link: "Умови використання",
  },
  {
    id: 1,
    link: "Політика конфіденційності",
  },
  {
    id: 1,
    link: "Політика cookies",
  },
];
export function Footer() {
  return (
    <footer className={style.footer}>
      <Container>
        <div className={style.footer__top}>
          <a className={style.logo} href="#">
            <Image src={Logo} width={130} height={49} alt="logos-school" />
          </a>
          <ul className={style.nav__list}>
            {data.map((item) => {
              return (
                <li className={style.list__item} key={item.id}>
                  <a href="#" className={style.item__link}>
                    {item.link}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className={style.flex__group}>
            <Button>Записатися на урок</Button>
            <Image src={Insta} width={24} height={24} alt="instagram" />
            <Image src={Face} width={24} height={24} alt="facebook" />
          </div>
        </div>
        <div className={style.footer__bottom}>
          <ul className={style.bootom__list}>
            {links.map((item) => {
              return (
                <li className={style.bootom__item} key={item.id}>
                  <a className={style.bootom__link} href="#">
                    {item.link}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
