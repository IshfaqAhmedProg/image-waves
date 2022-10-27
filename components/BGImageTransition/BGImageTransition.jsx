import Image from "next/image";
import React, { useState, useEffect } from "react";
import bg1 from "../../public/Splashscreen/1.webp";
import bg2 from "../../public/Splashscreen/2.webp";
import bg3 from "../../public/Splashscreen/3.webp";
import bg4 from "../../public/Splashscreen/4.webp";
import bg5 from "../../public/Splashscreen/5.webp";
import bg6 from "../../public/Splashscreen/6.webp";
import bg7 from "../../public/Splashscreen/7.webp";
import styles from "./BGImageTransition.module.css";
import { shimmer, toBase64 } from "../../shared/Functions/blurData";
export default function BGImageTransition() {
  const images = [bg1, bg2, bg3, bg4, bg5, bg6, bg7];
  const [active, setActive] = useState(1);
  const delay = 3000; //ms
  function activeSlide() {
    //set active slide
    active > images.length - 1 ? setActive(1) : setActive(active + 1);
  }
  const autoplay = setTimeout(activeSlide, delay);
  function slideClass(x) {
    switch (x) {
      case active:
        return "active";
        break;
      default:
        return "";
        break;
    }
  }
  //Loading

  return (
    <div
      className={styles.container}
      onLoadedData={() => {
        autoplay;
      }}
    >
      {images.map((image, index) => {
        return (
          <div
            key={index + 1}
            className={styles.imagediv + " " + styles[slideClass(index + 1)]}
          >
            <Image
              src={image}
              layout="fill"
              objectFit="cover"
              alt={"background image " + (index + 1)}
              className={styles.image}
              loading="lazy"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`}
            />
          </div>
        );
      })}
    </div>
  );
}
