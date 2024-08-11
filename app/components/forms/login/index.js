"use client";

import { useEffect, useReducer, useState } from "react";
import Section from "../../section";
import Cross from "@/public/components/form/cross.svg";
import styles from "../styles.module.scss";
import Image from "next/image";
import Input from "../input";
import Button from "@/app/components/button";
import { useRouter } from "next/navigation";
import { formReducer, initialState } from "./reducer";

const Login = ({ withCloseButton, handleClose, changeFormType = null }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { replace } = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    let valid = true;

    if (!state.email) {
      valid = false;
      dispatch({
        type: "SET_ERROR",
        field: "email",
        error:
          "Email or username is required, please enter your email or username",
      });
    }

    if (!state.password) {
      valid = false;
      dispatch({
        type: "SET_ERROR",
        field: "password",
        error: "Password is required, please enter your password",
      });
    }

    if (valid) {
      if (handleClose) {
        handleClose();
        return;
      }

      replace("/");
    }
  };

  const handleChange = (e) => {
    dispatch({
      type: "SET_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  function handleNavigate() {
    if (changeFormType) {
      changeFormType();
      return;
    }
    replace("/register");
  }

  return (
    <Section className={styles.formWrapper}>
      {/* Close button */}
      {withCloseButton && (
        <div
          className={styles.crossWrapper}
          onClick={(e) => {
            e.stopPropagation();
            handleClose();
          }}
        >
          <Image src={Cross} alt="cross" width={16} height={16} />
        </div>
      )}

      {/* Headings */}
      <div className={styles.title}>WELCOME BACK</div>
      <div className={styles.description}>Log into your account</div>

      {/* Form */}
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          label="Email or Username"
          type="text"
          name="email"
          placeholder="Enter your email or username"
          value={state.email}
          handleChange={handleChange}
          error={state.errors.email}
        />
        <Input
          withForgotPassword
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          style={{ marginTop: "1rem" }}
          value={state.password}
          handleChange={handleChange}
          error={state.errors.password}
        />
        <Button className={styles.button}>Login Now</Button>
      </form>

      {/* Navigation footer */}
      <div className={styles.footer}>
        Note registered yet?&nbsp;
        <span className={styles.link} onClick={handleNavigate}>
          Sign up -&gt;
        </span>
      </div>
    </Section>
  );
};

export default Login;
