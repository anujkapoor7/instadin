import clsx from "clsx";
import styles from "./styles.module.scss";

const Button = ({ className, children }) => {
  return (
    <button className={clsx(styles.container, className)}>{children}</button>
  );
};

export default Button;
