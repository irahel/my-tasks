import Button from "../Button";
import Timer from "./Timer";
import style from "./style.module.scss";
import { ITask } from "../../types/ITask";
import { timeToSeconds } from "../../common/time";
import { useState, useEffect } from "react";

interface StopwatchProps {
  selected: ITask | undefined;
  handleEndTask: () => void;
}

function Stopwatch({ selected, handleEndTask }: StopwatchProps) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  function handleRegress(count: number = 0) {
    setTimeout(() => {
      if (count > 0) {
        setTime(count - 1);
        return handleRegress(count - 1);
      }
      handleEndTask();
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro.</p>
      <div className={style.relogioWrapper}>
        <Timer time={time} />
      </div>
      <Button onClick={() => handleRegress(time)}>Começar</Button>
    </div>
  );
}

export default Stopwatch;
