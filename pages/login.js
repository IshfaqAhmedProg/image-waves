import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Button from "../components/Button/Button";
import { useAuth } from "../contexts/AuthContext";
import formStyles from "../styles/Forms.module.css";
import Image from "next/image";
import google from "../public/Logos/Google.svg";
import { getRefinedFirebaseError } from "../shared/Functions/errorHandler";

export default function Login() {
  const router = useRouter();
  const { user, login, googleLogin } = useAuth();
  const [errorMsg, setErrorMsg] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  function handleError(err) {
    setErrorMsg(getRefinedFirebaseError(err));
    console.log(err);
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(data.email, data.password);
      router.replace("/dashboard");
    } catch (err) {
      handleError(err);
    }
  };
  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      router.replace("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={formStyles.container}>
      <h1>Login</h1>
      <button className={formStyles.extsignin} onClick={handleGoogleLogin}>
        Sign in with Google&nbsp; <Image src={google} alt="google logo" />
      </button>
      <form className={formStyles.form} onSubmit={handleLogin}>
        <fieldset className={formStyles.formfield}>
          <label>Email address</label>
          <input
            onChange={(e) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            value={data.email}
            required
            type="email"
            placeholder="Enter email"
          />
        </fieldset>

        <fieldset className={formStyles.formfield}>
          <label>Password</label>
          <input
            onChange={(e) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            value={data.password}
            required
            type="password"
            placeholder="Password"
          />
        </fieldset>
        {errorMsg && (
          <fieldset className={formStyles.formfield}>
            <div id="error-label">{errorMsg}</div>
          </fieldset>
        )}
        <Button type="submit" variant="primary">
          Log In
        </Button>
      </form>
      <div>
        Don't have an account?&nbsp;
        <Link href="/signup" passHref>
          Sign Up
        </Link>
      </div>
    </div>
  );
}
