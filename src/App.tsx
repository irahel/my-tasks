import Form from "./components/Form";
import List from "./components/List";
import Stopwatch from "./components/Stopwatch";
import style from "./App.module.scss";
import { useState } from "react";
import { ITask } from "./types/ITask";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} setTasks={setTasks} />
      <Stopwatch />
    </div>
  );
}

export default App;
