import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import formStyles from "../styles/Forms.module.css";

const Signup = () => {
  const router = useRouter();
  const { user, signup } = useAuth();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signup(data.email, data.password);
      router.push("/dashboard");
    } catch (err) {
      console.log(err);
    }
    console.log(user);
  };

  return (
    <div className={formStyles.container}>
      <h1>Signup</h1>
      <form className={formStyles.form} onSubmit={handleSignup}>
        <fieldset className={formStyles.formfield}>
          <label>Email address</label>
          <input
            type="email"
            placeholder="Enter email"
            required
            onChange={(e) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            value={data.email}
          />
        </fieldset>

        <fieldset className={formStyles.formfield}>
          <label>Password</label>
          <input
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
          />
        </fieldset>

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
