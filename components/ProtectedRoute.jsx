import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (user == null) {
      console.log([user]);
      router.push("/login");
    }
  }, [router, user]);

  return <>{user ? children : null}</>;
};
