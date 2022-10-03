import "../styles/globals.css";
import Navbar from "../components/Navbar/Navbar";
import { AuthContextProvider } from "../contexts/AuthContext";
import { useRouter, Router } from "next/router";
import { ProtectedRoute } from "../components/ProtectedRoute";

//"Prompt"-font imports
import "@fontsource/prompt/400.css";
import "@fontsource/prompt/500.css";
import "@fontsource/prompt/700.css";

const noAuthRequired = ["/", "/login", "/signup"];

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  Router.events.on("routeChangeStart", (url) => {
    console.log("route is changing");
  });
  Router.events.on("routeChangeComplete", (url) => {
    console.log("route changed");
  });
  return (
    <AuthContextProvider>
      <Navbar></Navbar>
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
    </AuthContextProvider>
  );
}

export default MyApp;
