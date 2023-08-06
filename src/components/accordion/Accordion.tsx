"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import style from "./style.module.css";
import Arrow from "public/icons/Titel/Vector 28.svg";
import Image from "next/image";
type AccordionProps = {
  title: string;
  description: string;
};

export function Accordion({ title, description }: AccordionProps) {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <li className={style.list__item}>
      <div
        className={style.item__nav}
        onClick={() => setIsToggle((prevState) => !prevState)}
      >
        <h4 className={style.item__title}>{title}</h4>
        <button className={style.item__button}>
          <Image src={Arrow} width={7} height={14} alt="arrwo down" />
        </button>
      </div>
      <AnimatePresence>
        {isToggle && (
          <motion.div
            style={{ overflow: "hidden" }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <p className={style.item__description}>{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
