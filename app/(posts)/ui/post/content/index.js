import styles from "./styles.module.scss";

const Content = ({ emoji, text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.emojiWrapper}>{emoji}</div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default Content;
