import React, { useEffect, useState } from "react";
import styles from "./PopularServices.module.css";
import Image from "next/image";
import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
} from "react-compare-slider";
const PopularServices = () => {
  const [service, setService] = useState({
    name: "Clipping Path",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit consectetur adipisicing elitconsectetur adipisicing elitconsectetur adipisicing elit. Nadolorem",
    beforeImg: "/check1.jpg",
    afterImg: "/check2.png",
  });

  return (
    <div className={styles.popcontainer}>
      <div className={styles.poptextbg}></div>
      <div className={styles.poptextcontent}>
        <div className={styles.poptitle}>
          <h2>Our Most</h2>
          <h1>Popular Services</h1>
        </div>
        <div className={styles.poppreview}>
          <div className={styles.poppreviewdesc}>
            <h2>{service.name}</h2>
            <p>
              {service.desc}
            </p>
          </div>
          <div className={styles.poppreviewarrow}>
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
          <div className={styles.poppreviewcomp}>
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
          <div className={styles.poppreviewarrow}>
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
      <div className={styles.popbg}></div>
    </div>
  );
};

export default PopularServices;
