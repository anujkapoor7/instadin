"use client";

import { Suspense, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Posts from "./ui/posts";
import { useRouter } from "next/navigation";

export default function Home() {
  const [user, setUser] = useState(null);
  const { replace } = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      replace("/login");
    }
    setUser(user);
  }, []);

  if (!user) {
    return null;
  }

  return (
    <main className={styles.container}>
      <div className={styles.heading}>
        <h2>Hello Jane</h2>
        <p>
          How are you doing today? Would you like to share something with the
          <br />
          community 🤗
        </p>
        <Suspense>
          <Posts />
        </Suspense>
      </div>
    </main>
  );
}
