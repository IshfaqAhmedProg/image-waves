import React, { useEffect } from "react";
import styles from "./LineDrawer.module.css";
const StyleInjector = ({ children, id }) => {
  const StyledChildren = () =>
    React.Children.map(children, (child) =>
      React.cloneElement(child, {
        className: `${styles.line}`,
        id: id,
      })
    );

  return <StyledChildren />;
};
const LineDrawer = ({
  children,
  id,
  viewBox,
  duration,
  delay,
  stagger = 300,
  right = 0,
  top = 0,
  float = "none",
  width=null,
  height=null
}) => {
  useEffect(() => {
    const lines = document.querySelectorAll("#" + id);
    let dur = duration;
    lines.forEach((line) => {
      var linelen = line.getTotalLength();
      line.style.setProperty("--line-length", linelen);
      line.style.setProperty("--dur", dur + "ms");
      line.style.setProperty("--delay", delay + "ms");
      dur = dur + stagger;
    });
  },[]);
  return (
    <div
      className={styles.bglinescontainer}
      style={{ float: float }}
      id="bglinescontainer"
    >
      <svg
        className={styles.bglines}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        style={{ right: right, top: top }}
      >
        <StyleInjector id={id}>{children}</StyleInjector>
      </svg>
    </div>
  );
};

export default LineDrawer;
