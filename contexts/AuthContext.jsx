import { createContext, useContext, useState, useEffect } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
  signInWithPopup,
  sendPasswordResetEmail,
  sendEmailVerification,
} from "firebase/auth";

import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/config";

const AuthContext = createContext({});
export const useAuth = () => useContext(AuthContext);
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState();
  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          verified: user.emailVerified,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then(async (cred) => {
        await setDoc(doc(db, "users", cred.user.uid), {
          UID: cred.user.uid,
          Email: cred.user.email,
        });
      })
      .catch((err) => {
        console.log([err]);
      });
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };
  const logout = async () => {
    setUser(null);
    await signOut(auth);
  };
  const resetPass = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const sendEV = () => {
    return sendEmailVerification(auth.currentUser).then(() => {
      console.log("email sent");
    });
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        googleLogin,
        signup,
        logout,
        sendEV,
        resetPass,
        sendEV,
      }}
    >
      {loading ? "loading" : children}
    </AuthContext.Provider>
  );
};
