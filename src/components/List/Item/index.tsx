import { ITask } from "../../../types/ITask";
import style from "./style.module.scss";

interface ItemProps extends ITask {
  handleSelect: (task: ITask) => void;
}

function index({
  name,
  time,
  selected,
  completed,
  id,
  handleSelect,
}: ItemProps) {
  return (
    <li
      key={name}
      className={`${style.item} ${selected && style.itemSelecionado} ${
        completed && style.itemCompletado
      }`}
      onClick={() =>
        !completed && handleSelect({ name, time, selected, completed, id })
      }
    >
      <h3>{name}</h3>
      <span>{time}</span>
      {completed && (
        <span className={style.concluido} aria-label="Tarefa Completada"></span>
      )}
    </li>
  );
}

export default index;
