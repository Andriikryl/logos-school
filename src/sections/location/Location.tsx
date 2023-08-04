import React from "react";
import style from "./style.module.css";
import { Container } from "@/components/container";
import Image from "next/image";
import ImagrLoc from "public/location/loaction.jpg";

const data = [
  {
    id: 1,
    number: "+38 067 00 966 00",
    address: "Центр міста, вул. Ламана, 19",
    classNamber: "9 - 10 класи",
  },
  {
    id: 2,
    number: "+38 050 362 69 62",
    address: "вул. Паторжинського, 3",
    classNamber: "1 - 4 класи",
  },
  {
    id: 3,
    number: "+38 067 634 68 70",
    address: "Тополя-1, вул. Запорізьке шосе, 60",
    classNamber: "1 - 11 класи",
  },
  {
    id: 4,
    number: "+38 097 534 34 32",
    address: "Перемога-6, пров. Штабний, 4",
    classNamber: "1 - 11 класи",
  },
  {
    id: 5,
    number: "+38 067 245 49 98",
    address: "Лівий берег, Слобожанський, 50",
    classNamber: "1 - 11 класи",
  },
  {
    id: 6,
    number: "+38 (050) 363 19 65",
    address: "вул. Робоча, 148",
    classNamber: "1 - 11 класи",
  },
];

export function Location() {
  return (
    <section className={style.location}>
      <Container>
        <h3 className={style.location__title}>
          <span>Дніпро - це батьківщина Logos School.</span> Тут ми маємо аж 7
          філій де кожен житель міста зможе знайти зручну локацію для себе
        </h3>
        <div className={style.flex__group}>
          <div className={style.prive__box}>
            <div className={style.box__image}>
              <Image src={ImagrLoc} width={640} height={435} alt="image" />
            </div>
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
            <button className={style.prive__btn}>
              Записатися на екскурсію
            </button>
          </div>
          <ul className={style.list}>
            {data.map((item) => {
              return (
                <li key={item.id} className={style.list__item}>
                  <address>
                    <span className={style.address}>{item.address}</span>
                    <a className={style.fhone} href="#">
                      {item.number}
                    </a>
                  </address>
                  <span className={style.item__calss}>{item.classNamber}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
