import { Container } from "@/components/container";
import React from "react";
import style from "./style.module.css";
import { VideoPlayer } from "@/components/videoPlayer";

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
      </Container>
    </section>
  );
}
