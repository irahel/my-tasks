import Form from "./components/Form";
import List from "./components/List";
import Stopwatch from "./components/Stopwatch";
import style from "./App.module.scss";
import { useState } from "react";
import { ITask } from "./types/ITask";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  function handleSelect(task: ITask) {
    setSelected(task);
    setTasks((oldTasks) =>
      oldTasks.map((oldTask) => ({
        ...oldTask,
        selected: oldTask.id === task.id ? true : false,
      }))
    );
  }

  function handleEndTask() {
    if (selected) {
      setSelected(undefined);
      setTasks((oldTasks) =>
        oldTasks.map((oldTask) => {
          if (oldTask.id === selected.id) {
            return {
              ...oldTask,
              selected: false,
              completed: true,
            };
          }
          return oldTask;
        })
      );
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} handleSelect={handleSelect} />
      <Stopwatch selected={selected} handleEndTask={handleEndTask} />
    </div>
  );
}

export default App;
