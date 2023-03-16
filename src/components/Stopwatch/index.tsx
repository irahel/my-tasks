import Button from "../Button";
import Timer from "./Timer";
import style from "./style.module.scss";

function index() {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro.</p>
      <div className={style.relogioWrapper}>
        <Timer />
      </div>
      <Button>Começar</Button>
    </div>
  );
}

export default index;
