import styles from "./styles.module.scss";
import Section from "../../../components/section";
import { POST_TYPES } from "@/utils/constants";
import Content from "./content";
import Button from "../../../components/button";
import Comments from "./comments";
import clsx from "clsx";
import Profile from "./profile";

const Post = (post) => {
  const {
    type,
    emoji,
    text,
    comments,
    userName,
    postedAt,
    edited = false,
    image,
  } = post;
  const isCreatePost = type === POST_TYPES.CREATE;

  return (
    <Section>
      {/* Post Header */}
      <div>
        {isCreatePost ? (
          <h3 className={styles.title}>Create post</h3>
        ) : (
          <Profile
            userName={userName}
            postedAt={postedAt}
            edited={edited}
            image={image}
          />
        )}
      </div>

      {/* Post Content */}
      <Content emoji={emoji} text={text} />

      {/* Post Footer */}
      <div>
        <div
          className={clsx(styles.flexLeft, {
            [styles.flexRight]: isCreatePost,
          })}
        >
          {isCreatePost ? (
            <Button>Post</Button>
          ) : (
            <Comments comments={comments} />
          )}
        </div>
      </div>
    </Section>
  );
};

export default Post;
