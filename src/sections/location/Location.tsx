import React from "react";
import style from "./style.module.css";
import { Container } from "@/components/container";
import Image from "next/image";
import ImagrLoc from "public/location/loaction.jpg";
import { Contacts } from "@/components/contacts";
import { LocationGroup } from "@/components/locationGroup";

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
            <LocationGroup />
          </div>
          <Contacts />
        </div>
      </Container>
    </section>
  );
}
