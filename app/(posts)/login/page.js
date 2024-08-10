import styles from "./styles.module.scss";
import { Suspense } from "react";
import Logo from "@/public/pages/login/logo.svg";
import Image from "next/image";
import Login from "@/app/components/forms/login";

export default function Page() {
  return (
    <div className={styles.container}>
      <Image src={Logo} alt="Instadin logo" width={40} height={40} />
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    </div>
  );
}
