import { Container } from "@/components/container";
import React from "react";
import MarImg from "public/map/map.jpg";
import Image from "next/image";
import { LocationGroup } from "@/components/locationGroup";
import { Contacts } from "@/components/contacts";
import style from "./style.module.css";
export function Map() {
  return (
    <section className={style.map}>
      <Container>
        <div className={style.flex__group}>
          <div className={style.box}>
            <div>
              <Image src={MarImg} width={640} height={435} alt="image" />
            </div>
            <LocationGroup />
          </div>
          <Contacts />
        </div>
      </Container>
    </section>
  );
}
