import clsx from "clsx";
import styles from "./styles.module.scss";

const Section = ({ children, className, handleClick }) => {
  return (
    <div className={clsx(styles.container, className)} onClick={handleClick}>
      {children}
    </div>
  );
};

export default Section;
