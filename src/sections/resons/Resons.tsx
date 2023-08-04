import { Container } from "@/components/container";
import React from "react";
import style from "./style.module.css";
import { VideoPlayer } from "@/components/videoPlayer";

const data = [
  {
    id: 1,
    title: "1. Поглиблена англійська",
    description:
      "Вивченню англійської приділяється особлива увага, адже сьогодні знання мови є необхідністю.",
  },
  {
    id: 2,
    title: "2. Вибір часу на предмет",
    description:
      "Ми можемо вибрати будь-яку кількість годин будь-якого предмета і зробити його таким чином основним",
  },
  {
    id: 3,
    title: "3. Маленькі класи",
    description:
      "Маленькі класи на 5-8 учнів дозволяють працювати персоналізовано з кожним учнем та приділяти достатньо уваги",
  },
];

export function Resons() {
  return (
    <section className={style.resons}>
      <Container>
        <div className={style.flex__group}>
          <h3 className={style.resons__title}>
            Чому обирають освітню платформу Logos School:
          </h3>
          <p className={style.resons__description}>
            Школа має власну ефективну методику освіти школярів, яка полягає в
            розумінні мотивації як рушійної сили в освіті дитини. Використовуючи
            цю особливість дитячої психіки, можна досягти вражаючого прогресу.
          </p>
        </div>
        <VideoPlayer />
        <ul className={style.list}>
          {data.map((item) => {
            return (
              <li key={item.id} className={style.list__item}>
                <h4 className={style.item__title}>{item.title}</h4>
                <p className={style.item__description}>{item.description}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
