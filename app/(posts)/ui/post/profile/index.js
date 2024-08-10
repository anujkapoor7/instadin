import Image from "next/image";
import styles from "./styles.module.scss";

const Profile = (user) => {
  const { userName, postedAt, edited = false, image } = user;

  return (
    <div className={styles.container}>
      <div className={styles.profileWrapper}>
        <div className={styles.imageWrapper}>
          <Image src={image} fill alt={`${userName} photo`} />
        </div>
        <div className={styles.text}>
          <h4>{userName}</h4>
          <p>
            {postedAt}
            {edited && " • Edited"}
          </p>
        </div>
      </div>
      <div className={styles.dotContainer}>
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
      </div>
    </div>
  );
};

export default Profile;
