import style from "./style.module.scss";
import Item from "./Item";
import { ITask } from "../../types/ITask";

interface ListProps {
  tasks: ITask[];
  handleSelect: (task: ITask) => void;
}

function List({ tasks, handleSelect }: ListProps) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((task) => (
          <Item key={task.id} {...task} handleSelect={handleSelect} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
