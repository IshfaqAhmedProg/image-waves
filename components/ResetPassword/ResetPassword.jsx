import React, { useState } from "react";
import formStyles from "../../styles/Forms.module.css";
import { useAuth } from "../../contexts/AuthContext";
import Button from '../Button/Button';
export default function ResetPassword() {
  const { resetPass } = useAuth();
  const[statusMsg,setStatusMsg]=useState("")
  const [data, setData] = useState({
    email: "",
  });
  const handleResetPassword = (e) => {
    e.preventDefault();
    resetPass(data.email).then(setStatusMsg("Password Reset mail sent. Please check your inbox."));
  };
  return (
    <div className={formStyles.container}>
      <h1>Reset Password</h1>

      <form className={formStyles.form} onSubmit={handleResetPassword}>
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
        {statusMsg && (
          <fieldset className={formStyles.formfield}>
            <div className={formStyles.error}>{statusMsg}</div>
          </fieldset>
        )}
        <Button type="submit" variant="primary">
          Reset Password
        </Button>
      </form>
    </div>
  );
}
