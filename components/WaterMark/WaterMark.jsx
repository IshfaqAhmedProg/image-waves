import Link from "next/link";
import React from "react";

const WaterMark = () => {
  const containerStyle = {
    paddingBlock: "0.5em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    backgroundColor: "var(--light--gray)",
    color: "var(--gray--dark)",
  };
  const blendingMode = {
    mixBlendMode: "multiply",
  };
  return (
    <div style={containerStyle}>
      <p>
        Designed and Developed by{" "}
        <strong><Link href="https://ishfaqahmed.netlify.app">Ishfaq Ahmed</Link></strong>.
      </p>
      <svg
        width="35"
        height="35"
        viewBox="0 0 78 78"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="39"
          cy="39"
          r="37"
          stroke="var(--gray--dark)"
          strokeWidth="3"
        />
        <path
          d="M2.5 41L25.75 17.75M25.75 17.75L39.5 4M25.75 17.75L39.5 74M39.5 4V74M39.5 4L50 29.5L69 19L39.5 74M39.5 74H43M39.5 74H36.5M30.5 36.5L34 29.5L39.5 35.5"
          stroke="var(--gray--dark)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="22.5" cy="12.5" r="3.5" fill="var(--gray--dark)" />
      </svg>
    </div>
  );
};

export default WaterMark;
