import React from "react";
import style from "./style.module.css";
import { Container } from "@/components/container";

const data = [
  {
    id: 1,
    title: "Заявка",
    description: "Ви залишаєте заявку на нашому сайті",
  },
  {
    id: 2,
    title: "Дзвінок",
    description: "Наш спеціаліст передзвонює вам",
  },
  {
    id: 3,
    title: "Візит в школу",
    description: "Ви можете відвідати нашу школу у Дніпрі",
  },
  {
    id: 4,
    title: "Пробний день",
    description: "Пробний день якщо потрібно",
  },
  {
    id: 5,
    title: "Оплата",
    description: "Оплата зручним для вас способом",
  },
];

export function Entry() {
  return (
    <section className={style.entry}>
      <Container>
        <div className={style.entry__box}>
          <div className={style.entry__prev}>
            <h3 className={style.entry__title}>
              Для вступу до школи Logos School треба:
            </h3>
            <p className={style.entry__description}>
              Програма складається не просто враховуючи який сайт закінчив
              студент. А враховуючи його знання, бо останні 4 роки нестабільного
              навчання призвели.
            </p>
          </div>
          <ul className={style.entry__list}>
            {data.map((item) => {
              return (
                <li className={style.list__item} key={item.id}>
                  <div className={style.item__box}>
                    <h4 className={style.item__title}>{item.title}</h4>
                    <span className={style.item__description}>
                      {item.description}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
