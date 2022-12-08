import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import UnderConstruction from "../../public/Icons/UnderConstruction.svg";
import Button from "../Button/Button";
const ErrorPage = () => {
  const router = useRouter();
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1.5rem",
        textAlign: "center",
        color: "var(--primary--light)",
      }}
    >
      <Image src={UnderConstruction} alt="Website Under Construction" />
      <h1>
        Page
        <br />
        Under Maintenance
      </h1>
      <Button
        variant="primary"
        alternate
        onClick={() => {
          router.back();
        }}
      >
        Go Back
      </Button>
    </div>
  );
};

export default ErrorPage;
