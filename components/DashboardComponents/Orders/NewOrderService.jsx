import React, { useState } from "react";
import { useOrderContext } from "../../../contexts/OrderContext";
import styles from "../../../styles/Modal.module.css";
const NewOrderService = ({ service }) => {
  const [active, setActive] = useState(false);
  const { handleInputChange, setService, images } = useOrderContext();
  const imageCount = images.filter(
    (item) => item.service === service.ServiceName
  ).length;
  return (
    <li
      className={
        styles.service + " " + styles.outer + (active ? " " + styles.open : "")
      }
    >
      <div className={styles.servicetitle} onClick={() => setActive(!active)}>
        <span>{service.ServiceName}</span>
        <span>starts at {service.Pricing}&#162;/image</span>
        <p>{imageCount != 0 ? imageCount + " image(s) selected" : ""}</p>
        <span>
          <svg
            width="10"
            height="auto"
            viewBox="0 0 14 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.arrow}
          >
            <path
              d="M2 1.5L11 10.5L2 19.5"
              stroke="var(--primary)"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </div>
      <div className={styles.serviceinfo + " " + styles.inner}>
        <p>Upload the images you need {service.ServiceName} done on.</p>
        <form>
          <input
            multiple
            type="file"
            onChange={handleInputChange}
            onClick={() => setService(service.ServiceName)}
          />
        </form>
      </div>
    </li>
  );
};

export default NewOrderService;
