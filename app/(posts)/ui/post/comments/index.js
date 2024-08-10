import Image from "next/image";
import styles from "./styles.module.scss";
import MessageIcon from "@/public/pages/posts/message.svg";

const Comments = ({ comments }) => {
  return (
    <div className={styles.container}>
      <Image src={MessageIcon} width={20} height={20} />
      <div className={styles.text}>{comments}&nbsp;Comments</div>
    </div>
  );
};

export default Comments;
