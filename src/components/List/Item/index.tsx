import React from "react";
import style from "./style.module.scss";

interface TaskProps {
  name: string;
  time: string;
}

function index({ name, time }: TaskProps) {
  return (
    <li key={name} className={style.item}>
      <h3>{name}</h3>
      <span>{time}</span>
    </li>
  );
}

export default index;
