import React, { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import Eye from "@/public/components/form/eye.svg";
import EyeOff from "@/public/components/form/eye-off.png";
import clsx from "clsx";

const Input = (options) => {
  const {
    label,
    type,
    placeholder,
    style,
    withForgotPassword,
    error,
    handleChange,
    name,
  } = options;
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className={styles.container} style={style}>
      <div className={styles.labelWrapper}>
        <label>{label}</label>
        {withForgotPassword && <p>Forgot password?</p>}
      </div>
      <div className={styles.inputWrapper}>
        <input
          type={isPasswordVisible ? "text" : type}
          placeholder={placeholder}
          autoComplete="off"
          error={error}
          className={clsx({ [styles.error]: error })}
          onChange={handleChange}
          name={name}
        />
        {type === "password" && (
          <Image
            src={isPasswordVisible ? EyeOff : Eye}
            alt="eye"
            width={20}
            height={20}
            className={styles.icon}
            onClick={togglePasswordVisibility}
          />
        )}
      </div>
      {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
};

export default Input;
