import React from "react";
import Button from "../../Button/Button";
import Divider from "../../Divider/Divider";
import LineDrawer from "../../LineDrawer/LineDrawer";
import styles from "./Banner.module.css";
import useMediaQuery from "../../../shared/Hooks/WindowDimension";
const Banner = () => {
  const isBP = useMediaQuery(780);
  return (
    <div className={styles.container}>
      <div className={styles.bg}>
        <LineDrawer
          width="401"
          height="45"
          viewBox="0 0 401 45"
          duration={3000}
          delay={0}
          stagger={5000}
          id="banneline"
        >
          <path
            d="M28.9302 71.4971C38.6739 60.5788 69.6487 33.6523 115.598 33.6523C173.035 33.6523 186.881 74.4736 238.677 74.4736C290.472 74.4736 291.498 50.2742 324.319 50.2742C350.575 50.2742 369.448 66.4071 375.601 74.4736"
            stroke="#5CFC4E"
            strokeWidth="10"
          />
          <path
            opacity="0.8"
            d="M18.4438 64.2685C28.1876 53.3502 69.6488 20.0454 115.598 20.0454C173.035 20.0454 186.881 60.8667 238.677 60.8667C290.472 60.8667 291.498 36.6672 324.319 36.6672C350.576 36.6672 379.303 55.764 383.621 71.072"
            stroke="#5CFC4E"
            strokeWidth="8"
          />
          <path
            opacity="0.6"
            d="M7.93205 62.3103C17.3964 51.2759 64.652 12.291 113.684 11.6979C171.112 11.0033 185.995 51.6509 237.783 51.0245C289.57 50.3981 290.212 28.5052 322.796 25.7931C359.203 22.7629 383.419 53.0906 387.985 62.817"
            stroke="#5CFC4E"
            strokeWidth="6"
          />
          <path
            opacity="0.4"
            d="M2.41083 63.7809C11.7056 52.6782 28.1401 -1.37709 113.167 2.93079C170.449 5.833 186.085 42.3551 237.861 41.3518C289.636 40.3484 289.674 16.1387 322.482 15.5029C348.729 14.9943 398.425 37.4793 398.425 68.9457"
            stroke="#5CFC4E"
            strokeWidth="5"
          />
        </LineDrawer>
      </div>
      <div className={styles.title + " " + styles.partition}>
        <h1>
          Get a <span>Free</span> Quote!
        </h1>
        <Button variant="secondary">Contact Us</Button>
      </div>
      <Divider direction={isBP ? "horizontal" : "vertical"} colorMode="dark">
        or
      </Divider>
      <div className={styles.content + " " + styles.partition}>
        <Button variant="large">Order Now</Button>
      </div>
    </div>
  );
};

export default Banner;
