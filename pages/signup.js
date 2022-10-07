import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import Image from "next/image";
import Link from "next/link";
import formStyles from "../styles/Forms.module.css";
import Button from "../components/Button/Button";
import google from "../public/Logos/Google.svg";
import InputField from "../components/InputField/InputField";
import Divider from "../components/Divider/Divider";
import { getRefinedFirebaseError } from "../shared/Functions/errorHandler";

const Signup = () => {
  const router = useRouter();
  const { googleLogin, signup } = useAuth();
  const [errorMsg, setErrorMsg] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
    terms: false,
  });
  function handleError(err) {
    setErrorMsg(getRefinedFirebaseError(err));
    console.log([err]);
  }
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signup(data.email, data.password);
      router.push("/dashboard");
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
    <div className={formStyles.main}>
      <div className={formStyles.container}>
        <h1>Create your account</h1>

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
          <Button type="submit" variant="primary" tabIndex="4">
            Create account
          </Button>
        </form>
        <div style={{ width: "20vw" }}>
          <Divider direction="horizontal">or</Divider>
        </div>
        <Button variant="extsignin" onClick={handleGoogleLogin}>
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
