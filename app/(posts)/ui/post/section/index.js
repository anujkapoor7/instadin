import styles from "./styles.module.scss";

const Section = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Section;
