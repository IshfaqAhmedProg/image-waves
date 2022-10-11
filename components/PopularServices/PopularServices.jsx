import React, { useEffect, useState } from "react";
import styles from "./PopularServices.module.css";
import Image from "next/image";
import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
} from "react-compare-slider";
import LineDrawer from "../LineDrawer/LineDrawer";
const PopularServices = () => {
  const [service, setService] = useState({
    name: "Clipping Path",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit consectetur adipisicing elitconsectetur adipisicing elitconsectetur adipisicing elit. Nadolorem",
    beforeImg: "/check1.jpg",
    afterImg: "/check2.png",
  });

  return (
    <div className={styles.container}>
      <div className={styles.textbg}></div>
      <div className={styles.textcontent}>
        <div className={styles.title}>
          <h2>Our Most</h2>
          <h1>Popular Services</h1>
        </div>
        <div className={styles.preview}>
          <div className={styles.previewdesc}>
            <h2>{service.name}</h2>
            <p>{service.desc}</p>
          </div>
          <div className={styles.previewarrow}>
            <svg
              viewBox="0 0 32 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27 42.9998L8 23.9998L27 4.99976"
                stroke="#828282"
                strokeWidth="10"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className={styles.previewcomp}>
            <ReactCompareSlider
              handle={
                <ReactCompareSliderHandle
                  buttonStyle={{
                    WebkitBackdropFilter: "blur(20px)",
                    backdropFilter: "blur(20px)",
                    border: "2px solid #5CFC4E55",
                    background: "#5CFC4E35",
                    color: "#FFFFFF",
                  }}
                  linesStyle={{ color: "#5CFC4E", opacity: 0.5 }}
                />
              }
              boundsPadding={0}
              changePositionOnHover
              itemOne={
                <Image
                  alt="Image one"
                  src={service.beforeImg}
                  layout="fill"
                  objectFit="cover"
                />
              }
              itemTwo={
                <Image
                  alt="Image two"
                  src={service.afterImg}
                  layout="fill"
                  objectFit="cover"
                />
              }
              position={50}
              style={{
                width: "100%",
                minHeight: "100%",
              }}
            ></ReactCompareSlider>
          </div>
          <div className={styles.previewarrow}>
            <svg
              viewBox="0 0 32 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 4.99976L24 23.9998L5 42.9998"
                stroke="#828282"
                strokeWidth="10"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className={styles.bg}>
        <LineDrawer viewBox="0 0 608 759" duration={3000} delay={1000} stagger={300} id='line'>
          <path
            d="M208.5 35C335.833 55.1667 546.768 98.1451 590.5 188C651.823 314 495 370 605.5 510C694.795 623.134 903 592.5 961 633"
            stroke="#5CFC4EAA"
            stroke-width="70"
          />
          <path
            d="M84 92C193.533 109.348 354.886 139.075 428.5 205.5C440.463 216.294 456.387 236.439 462.5 249C526.5 380.5 372 470.5 523 588C571 625.351 655 662 736.5 672"
            stroke="#5CFC4E99"
            stroke-width="51"
          />
          <path
            d="M7 140C134.333 160.167 345.268 203.145 389 293C453 424.5 296.5 468.5 407 608.5C496.295 721.634 701.5 697.5 759.5 738"
            stroke="#5CFC4E55"
            stroke-width="26"
          />
          <path
            d="M1.5,193L123,217.953C212.35,243.238 294.531,279.669 320,332C384,463.5 227.5,507.5 338,647.5C400.955,727.262 521.522,738.794 607.5,752.85"
            stroke="#5CFC4E22"
            stroke-width="12"
          />
        </LineDrawer>
      </div>
    </div>
  );
};

export default PopularServices;
