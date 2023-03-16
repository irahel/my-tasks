import Form from "./components/Form";
import List from "./components/List";
import Stopwatch from "./components/Stopwatch";
import style from "./App.module.scss";
import { useState } from "react";

function App() {
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
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} setTasks={setTasks} />
      <Stopwatch />
    </div>
  );
}

export default App;
