import { Container } from "@/components/container";
import React from "react";
import style from "./style.module.css";
import TestImg from "public/test/test.png";
import Image from "next/image";
import { Button } from "@/components/button/Button";
export function Test() {
  return (
    <section className={style.test}>
      <Container className={style.test__container}>
        <div className={style.test__box}>
          <div>
            <Image src={TestImg} width={518} height={445} alt="image" />
          </div>
          <div className={style.test__info}>
            <h3 className={style.test_title}>
              Проведіть незалежну і об’єктивну оцінку рівня знань вашої дитини
            </h3>
            <Button>Пройти оцінювання</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
