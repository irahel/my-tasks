import Button from "../Button";
import style from "./style.module.scss";
import { useState } from "react";
import { ITask } from "../../types/ITask";
import { v4 as uuidv4 } from "uuid";

interface FormProps {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

function Form({ setTasks }: FormProps) {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("00:00:00");

  function resetState() {
    setTask("");
    setTime("00:00:00");
  }

  function handleSaveTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTasks((old) => [
      ...old,
      {
        name: task,
        time,
        selected: false,
        completed: false,
        id: uuidv4(),
      },
    ]);
    resetState();
  }

  return (
    <form className={style.novaTarefa} onSubmit={handleSaveTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Adicione uma nova task:</label>
        <input
          type="text"
          name="task"
          id="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="O que você quer estudar?"
          required
        />
      </div>

      <div className={style.inputContainer}>
        <label htmlFor="time">Tempo:</label>
        <input
          type="time"
          step="1"
          name="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          id="time"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button type="submit">Adicionar</Button>
    </form>
  );
}

export default Form;
