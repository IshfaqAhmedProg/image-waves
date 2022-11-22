import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useOrderContext } from "../../../../contexts/OrderContext";
import Button from "../../../Button/Button";
import styles from "./SSSInterface.module.css";
const DisplayImages = ({ imageCount, service }) => {
  const [displayImages, setDisplayImages] = useState([]);
  //const [extractUrl, setExtractUrl] = useState([]);
  const { handleClearService, activeService, cart } = useOrderContext();
  // useEffect(() => {
  //   if (activeService[0] == service.ID) {
  //     setExtractUrl(cart.filter((item) => item.service === service.ID));
  //   }
  // }, [cart, service.ID, activeService]);
  useEffect(() => {
    const extractUrl = cart.filter((item) => item.service === service.ID);
    const objectUrl = [];
    if (activeService[0] == service.ID) {
      extractUrl.forEach((element) => {
        objectUrl.push(URL.createObjectURL(element));
      });
      setDisplayImages(objectUrl);
    }
  }, [service.ID, activeService, cart]);
  // useEffect(() => {
  //   setDisplayImages(getServiceImages(service));
  // }, [getServiceImages, service]);
  return (
    <div
      className={
        styles.displayimages + " " + (imageCount == "" ? styles.hidden : "")
      }
    >
      <div className={styles.controls}>
        <Button
          variant="plain"
          onClick={(e) => {
            e.preventDefault();
            handleClearService(service.ID);
          }}
          disabled={imageCount != 0 ? false : true}
        >
          <svg
            width="3rem"
            height="3rem"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6V18C18 19.1046 17.1046 20 16 20H8C6.89543 20 6 19.1046 6 18V6M15 6V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V6M4 6H20M10 10V16M14 10V16"
              stroke="var(--red)"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Button>
      </div>
      <div className={styles.images}>
        {displayImages.map((image) => (
          <div key={image}>
            <Image
              className={styles.image}
              alt="display"
              src={image}
              layout="fill"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayImages;
