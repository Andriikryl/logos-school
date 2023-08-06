"use client";

import React, { useEffect } from "react";
import style from "./style.module.css";
import { motion, useAnimation } from "framer-motion";

export function Block() {
  const controls = useAnimation();
  useEffect(() => {
    document.body.classList.add("noScroll");
    controls
      .start({
        y: -1000,
      })
      .then(() => {
        document.body.classList.remove("noScroll");
      });
  }, [controls]);
  return (
    <div className={style.box}>
      <motion.div
        className={style.inner__box}
        initial={{ y: 0 }}
        animate={controls}
        transition={{ duration: 0.8 }}
      ></motion.div>
      <motion.div
        className={style.inner__box}
        initial={{ y: 0 }}
        animate={controls}
        transition={{ duration: 0.8, delay: 0.1 }}
      ></motion.div>
      <motion.div
        className={style.inner__box}
        initial={{ y: 0 }}
        animate={controls}
        transition={{ duration: 0.8, delay: 0.2 }}
      ></motion.div>
    </div>
  );
}
