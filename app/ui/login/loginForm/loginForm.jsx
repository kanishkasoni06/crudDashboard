"use client";

import { authenticate } from "@/app/lib/actions";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined);
  const defaultValues = {
    username: "kanishka soni", // Pre-filled but editable
    password: "12345678" // Pre-filled but editable
  };

  return (
    <form action={formAction} className={styles.form}>
      <h1>Login</h1>
      <input type="text" placeholder="username" defaultValue={defaultValues.username} name="username" />
      <input type="password" placeholder="password" defaultValue={defaultValues.password} name="password" />
      <button>Login</button>
      {state && state}
    </form>
  );
};

export default LoginForm;
