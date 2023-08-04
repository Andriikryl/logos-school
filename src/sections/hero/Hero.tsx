import { Button } from "@/components/button/Button";
import { Container } from "@/components/container";
import React from "react";
import HeroImage from "public/hero/hero.png";
import Image from "next/image";
import style from "./style.module.css"
export function Hero() {
  return (
    <section className={style.hero}>
      <Container>
        <div className={style.hero__box}>
          <div className={style.hero__info}>
            <h1 className={style.hero__title}>Школа, де діти щасливі, а батьки задоволені</h1>
            <span className={style.hero__description}>
              Не гайте часу, відчуйте це самостійно на безкоштовному пробному
              дні!
            </span>
            <Button>Записатись на пробний день</Button>
          </div>
          <div className={style.hero__image}>
            <Image src={HeroImage} width={960} height={828} alt="hero bg" />
          </div>
        </div>
      </Container>
    </section>
  );
}
