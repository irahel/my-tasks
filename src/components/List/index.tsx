import style from "./style.module.scss";
import Item from "./Item";
import { useState } from "react";

function List() {
  const [tasks, setTasks] = useState([
    {
      name: "React",
      time: "02:00:00",
    },
    {
      name: "Javascript",
      time: "01:00:00",
    },
    {
      name: "Typescript",
      time: "03:00:00",
    },
  ]);

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
