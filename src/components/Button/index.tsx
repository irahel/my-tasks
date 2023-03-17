import style from "./style.module.scss";

interface ButtonProps {
  children?: React.ReactNode;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
}

function index({ children, type = "button", onClick }: ButtonProps) {
  return (
    <button onClick={onClick} type={type} className={style.botao}>
      {children}
    </button>
  );
}

export default index;
