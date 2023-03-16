import style from "./style.module.scss";

interface ButtonProps {
  children: string;
  type?: "submit" | "reset" | "button";
}

function index({ children, type = "button" }: ButtonProps) {
  return (
    <button type={type} className={style.botao}>
      {children}
    </button>
  );
}

export default index;
