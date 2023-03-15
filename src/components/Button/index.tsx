import style from "./style.module.scss";

interface ButtonProps {
  children: string;
}

function index({ children }: ButtonProps) {
  return <button className={style.botao}>{children}</button>;
}

export default index;
