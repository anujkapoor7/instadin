"use client";

import { useEffect, useReducer, useState } from "react";
import Section from "../../section";
import Cross from "@/public/components/form/cross.svg";
import styles from "../styles.module.scss";
import Image from "next/image";
import Input from "../input";
import Button from "@/app/components/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Initial state for the forms
const initialState = {
  email: "",
  password: "",
  errors: {
    email: "",
    password: "",
  },
};

// Reducer function to manage form state
function formReducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
        errors: {
          ...state.errors,
          [action.field]: "",
        },
      };
    case "SET_ERROR":
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.field]: action.error,
        },
      };
    default:
      return state;
  }
}

const Login = ({ withCloseButton }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [user, setUser] = useState(null);
  const { replace } = useRouter();

  useEffect(() => {
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    if (user) {
      setUser(user);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    let valid = true;

    if (!user || ![user?.email, user?.username].includes(state.email)) {
      valid = false;
      dispatch({
        type: "SET_ERROR",
        field: "email",
        error:
          "User does not exist by this email or username, please create new account",
      });
    }

    if (user && state.password != user?.password) {
      valid = false;
      dispatch({
        type: "SET_ERROR",
        field: "password",
        error: "Password does not match, please try again",
      });
    }

    if (valid) {
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

  return (
    <Section className={styles.formWrapper}>
      {/* Close button */}
      {withCloseButton && (
        <div className={styles.crossWrapper}>
          <Image src={Cross} alt="cross" width={16} height={16} />
        </div>
      )}

      {/* Headings */}
      <h3>WELCOME BACK</h3>
      <h2>Log into your account</h2>

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
        <Link href="/register" className={styles.link}>
          Sign up -&gt;
        </Link>
      </div>
    </Section>
  );
};

export default Login;
