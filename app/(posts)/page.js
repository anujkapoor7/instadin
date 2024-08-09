import styles from "./styles.module.scss";
import Posts from "./ui/posts";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.heading}>
        <h2>Hello Jane</h2>
        <p>
          How are you doing today? Would you like to share something with the
          <br />
          community 🤗
        </p>
        <Posts />
      </div>
    </main>
  );
}
