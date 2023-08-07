"use client";

import { Container } from "@/components/container";
import React, { useState } from "react";
import ProgImage from "public/program/Photo/Photo.jpg";
import syle from "./style.module.css";
import Image from "next/image";
import ArrowL from "public/program/Photo/Vector 28.svg";
import ArrowR from "public/program/Photo/Photo/Vector 28.svg";

const data = [
  {
    textOne:
      "в міжнародній системі освіти класичний садочок закінчується в 4 роки, а вже з 5 років діти йдуть навчатися за програмою PreSchool! Наша програма PreSchool розрахована на дітей 5-6 років, які вже переросли формат дитячого садка, але в школу ще не йдуть.",
    textTwo:
      "в першій половині дня проходять всі основні інтелектуальні заняття: математика, грамота, читання, навколишній світ, експерименти, English, Science і Math.",
    textThree:
      " в другій половині дня всі додаткові курси та студії: мнемоніка, креатив+, Speaking club, літературний клуб, театральна студія й айкідо або хореографія на вибір.",
  },
  {
    textOne:
      "в міжнародній системі освіти класичний садочок закінчується в 4 роки, а вже з 5 років діти йдуть навчатися за програмою PreSchool!ь.",
    textTwo: "в першій половині дня , Science і Math.",
    textThree:
      " в другій половині дня всі додаткові курси та студії: мнемоніка, креатив+, Speaking club, літературний клуб, театральна студія й айкідо або хореографія на вибір.",
  },
  {
    textOne:
      "в міжнародній системі освіти класичний садочок закінчується в 4 роки, а вже з 5 років діти йдуть навчатися за програмою PreSchool! Наша програма PreSchool розрахована на дітей 5-6 років, які вже переросли формат дитячого садка, але в школу ще не йдуть.",
    textTwo:
      "в першій половині дня проходять всі основні інтелектуальні заняття: математика, грамота, читання, навколишній світ, експерименти, English, Science і Math.",
    textThree:
      " в другій половині дня всі додаткові курси та студії: мнемоніка, креатив+, Speaking club, літературний клуб, театральна студія й айкідо або хореографія на вибір.",
  },
  {
    textOne:
      "в міжнародній системі освіти класичний садочок закінчується в 4 роки, а вже з 5 років діти йдуть навчатися за програмою PreSchool! Наша програма PreSchool розрахована на дітей 5-6 років, які вже переросли формат дитячого садка, але в школу ще не йдуть.",
    textTwo:
      "в першій половині дня проходять всі основні інтелектуальні заняття: математика, грамота, читання, навколишній світ, експерименти, English, Science і Math.",
    textThree:
      " в другій половині дня всі додаткові курси та студії: мнемоніка, креатив+, Speaking club, літературний клуб, театральна студія й айкідо або хореографія на вибір.",
  },
  {
    textOne:
      "в міжнародній системі освіти класичний садочок закінчується в 4 роки, а вже з 5 років діти йдуть навчатися за програмою PreSchool! Наша програма PreSchool розрахована на дітей 5-6 років, які вже переросли формат дитячого садка, але в школу ще не йдуть.",
    textTwo:
      "в першій половині дня проходять всі основні інтелектуальні заняття: математика, грамота, читання, навколишній світ, експерименти, English, Science і Math.",
    textThree:
      " в другій половині дня всі додаткові курси та студії: мнемоніка, креатив+, Speaking club, літературний клуб, театральна студія й айкідо або хореографія на вибір.",
  },
];

export function Program() {
  const [index, setIndex] = useState(0);
  let list = data[index];

  function handeIncrimentlClick() {
    if (index < data.length - 1) {
      setIndex(index + 1);
    }
  }

  function handelDecrimentClick() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  return (
    <section className={syle.program}>
      <Container>
        <div className={syle.flex__group}>
          <h3 className={syle.program__title}>
            Для кого наша школа Logos School
          </h3>
          <p className={syle.program__description}>
            Програма складається не просто враховуючи який сайт закінчив
            студент. А враховуючи його знання, бо останні 4 роки нестабільного
            навчання призвели.
          </p>
        </div>
        <div className={syle.program__plan}>
          <div>
            <Image src={ProgImage} width={750} height={726} alt="image" />
          </div>
          <div className={syle.box}>
            <h4 className={syle.plan__title}>Preschool ( 0 клас)</h4>
            <ul className={syle.list}>
              <li className={syle.item}>{list.textOne}</li>
              <li className={syle.item}>{list.textTwo}</li>
              <li className={syle.item}>{list.textThree}</li>
            </ul>
            <div className={syle.control__group}>
              <button className={syle.btn} onClick={handelDecrimentClick}>
                <Image src={ArrowL} width={7} height={14} alt="next" />
              </button>
              <span className={syle.amount__list}>
                {index + 1} / {data.length}
              </span>
              <button className={syle.btn} onClick={handeIncrimentlClick}>
                <Image src={ArrowR} width={7} height={14} alt="next" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
