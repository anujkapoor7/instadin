import styles from "./styles.module.scss";
import Section from "./section";
import { POST_TYPES } from "@/utils/constants";
import Content from "./content";
import Button from "./button";

const Post = ({ type, emoji, text }) => {
  const isCreatePost = type === POST_TYPES.CREATE;

  return (
    <Section>
      <div>{isCreatePost && <h3 className={styles.title}>Create post</h3>}</div>
      <Content emoji={emoji} text={text} />
      <div>
        <div className={styles.flexRight}>
          {isCreatePost && <Button text="Post" />}
        </div>
      </div>
    </Section>
  );
};

export default Post;
