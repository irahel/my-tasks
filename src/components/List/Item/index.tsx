import { ITask } from "../../../types/ITask";
import style from "./style.module.scss";

function index({ name, time }: ITask) {
  return (
    <li key={name} className={style.item}>
      <h3>{name}</h3>
      <span>{time}</span>
    </li>
  );
}

export default index;
