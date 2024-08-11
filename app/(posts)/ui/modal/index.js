import Login from "@/app/components/forms/login";
import styles from "./styles.module.scss";
import { useState } from "react";
import Register from "@/app/components/forms/register";

const Modal = ({ open, handleClose }) => {
  const [formType, setFormType] = useState("register");

  if (!open) {
    return null;
  }

  return (
    <div className={styles.container}>
      {formType === "login" ? (
        <Login
          withCloseButton
          handleClose={handleClose}
          changeFormType={() => setFormType("register")}
        />
      ) : (
        <Register
          withCloseButton
          handleClose={handleClose}
          changeFormType={() => setFormType("login")}
        />
      )}
    </div>
  );
};

export default Modal;
