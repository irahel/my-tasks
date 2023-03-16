import style from "./style.module.scss";
import Item from "./Item";
import { ITask } from "../../types/ITask";

interface ListProps {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

function List({ tasks, setTasks }: ListProps) {
  return (
    <aside className={style.listaTarefas}>
      <h2
        onClick={() => {
          setTasks([
            ...tasks,
            {
              name: "coe",
              time: "02:00:00",
            },
          ]);
        }}
      >
        Estudos do dia
      </h2>
      <ul>
        {tasks.map((task) => (
          <Item name={task.name} time={task.time} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
