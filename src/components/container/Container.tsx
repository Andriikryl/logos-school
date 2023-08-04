import React from "react";
import style from "./style.module.css";
export const Container = ({
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={style.container}>{children}</div>;
};
