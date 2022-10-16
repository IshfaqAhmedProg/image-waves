import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import Button from "../components/Button/Button";
import Divider from "../components/Divider/Divider";
import InputField from "../components/InputField/InputField";

import { useAuth } from "../contexts/AuthContext";

import formStyles from "../styles/Forms.module.css";

import { getRefinedFirebaseError } from "../shared/Functions/errorHandler";
import google from "../public/Logos/Google.svg";
import loader from "../public/Icons/loadericon.svg";

const Signup = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { sendEV, googleLogin, signup, user } = useAuth();
  const [errorMsg, setErrorMsg] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
    terms: false,
  });
  function handleError(error) {
    setErrorMsg(getRefinedFirebaseError(error));
    console.log([error]);
  }
  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    signup(data.email, data.password)
      .then(() => {
        router.replace("/dashboard");
        sendEV();
      })
      .catch((error) => handleError(error))
      .finally(() => setLoading(false));
  };
  const handleGoogleLogin = async () => {
      setLoading(true);
      googleLogin()
        .then(router.replace("/dashboard"))
        .catch((error) => handleError(error))
        .finally(()=>setLoading(false))      
  };
  if (user) {
    router.replace("/dashboard");
    return null;
  }
  return (
    <div className={formStyles.main}>
      <Head>
        <title>imageWAVES-Create a new account</title>
        <meta name="description" content="imageWAVES login page" />
      </Head>
      <div className={formStyles.container}>
        <h1>Create your account</h1>
        {
          //TODO ReAdd submit handler later
        }
        <form className={formStyles.form} onSubmit={handleSignup}>
          <fieldset className={formStyles.formfield}>
            <InputField
              tabIndex="1"
              type="email"
              placeholder="Enter email"
              onChange={(e) =>
                setData({
                  ...data,
                  email: e.target.value,
                })
              }
              value={data.email}
              id="email"
              required
            >
              Enter your Email
            </InputField>
            <InputField
              tabIndex="2"
              type="password"
              placeholder="Password"
              required
              onChange={(e) =>
                setData({
                  ...data,
                  password: e.target.value,
                })
              }
              value={data.password}
              minLength="8"
              maxLength="24"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            >
              Enter Password
            </InputField>
          </fieldset>

          <fieldset className={formStyles.formfield}>
            <input
              type="checkbox"
              id="terms"
              name="terms"
              value="terms"
              tabIndex="3"
              required
            />
            <label htmlFor="terms">
              &nbsp; I Accept the <b>Terms Of Service</b> and{" "}
              <b>Privacy Policy</b>
            </label>
          </fieldset>
          {errorMsg && (
            <fieldset className={formStyles.formfield}>
              <div className={formStyles.error}>{errorMsg}</div>
            </fieldset>
          )}
          <Button
            type="submit"
            variant="primary"
            tabIndex="4"
            disabled={loading}
          >
            {loading ? (
              <Image src={loader} alt="loading icon" width={35} height={35} />
            ) : (
              "Create account"
            )}
          </Button>
        </form>
        <div style={{ width: "20vw" }}>
          <Divider direction="horizontal">or</Divider>
        </div>
        {
          //TODO ReAdd google submit handler later
        }
        <Button variant="extsignin" /* onClick={handleGoogleLogin} */>
          Sign Up with Google&nbsp; <Image src={google} alt="google logo" />
        </Button>
        <div className={formStyles.formfield}>
          Already have an account?&nbsp;
          <Link href="/login" passHref>
            <a>
              <b>Log In.</b>
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
};

export default Signup;
