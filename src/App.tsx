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

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} handleSelect={handleSelect} />
      <Stopwatch />
    </div>
  );
}

export default App;
