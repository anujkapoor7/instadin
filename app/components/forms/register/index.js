"use client";

import { useReducer } from "react";
import Section from "../../section";
import Cross from "@/public/components/form/cross.svg";
import styles from "../styles.module.scss";
import Image from "next/image";
import Input from "../input";
import Button from "@/app/components/button";
import Link from "next/link";

// Initial state for the forms
const initialState = {
  email: "",
  username: "",
  password: "",
  errors: {
    email: "",
    username: "",
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

const Register = ({ withCloseButton }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { replace } = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    let valid = true;

    if (!state.email.includes("@")) {
      valid = false;
      dispatch({
        type: "SET_ERROR",
        field: "email",
        error: "Invalid email format",
      });
    }

    if (state.username.length < 3) {
      valid = false;
      dispatch({
        type: "SET_ERROR",
        field: "username",
        error: "Username must be at least 3 characters long",
      });
    }

    if (state.password.length < 6) {
      valid = false;
      dispatch({
        type: "SET_ERROR",
        field: "password",
        error: "Password must be at least 6 characters long",
      });
    }

    if (valid) {
      localStorage.setItem("user", JSON.stringify(state));
      replace("/login");
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
      {withCloseButton && (
        <div className={styles.crossWrapper}>
          <Image src={Cross} alt="cross" width={16} height={16} />
        </div>
      )}

      <h3>SIGN UP</h3>
      <h2>Create an account to continue</h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="text"
          name="email"
          placeholder="Enter your email"
          value={state.email}
          handleChange={handleChange}
          error={state.errors.email}
        />
        <Input
          label="Username"
          type="text"
          name="username"
          placeholder="Choose a preferred username"
          style={{ marginTop: "1rem" }}
          value={state.username}
          handleChange={handleChange}
          error={state.errors.username}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Choose a strong password"
          style={{ marginTop: "1rem" }}
          value={state.password}
          handleChange={handleChange}
          error={state.errors.password}
        />
        <Button className={styles.button}>Continue</Button>
      </form>

      <div className={styles.footer}>
        Already have an account?&nbsp;
        <Link href="/login" className={styles.link}>
          Login -&gt;
        </Link>
      </div>
    </Section>
  );
};

export default Register;
