import style from "./style.module.scss";

interface TimerProps {
  time: number | undefined;
}

function Timer({ time = 0 }: TimerProps) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minutesDez, minutesUnity] = String(minutes).padStart(2, "0");
  const [secondsDez, secondsUnity] = String(seconds).padStart(2, "0");

  return (
    <>
      <span className={style.relogioNumero}>{minutesDez}</span>
      <span className={style.relogioNumero}>{minutesUnity}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{secondsDez}</span>
      <span className={style.relogioNumero}>{secondsUnity}</span>
    </>
  );
}

export default Timer;
