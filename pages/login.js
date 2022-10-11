import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import Button from "../components/Button/Button";
import Divider from "../components/Divider/Divider";
import InputField from "../components/InputField/InputField";

import { useAuth } from "../contexts/AuthContext";

import formStyles from "../styles/Forms.module.css";

import { getRefinedFirebaseError } from "../shared/Functions/errorHandler";
import google from "../public/Logos/Google.svg";
import loader from "../public/Icons/loadericon.svg";

export default function Login() {
  const router = useRouter();
  const { user, login, googleLogin } = useAuth();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  function handleError(err) {
    setErrorMsg(getRefinedFirebaseError(err));
    console.log([err]);
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
      handleError(err);
    }
  };
  if (user) {
    router.replace("/dashboard");
    return null;
  }
  return (
    <div className={formStyles.main}>
      <div className={formStyles.container}>
        <h1>Log In</h1>
        {
          //TODO ReAdd submit handler later
        }
        <form className={formStyles.form} onSubmit={handleLogin}>
          {errorMsg && (
            <fieldset className={formStyles.formfield}>
              <div className={formStyles.error}>{errorMsg}</div>
            </fieldset>
          )}
          <fieldset className={formStyles.formfield}>
            <InputField
              onChange={(e) =>
                setData({
                  ...data,
                  email: e.target.value,
                })
              }
              value={data.email}
              type="email"
              placeholder="Enter email"
              id="email"
              required
            >
              Enter your Email
            </InputField>

            <InputField
              onChange={(e) =>
                setData({
                  ...data,
                  password: e.target.value,
                })
              }
              value={data.password}
              type="password"
              placeholder="Enter password"
              id="password"
              required
            >
              Enter Password
            </InputField>
          </fieldset>
          <fieldset className={formStyles.formfield}>
            <div className={formStyles.forgotpass}>
              Forgot your password?
              <Link href="/interface/reset_password">
                <a>
                  <b> Recover Password</b>
                </a>
              </Link>
            </div>
          </fieldset>

          <Button type="submit" variant="primary">
            {loading ? (
              <Image src={loader} alt="loading icon" width={35} height={35} />
            ) : (
              "Log In"
            )}
          </Button>
        </form>
        <div style={{ width: "20vw" }}>
          <Divider direction="horizontal">or</Divider>
        </div>
        {
          //TODO ReAdd google submit handler later
        }
        <Button variant="extsignin" onClick={handleGoogleLogin}>
          Sign in with Google&nbsp; <Image src={google} alt="google logo" />
        </Button>
        <div className={formStyles.formfield}>
          Don`t have an account?&nbsp;
          <Link href="/signup" passHref>
            <a>
              <b>Sign Up</b>
            </a>
          </Link>
        </div>
      </div>
      <div
        className={formStyles.result}
        style={{
          backgroundImage: "url(/check1.jpg)",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
}
