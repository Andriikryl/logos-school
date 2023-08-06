import { Container } from "@/components/container";
import React from "react";
import IMage from "public/faq/faq.png";
import Image from "next/image";
import { Button } from "@/components/button/Button";
import style from "./style.module.css";

export function Faq() {
  return (
    <section className={style.faq}>
      <Container className={style.faq__container}>
        <div className={style.faq__box}>
          <div className={style.faq__img}>
            <Image src={IMage} width={688} height={545} alt="image" />
          </div>
          <div className={style.faq__info}>
            <h3 className={style.faq__title}>
              У вас залишились запитання? Просто заповніть форму та відповімо
              вам на них!
            </h3>
            <Button>Задати питання</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
