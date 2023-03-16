import Button from "../Button";
import Timer from "./Timer";
import style from "./style.module.scss";
import { ITask } from "../../types/ITask";
import { timeToSeconds } from "../../common/time";
import { useState, useEffect } from "react";

interface StopwatchProps {
  selected: ITask | undefined;
}

function Stopwatch({ selected }: StopwatchProps) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro.</p>
      <div className={style.relogioWrapper}>
        <Timer time={time} />
      </div>
      <Button>Começar</Button>
    </div>
  );
}

export default Stopwatch;
