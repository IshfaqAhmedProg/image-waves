import React, { useState } from "react";
import formStyles from "../../styles/Forms.module.css";
import { useAuth } from "../../contexts/AuthContext";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";
export default function ResetPassword() {
  const { resetPass } = useAuth();
  const [statusMsg, setStatusMsg] = useState("");
  const [formSuccess, setformSuccess] = useState(false);
  const [data, setData] = useState({
    email: "",
  });
  const handleResetPassword = (e) => {
    e.preventDefault();
    resetPass(data.email).then(
      setStatusMsg("Password Reset mail sent. Please check your inbox.")
    ).then(setformSuccess(true));
  };
  return (
    <div className={formStyles.main}>
      <div className={formStyles.container}>
        <h1>Reset Password</h1>

        <form className={formStyles.form} onSubmit={handleResetPassword}>
          <fieldset className={formStyles.formfield}>
            <InputField
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
            >
              Enter your Email
            </InputField>
          </fieldset>
          {statusMsg && (
            <fieldset className={formStyles.formfield}>
              <div className={formStyles.error}>{statusMsg}</div>
            </fieldset>
          )}
          <Button type="submit" variant="primary" id="submit" disable={formSuccess}>
            Reset Password
          </Button>
        </form>
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
