import { LuMessageCircleMore } from "react-icons/lu";
import { IoCall } from "react-icons/io5";
import styles from "./Button.module.css";

const Button = ({ isOutline, icon, text, ...rest }) => {
  return (
    <button
      {...rest}
      className={isOutline ? styles.outline_btn : styles.primary_btn}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
