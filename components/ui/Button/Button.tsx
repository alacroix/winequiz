import cn from "classnames";
import s from "./Button.module.css";

const Button = ({ children, className = '', ...rest }) => (
  <button className={cn(s.root, className)} {...rest}>
    {children}
  </button>
);

export default Button;
