"use client";

import styles from "./styles.module.scss";
import Section from "../../../components/section";
import { POST_TYPES } from "@/utils/constants";
import Content from "./content";
import Button from "../../../components/button";
import Comments from "./comments";
import clsx from "clsx";
import Profile from "./profile";
import { useState } from "react";
import Modal from "../modal";

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
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const isCreatePost = type === POST_TYPES.CREATE;

  return (
    <Section
      handleClick={() => setOpenLoginModal(true)}
      className={styles.section}
    >
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
      {openLoginModal && (
        <Modal
          open={openLoginModal}
          handleClose={() => setOpenLoginModal(false)}
        />
      )}
    </Section>
  );
};

export default Post;
