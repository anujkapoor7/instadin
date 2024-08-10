import clsx from "clsx";
import styles from "./styles.module.scss";

const Section = ({ children, className }) => {
  return <div className={clsx(styles.container, className)}>{children}</div>;
};

export default Section;
